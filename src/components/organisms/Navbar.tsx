"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState<boolean | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);  // Page has scrolled
      } else {
        setHasScrolled(false); // Page is at the top
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-screen h-32 fixed pointer-events-none">
      <div className="w-full max-w-[1600px] mx-auto px-36 h-full relative">
        <Link href={"/"} className={`pointer-events-auto text-kaar-600 text-5xl font-black absolute top-2/4 -translate-y-2/4 transition-all duration-300 ${hasScrolled ? "left-36 bg-kaar-50 px-5 py-4 rounded-full shadow-md bg-opacity-80 hover:bg-opacity-100" : "left-2/4 -translate-x-2/4"}`}>kaar.ai</Link>
      </div>
    </nav>
  )
}