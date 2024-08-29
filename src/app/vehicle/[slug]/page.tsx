"use client"
import LoadingScreen from "@/components/LoadingScreen"
import useGetEstimate from "@/utils/hooks/useGetEstimate";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [pageLoading, setPageLoading] = useState(true)
  const waitTime = 6000
  const veh_plate = params.slug
  const { data, error, loading } = useGetEstimate(veh_plate)

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, waitTime);
  }, [])


  if (loading || pageLoading) {
    return (
      <LoadingScreen intervalTimingMS={waitTime} />
    )
  }

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }

  if (error) return <div>ERROR: {error}</div>

}
