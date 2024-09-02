type CarValues = {
  brand: string,
  model: string,
  year: string,
  gearbox: string,
  fuel_type: string,
  car_hp: string,
  mileage: number
}

type ListingsType = {
  ad_href: string,
  mileage: number,
  name: string,
  price: number
}[]

type IPredictedPriceResponse = {
  car: CarValues,
  price: number,
  listings: ListingsType
}

type IGetPredictedPrice = {
  status: 200,
  predictedPrice: number,
} | {
  status: 400,
  error: unknown,
}

