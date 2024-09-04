import MainButton from "../../atoms/MainButton"

export default function HomeSecondSection() {
  const HowItWorksListItems: string[][] = [
    ["Input Details", ": Enter your car's make, model, year, and mileage."],
    ["AI Search", ": Our AI scans the internet for similar car sales listings."],
    ["Data Compilation", " : The AI gathers these listings and relevant information into a dataset."],
    ["Price Estimation", ": Our Machine Learning algorithm analyzes this dataset, considering every aspect of your car, to provide an estimated price."],
  ]

  return (
    <section
      id="how-it-works"
      style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}
      className="w-screen py-[70px] bg-kaar-400 rounded-t-[50px] lg:rounded-t-[100px] flex flex-col items-center text-center">
      <h2 className="text-kaar-50 text-6xl lg:text-9xl font-black max-w-[773px]">How <span className="text-kaar-600">kaar.ai</span> works?</h2>
      <ol className="space-y-[28px] max-w-[1166px] mt-[53px] mb-[33px] px-5">
        {HowItWorksListItems.map((str_arr, i) => {
          return (
            <li>
              <p className="text-[16px] lg:text-[36px] text-kaar-50 font-normal">
                <span className="font-bold">{`${i + 1}.  ${str_arr[0]}`}</span>
                {str_arr[1]}
              </p>
            </li>
          )
        })}
      </ol>
      <MainButton isLink={{ href: "/#cta-button" }} type="button" button_text="Try it for free!" />
    </section>
  )
}