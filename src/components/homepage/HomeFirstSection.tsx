"use client"
import Link from "next/link";
import MainInput from "../MainInput";
import MainButton from "../MainButton";

export default function HomeFirstSection() {
  return (
    <section className="flex justify-between items-center pb-[136px] max-w-[1600px] mx-auto px-36 py-36">
      <div>
        <h1 className="text-9xl font-black text-kaar-950 max-w-[630px]">
          Discover your car's value with AI-powered insights.
        </h1>
        <Link href={"/#how-it-works"} className="block mt-3 text-black font-semibold max-w-[505px] text-2xl">
          Read more about how we use AI and Machine Learning to predict the price of your car
          <span className="material-symbols-outlined align-middle ml-1 mb-[4px]">
            arrow_outward
          </span>
        </Link>
      </div>
      <form
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
        className="max-w-[470px] bg-kaar-500 pt-12 pb-6 px-14 h-max flex flex-col text-center rounded-[42px]">
        <h4 className="text-4xl font-bold text-kaar-50 mb-[46px]">
          Please enter your plate number below and let AI estimate the value.
        </h4>
        <MainInput placeHolder="ABC123" />
        <MainButton isLink={{ href: "/vehicle/HCA531" }} id="cta-button" type="button" full_w button_text="Get estimate" helper_text="For now you can only check cars registered in sweden" />
      </form>
    </section>
  )
}