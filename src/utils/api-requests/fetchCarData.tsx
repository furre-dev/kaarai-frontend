async function fetchCarData(veh_reg: string) {
  const response = await fetch("http://127.0.0.1:8000/get-predicted-price", {
    method: "POST",
    body: JSON.stringify({ veh_reg: veh_reg }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response
}
