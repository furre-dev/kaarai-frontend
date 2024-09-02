"use client"

import { useEffect, useState } from "react"
import { fetchResponseErrorMessage, fetchServerErrorMessage } from "../strings/errors";

export default function useGetEstimate(veh_reg: string) {
  const [data, setData] = useState<IPredictedPriceResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const response = await fetch("http://127.0.0.1:8000/get-predicted-price", {
          method: "POST",
          body: JSON.stringify({ veh_reg: veh_reg }),
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.status === 400) {
          setError(fetchResponseErrorMessage)
        }

        const data: IPredictedPriceResponse = await response.json()
        setLoading(false)
        setData(data)

      } catch (e) {
        setLoading(false)
        setError(fetchServerErrorMessage);
      }
    })()
  }, [])

  return { data, loading, error }
}
