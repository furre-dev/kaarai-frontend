"use client"
import ErrorScreen from "@/components/molecules/ErrorScreen";
import LoadingScreen from "@/components/molecules/LoadingScreen";
import useGetEstimate from "@/utils/hooks/useGetEstimate";
import { useEffect, useState } from "react";

const waitTimeInMs = 6000 //6 seconds, adjust if needed. This will keep the timeout and loading duration in sync.

export default function Page({ params }: { params: { slug: string } }) {
  const [pageLoading, setPageLoading] = useState(true)
  const veh_plate = params.slug
  const { data, error, loading } = useGetEstimate(veh_plate)

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
    }, waitTimeInMs);
  }, [])

  if (error) return <ErrorScreen errMsg={error} />


  if (loading || pageLoading) {
    return (
      <LoadingScreen intervalTimingMS={waitTimeInMs} />
    )
  }

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }
}
