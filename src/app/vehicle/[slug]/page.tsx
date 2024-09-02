"use client"
import ErrorScreen from "@/components/molecules/ErrorScreen";
import LoadingScreen from "@/components/molecules/LoadingScreen";
import VehicleCard from "@/components/molecules/VehicleCard";
import { avgMileage, avgPrice } from "@/utils/calculations/MarketCalculations";
import useGetEstimate from "@/utils/hooks/useGetEstimate";
import { extractJSONFromResponse } from "@/utils/openai/extractJsonFromResponse";
import { getInsightsAi } from "@/utils/openai/getInsightsAi";
import { useEffect, useState } from "react";

const waitTimeInMs = 6000 //6 seconds, adjust if needed. This will keep the timeout and loading duration in sync.

export type AIResponseType = { heading: string, content: string }[]

export default function Page({ params }: { params: { slug: string } }) {
  const [pageLoading, setPageLoading] = useState(true)
  const veh_plate = params.slug
  const { data, error, loading } = useGetEstimate(veh_plate)
  const [aiInsights, setAiInsights] = useState<AIResponseType | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, waitTimeInMs);
  }, [])

  useEffect(() => {
    (async () => {
      if (data) {
        const aiResponse = await getInsightsAi(avgPrice(data.listings), avgMileage(data.listings), data.car.mileage * 10, data.price)
        if (aiResponse.content) {
          const jsonObject: AIResponseType = extractJSONFromResponse(aiResponse.content)
          setAiInsights(jsonObject)
        }
      }
    })()
  }, [data])

  if (error) return <ErrorScreen errMsg={error} />


  if (loading || pageLoading) {
    return (
      <LoadingScreen intervalTimingMS={waitTimeInMs} />
    )
  }

  if (data) {
    return (
      <main className="pt-[135px] max-w-[1440px] mx-auto px-[140px]">
        <section className="bg-kaar-400 rounded-[29px] w-full h-[500px] p-12 flex justify-between">
          <VehicleCard type="yourcar" yourCar={data.car} />
          <VehicleCard type="market" listings={data.listings} />
          <VehicleCard type="insights" price={data.price} insights={aiInsights} />
        </section>
      </main>)
  }
}