"use client";
import { Navbar } from "@/components/Navbar";
import { useScrollVar } from "@/hooks/useScrollVar";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const scroll = useScrollVar();

  useEffect(() => {
    const setScrollVar = () => {
      const htmlElement = document.documentElement;
      const percentScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
      htmlElement.style.setProperty(
        "--scroll",
        `${Math.min(percentScrolled * 100, 100)}`
      );
    };

    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);

    return () => {
      window.removeEventListener("scroll", setScrollVar);
      window.removeEventListener("resize", setScrollVar);
    };
  }, []);

  return (
    <div className="relative text-white h-[3000px]">
      <Navbar />
      <div
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-orange-900 to-rose-900" 
        
      >
        <div className="relative rounded-[300px] rounded-bl-full rounded-tr-full shadow-sm overflow-hidden shadow-amber-600">
          <Image src={"/aiMe.jpg"} width={200} height={200} alt={""} />
        </div>
      </div>
    </div>
  );
}
