import MainButton from "../atoms/MainButton";

export default function ErrorScreen({ errMsg }: { errMsg: string }) {
  return (
    <main className="w-screen h-screen bg-kaar-950 flex flex-col items-center text-center pt-48 px-6">
      <h1 className="text-7xl lg:text-9xl font-extralight text-kaar-100">{"Error :("}</h1>
      <p className="mt-[20px] lg:mt-[45px] text-kaar-100 text-2xl lg:text-4xl font-extralight w-full max-w-[1000px]">{errMsg}</p>
      <MainButton isLight className="!mt-10 lg:!mt-20" button_text="Return home" isLink={{ href: "/" }} />
    </main>
  )
}