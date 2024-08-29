import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export default function MainButton({ id, onClick, button_text, helper_text, full_w, type, isLink }: { button_text: string, helper_text?: string, full_w?: boolean, isLink?: { href: string } } & ButtonHTMLAttributes<HTMLButtonElement>) {
  if (isLink) {
    return (
      <>
        <Link href={isLink.href} id={id} className={`hover:scale-95 transition-all duration-100 mt-[20px] py-[19px] bg-kaar-950 border-kaar-900 border-2 text-kaar-500 rounded-[27px] text-3xl font-bold ${full_w ? "" : "px-[87px]"}`}>
          {button_text}
        </Link>
        {helper_text && <p className="text-center text-base text-kaar-50 max-w-[270px] mx-auto mt-2 font-thin">{helper_text}</p>}
      </>
    )
  }


  return (
    <>
      <button id={id} onClick={onClick} type={type} className={`hover:scale-95 transition-all duration-100 mt-[20px] py-[19px] bg-kaar-950 border-kaar-900 border-2 text-kaar-500 rounded-[27px] text-3xl font-bold ${full_w ? "" : "px-[87px]"}`}>
        {button_text}
      </button>
      {helper_text && <p className="text-center text-base text-kaar-50 max-w-[270px] mx-auto mt-2 font-thin">{helper_text}</p>}
    </>
  )
}