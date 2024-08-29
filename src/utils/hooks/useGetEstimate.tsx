"use client"

import { useEffect, useState } from "react"

const errorMessage = "Could not get car price information. Try again later, but if it presists please contact support!"

export default function useGetEstimate(veh_reg: string) {
  const [data, setData] = useState<{ car: any, price: any, listings: [] } | null>(null);
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
        const data: IPredictedPriceResponse = await response.json()
        setLoading(false)
        setData(data)

      } catch (e) {
        console.error(e)
        setLoading(false)
        setError(errorMessage);
      }
    })()
  }, [])

  return { data, loading, error }
}
