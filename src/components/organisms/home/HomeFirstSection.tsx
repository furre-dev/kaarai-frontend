"use client"
import Link from "next/link";
import MainInput from "../../atoms/MainInput";
import MainButton from "../../atoms/MainButton";
import VehicleForm from "@/components/molecules/VehicleForm";

export default function HomeFirstSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center pb-[136px] max-w-[1600px] mx-auto px-6 lg:px-36 pt-24 lg:pt-36">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-9xl font-black text-kaar-950 max-w-[630px]">
          Discover your car's value with AI-powered insights.
        </h1>
        <Link href={"/#how-it-works"} className="hidden lg:block mt-3 text-black font-semibold max-w-[505px] text-2xl">
          Read more about how we use AI and Machine Learning to predict the price of your car
          <span className="material-symbols-outlined align-middle ml-1 mb-[4px]">
            arrow_outward
          </span>
        </Link>
      </div>
      <VehicleForm />
    </section>
  )
}