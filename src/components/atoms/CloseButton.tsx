import { MouseEventHandler } from "react";

export default function CloseButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onClick} className="absolute right-5 top-5">
      <span className="material-symbols-outlined align-middle !text-5xl text-kaar-700">
        close
      </span>
    </button>
  )
}