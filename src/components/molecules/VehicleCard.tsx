import { avgMileage, avgPrice } from "@/utils/calculations/MarketCalculations"
import { convertNumberToDotString, truncateString } from "@/utils/strings/conversions"
import Card from "../atoms/Card"
import CardXL from "../atoms/CardXL"
import { AIResponseType } from "@/app/vehicle/[slug]/page"

function mapCarInformation(carInfo: CarValues): string[][] {
  return [
    ["Car model", truncateString(`${carInfo.brand} ${carInfo.model}`)],
    ["Fuel", carInfo.fuel_type],
    ["Transmission", carInfo.gearbox],
    ["Year", carInfo.year],
    ["Mileage", `${convertNumberToDotString(carInfo.mileage * 10)} KM`],
  ]
}

function mapMarketInformation(listings: ListingsType) {
  const totalListings = listings.length
  return [
    ["Total listings", totalListings],
    ["Avg. price", `${convertNumberToDotString(avgPrice(listings))} SEK`],
    ["Avg. mileage", `${convertNumberToDotString(avgMileage(listings) * 10)} KM`]
  ]
}

type CardParams = {
  type: "yourcar"
  yourCar: CarValues
} | {
  type: "market"
  listings: ListingsType
} | {
  type: "insights"
  price: number,
  insights: AIResponseType | null
}


export default function VehicleCard(params: CardParams) {

  if (params.type === "insights") {
    return (
      <CardXL insights={params.insights} price={params.price} />
    )
  }

  const cardMap = params.type === "yourcar" ? mapCarInformation(params.yourCar) : params.type === "market" ? mapMarketInformation(params.listings) : null
  return (
    <Card type={params.type} cardMap={cardMap} />
  )
}