type IPredictedPriceResponse = {
  car: any,
  price: number,
  listings: []
}

type IGetPredictedPrice = {
  status: 200,
  predictedPrice: number,
} | {
  status: 400,
  error: unknown,
}

