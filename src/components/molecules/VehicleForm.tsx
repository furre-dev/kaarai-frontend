"use client"
import { useForm } from "react-hook-form";
import MainButton from "../atoms/MainButton";
import MainInput from "../atoms/MainInput";
import { FormTypes } from "@/utils/types/FormTypes";

export default function VehicleForm() {
  const {
    register,
    watch
  } = useForm<FormTypes>();

  const veh_reg = watch("veh_reg")


  return (
    <form
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
      className="max-w-[470px] bg-kaar-500 pt-6 lg:pt-12 pb-6 px-7 lg:px-14 h-max flex flex-col text-center rounded-[42px] mt-11 lg:mt-0">
      <h4 className="text-2xl lg:text-4xl font-bold text-kaar-50 mb-[25px] lg:mb-[46px]">
        Please enter your plate number below and let AI estimate the value.
      </h4>
      <MainInput register={register} placeHolder="ABC123" />
      <MainButton disabled={!veh_reg} isLink={{ href: `/vehicle/${veh_reg}` }} id="cta-button" type="submit" full_w button_text="Get estimate" helper_text="For now you can only check cars registered in sweden" />
    </form>
  )
}