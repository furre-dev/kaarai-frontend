"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "../atoms/MainButton";
import MainInput from "../atoms/MainInput";
import { FormTypes } from "@/utils/types/FormTypes";
import { useRouter } from "next/navigation";

export default function VehicleForm() {
  const {
    register,
    handleSubmit,
  } = useForm<FormTypes>();

  const router = useRouter()

  const onSubmit: SubmitHandler<FormTypes> = (data) => router.push(`/vehicle/${data.veh_reg.toUpperCase()}`)


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" }}
      className="max-w-[470px] bg-kaar-500 pt-12 pb-6 px-14 h-max flex flex-col text-center rounded-[42px]">
      <h4 className="text-4xl font-bold text-kaar-50 mb-[46px]">
        Please enter your plate number below and let AI estimate the value.
      </h4>
      <MainInput register={register} placeHolder="ABC123" />
      <MainButton id="cta-button" type="submit" full_w button_text="Get estimate" helper_text="For now you can only check cars registered in sweden" />
    </form>
  )
}