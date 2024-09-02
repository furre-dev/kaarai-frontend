import { FormTypes } from "@/utils/types/FormTypes";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type MainInputType = {
  placeHolder: string,
  register: UseFormRegister<FormTypes>,
}

export default function MainInput({ placeHolder = "ABC123", register }: MainInputType) {

  return (
    <>
      <input
        {...register("veh_reg", {
          required: "License plate is required"
        })}
        className="w-full py-4 bg-kaar-white border-kaar-700 border-2 rounded-xl text-center px-5 uppercase text-xl text-kaar-500 placeholder:text-kaar-400 font-semibold outline-none focus:placeholder:text-transparent"
        placeholder={placeHolder}
        minLength={2}
        maxLength={7}
        autoComplete="off"
      />
    </>
  )
}