"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import CloseButton from "../atoms/CloseButton"
import MainButton from "../atoms/MainButton"

function handleClosePopup(setState: Dispatch<SetStateAction<boolean>>
) {
  setState(false);
  localStorage.setItem("beta-popup", "true")
}


export default function Popup() {
  const [popupActive, setPopupActive] = useState(false)

  useEffect(() => {
    //For setting the scroll on the page, so there is no interactivity when popup is active.
    if (popupActive) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }

    //Activating the popup depending on if user has already seen it.
    const userAlreadySeenPopup = localStorage.getItem("beta-popup")
    if (userAlreadySeenPopup) setPopupActive(false); else setPopupActive(true)
  }, [popupActive])


  return (
    <>
      {popupActive &&
        <div className="w-screen h-screen fixed bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-kaar-400 pt-24 pb-16 px-14 rounded-[43px] relative z-10 cursor-auto">
            <CloseButton onClick={() => handleClosePopup(setPopupActive)} />
            <section className="max-w-[700px] text-center">
              <h4 className="text-7xl font-black text-kaar-100">Welcome to <span className="text-kaar-600">kaar.ai</span></h4>
              <p className="font-black text-2xl text-kaar-800">Early Access Beta v0.1!</p>
              <p className="text-kaar-100 text-2xl mt-10">Thank you for visiting! You're accessing our beta car price estimation tool, which is still a work in progress. Right now, we offer car value estimates and market comparisons for Swedish registration numbers.
                <br />
                <br />
                Coming soon: user accounts, more accurate data with major marketplace APIs, and expanded features including motorbikes and European markets.
                <br />
                <br />
                We appreciate your patience as we improve and add new features. Stay tuned!
              </p>
              <MainButton onClick={() => handleClosePopup(setPopupActive)} button_text="Got it!" className="mt-14" />
            </section>
          </div>
        </div>
      }
    </>
  )
}

