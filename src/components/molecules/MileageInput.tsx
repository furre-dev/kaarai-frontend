import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import MainButton from "../atoms/MainButton";
import MainInput from "../atoms/MainInput";
import { useForm } from "react-hook-form";

type MileageInputType = {
  mileage: number
}

export default function MileageInput({ setManualMileage }: { setManualMileage: Dispatch<SetStateAction<number | boolean>> }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<MileageInputType>();

  const onSubmit = (data: MileageInputType) => setManualMileage(Number(data.mileage))


  return (
    <section className="absolute h-full w-full top-0 left-0 bg-black z-[9999999999999999] bg-opacity-60 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 bg-kaar-700 w-max h-max rounded-3xl max-w-[400px] ">
        <h4 className="text-2xl lg:text-3xl font-bold text-kaar-50 mb-[25px] lg:mb-[46px]">Oops, your car has yet not registered any mileage! Please enter it manually below!</h4>
        <input
          {...register("mileage", { required: "This field is required", maxLength: { value: 7, message: "Too many characters" } })}
          id="mileageInput"
          inputMode="numeric"
          type="number"
          placeholder="Mileage in KM"
          className="w-full py-4 bg-kaar-white border-kaar-700 border-2 rounded-xl text-center px-5 uppercase text-xl text-kaar-500 placeholder:text-kaar-400 font-semibold outline-none focus:placeholder:text-transparent"
        />
        {errors.mileage && <p className="text-kaar-100">{errors.mileage.message}</p>}
        <MainButton type="submit" button_text="Submit" />
      </form>
    </section>)
}