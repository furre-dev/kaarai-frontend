"use client"
import { convertNumberToDotString } from "@/utils/strings/conversions";
import MainButton from "./MainButton";
import { useEffect, useState } from "react";
import { getInsightsAi } from "@/utils/openai/getInsightsAi";
import { AIResponseType } from "@/app/vehicle/[slug]/page";

export default function CardXL({ price, insights }: { price: number, insights: AIResponseType | null }) {
  const [revealSidebar, setRevealSidebar] = useState<boolean>(false)


  return (
    <section className="h-full w-2/5 relative">
      <div className="w-full h-full rounded-[29px] bg-kaar-500 relative pt-[63px] px-[15px] flex flex-col items-center justify-between text-center z-10">
        <h4 className="text-kaar-400 font-black text-5xl absolute -top-2 left-2/4 -translate-x-2/4 w-max pointer-events-none">
          INSIGHTS
        </h4>
        <div>
          <h3 className="text-3xl text-kaar-100 font-extralight">Estimated value of your car</h3>
          <h2 className="text-kaar-100 text-6xl font-bold mt-2">{convertNumberToDotString(price)} SEK</h2>
        </div>
        <div className="mb-5 w-full">
          <MainButton onClick={() => setRevealSidebar(!revealSidebar)} full_w className="whitespace-nowrap w-full" button_text={`${revealSidebar ? "Hide" : "Reveal"} AI Analysis`} helper_text="Get AI-driven insights on your car’s price, market position, and selling tips." />
        </div>
      </div>
      {<div id="style-2" className={`insights absolute overflow-y-scroll overflow-x-hidden h-full w-full z-[5] bg-kaar-950 rounded-[29px] top-0 transition-all duration-200 p-3 pr-[25%] ${revealSidebar ? "-left-[75%] opacity-100" : "left-0 opacity-0"}`}>
        {insights && insights.map((item, i) => {
          return (
            <p key={i} className={`text-kaar-100 ${i !== 0 ? "my-2" : ""}`}>
              <span className="font-bold">{item.heading}: </span><br />
              {item.content}
            </p>
          )
        })}
      </div>}
    </section >
  )
}