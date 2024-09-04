"use server"
import OpenAI from "openai";
import { botInstructions } from "../strings/openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export async function getInsightsAi(market_avg_price: number, market_avg_mileage: number, car_mileage: number, car_est_price: number) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: botInstructions },
      {
        role: "user",
        content: "Current market avarage price:" + market_avg_price + ". Current market avarage mileage:" + market_avg_mileage + ". Customer car estimated price:" + car_est_price + ". Current car mileage:" + car_mileage,
      },
    ],
  });

  return completion.choices[0].message

}