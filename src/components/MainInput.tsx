export default function MainInput({ placeHolder = "ABC123" }: { placeHolder: string }) {
  return (
    <input
      className="w-full py-4 bg-kaar-white border-kaar-700 border-2 rounded-xl text-center px-5 uppercase text-xl text-kaar-500 placeholder:text-kaar-400 font-semibold outline-none focus:placeholder:text-transparent"
      placeholder={placeHolder}
      maxLength={10}

    />
  )
}