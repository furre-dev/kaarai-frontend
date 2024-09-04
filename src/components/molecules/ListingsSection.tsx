import { convertNumberToDotString } from "@/utils/strings/conversions"
import Link from "next/link"
import { useState } from "react"

export default function ListingsSection({ listings, year }: { listings: ListingsType, year: string }) {
  const [sortFromHigh, setSortFromHigh] = useState<boolean>(false)

  const lowToHighSorting = sortFromHigh ? listings.sort((a, b) => a.price - b.price) : listings.sort((a, b) => b.price - a.price);


  return (
    <section className="mt-16">
      <div className="flex justify-between items-center text-kaar-600">
        <p className="text-4xl font-light">Similar cars on the market</p>
        <button onClick={() => setSortFromHigh(!sortFromHigh)} className="text-2xl font-medium flex items-center">
          {sortFromHigh ? "Low to high" : "High to low"}
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {lowToHighSorting.map((listing) => {
          return (
            <Link href={listing.ad_href} target="_blank" className="w-[571px] bg-kaar-500 p-4 text-kaar-100 rounded-[30px] flex flex-col justify-between">
              <div>
                <h4 className="text-4xl font-light break-words">{listing.name}</h4>
                <p className="text-base font-black">{year} • {convertNumberToDotString(listing.mileage)} KM</p>
              </div>
              <h3 className="text-5xl font-black mt-10">{convertNumberToDotString(listing.price)} SEK</h3>
            </Link>
          )
        })}
      </div>
    </section>
  )
}