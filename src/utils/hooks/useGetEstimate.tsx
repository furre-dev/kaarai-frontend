"use client"

import { useEffect, useState } from "react"

const errorMessage = "Please double-check the license plate you entered and try again. If the issue continues, feel free to contact support, and we'll be happy to assist you in resolving the problem!"

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

        if (!response.ok) {
          console.log(response.status)
        }

        const data: IPredictedPriceResponse = await response.json()
        setLoading(false)
        setData(data)

      } catch (e) {
        setLoading(false)
        setError(errorMessage);
      }
    })()
  }, [])

  return { data, loading, error }
}
