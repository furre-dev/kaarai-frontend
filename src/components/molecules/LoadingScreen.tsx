"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import LoadingCircle from "../../../public/assets/loadingCircle";
import LoadingCircleMobile from "../../../public/assets/loadingCircleMobile";
import MileageInput from "./MileageInput";

const loadingTextArray: string[] = [
  "Our AI scans the internet for similar car sales listings.",
  "The AI gathers these listings and relevant information into a dataset.",
  "Data is being analyzed by our Machine Learning algortithm.",
  "Please wait a few more seconds..."
]

export default function LoadingScreen({ intervalTimingMS, manualMileage, setManualMileage }: { intervalTimingMS: number, manualMileage: boolean | number, setManualMileage: Dispatch<SetStateAction<number | boolean>> }) {
  const [loadingProgress, setLoadingProgress] = useState<number>(0)
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(loadingProgress)

  const loadingIncreasePerInterval = 25 //Increase by 25% every time
  const intervalTime = intervalTimingMS / (100 / loadingIncreasePerInterval)

  useEffect(() => {
    // Only set up the interval if loadingProgress is less than or equal to 100
    if (loadingProgress <= 100) {
      const intervalId = setInterval(() => {
        setLoadingTextIndex((prev) => {
          if (prev >= (loadingTextArray.length - 1)) {
            clearInterval(intervalId);
            return loadingTextArray.length - 1; // Ensure it doesn't go over 100
          }
          return prev + 1;
        })
        setLoadingProgress((prev) => {
          // Clear interval if progress reaches 100 or more
          if (prev >= 100) {
            clearInterval(intervalId);
            return 100; // Ensure it doesn't go over 100
          }
          return prev + loadingIncreasePerInterval;
        });
      }, intervalTime);

      // Cleanup function to clear the interval
      return () => clearInterval(intervalId);
    }
  }, [loadingProgress]);


  return (
    <main className="w-screen h-screen bg-kaar-950 flex flex-col items-center text-center pt-48 px-2">
      {manualMileage === true && <MileageInput setManualMileage={setManualMileage} />}
      <h1 className="text-4xl lg:text-9xl font-extralight text-kaar-100">“Why you’re waiting?”</h1>
      <p className="mt-[71px] text-kaar-100 text-base lg:text-4xl font-extralight">{loadingTextArray[loadingTextIndex]}</p>
      <div
        /* style={{ background: `linear-gradient(90deg,rgba(253,230,233,1)0%,rgba(253,230,233,1) ${loadingProgress}%,rgba(71,10,31,1) ${loadingProgress}%,rgba(71,10,31,1) 100%)` }} */
        className="w-4/5 h-5 border-kaar-100 border-[3px] rounded-full relative mt-[19px]">
        <div
          style={{ width: `${loadingProgress}%` }}
          className="absolute top-0 left-0 h-full bg-kaar-100 rounded-xl transition-all duration-300" />
      </div>
      {loadingProgress >= 100 &&
        <>
          <div className="animate-spin mt-24 origin-center hidden lg:block">
            <LoadingCircle />
          </div>
          <div className="animate-spin mt-5 origin-center block lg:hidden">
            <LoadingCircleMobile />
          </div>
        </>}
    </main>
  )
}