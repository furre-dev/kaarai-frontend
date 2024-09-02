type CardProps =
  | { type: "yourcar"; cardMap: (string | number)[][] | null }
  | { type: "market"; cardMap: (string | number)[][] | null }


export default function Card({ cardMap, type }: CardProps) {

  return (
    <div className={`${type === "yourcar" ? "bg-kaar-900" : "bg-kaar-600"} h-full w-1/4 rounded-[29px] flex flex-col justify-end relative pb-5 px-2`}>
      <h4 className="text-kaar-400 font-black text-5xl absolute -top-2 left-2/4 -translate-x-2/4 w-max pointer-events-none">
        {type === "yourcar" ? "YOUR CAR" : "MARKET"}
      </h4>
      <ul className="text-kaar-100 w-full">
        {cardMap && cardMap.map((list, i) => {
          return (
            <>
              <li key={i} className="flex justify-between w-full">
                <label className="text-sm whitespace-nowrap">{list[0]}</label>
                <span className="text-base font-bold whitespace-nowrap">{list[1]}</span>
              </li>
              {cardMap.length - 1 !== i && <hr className="border-[#D9D9D9] my-2" />}
            </>
          )
        })}
      </ul>
    </div>
  )
}