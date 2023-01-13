import Head from "next/head";
import Image from "next/image";
import { Button } from "../components";
import { Moon_Dance } from "@next/font/google";
import { useState } from "react";
const moon = Moon_Dance({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const [success, setsuccess] = useState("notyet")
  return (
    <>
      <Head>
        <title>Will you?</title>
        <meta name="description" content="meow meow meow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cat.png" />
      </Head>
      <main className={`h-screen transition-all duration-200 ease-out grid grid-rows-2 gap-y-12 w-full ${success === "rude" ? "bg-gray-800" : success ==="success" ? "bg-pink-900" : "bg-[#001118]"} `}>
        <div className="w-full h-full grid grid-cols-3">
          <div className="relative flex flex-col-reverse  col-start-2">
            <h1 className={`text-4xl z-40 transition-all duration-200 ease-out  text-center ${moon.className} ${success === "rude" ? "bg-gray-800" : success ==="success" ? "bg-pink-900" : "bg-[#001118]"} w-full text-white relative z-10 `}>{success ==="rude" ? "rude" : success ==="success" ? "Thank youuu" :"will you marry me?"}</h1>
            <img  className="object-cover transition-all duration-200 z-0 absolute top-0  h-full w-full object-top" src={`${success ==="notyet" ? "/catdate.webp" : success ==="success" ? "/success.jpg":"/rude.jpg"}`} />
          </div>
        </div>
        <div className="relative flex justify-center gap-x-12">
          <Button success={success} setsuccess={setsuccess} />
          <button onClick={()=>setsuccess("success")} className="absolute flex justify-center group items-center top-8 left-[55%]">
            <span className="relative left-4  group-hover:-translate-x-8 transition-transform duration-300 ease-out">{success ==="rude" ? "rude" :"yes"}</span>
            <span className="opacity-0 translate-x-8 transition-all duration-300 grid place-items-center group-hover:translate-x-0 group-hover:opacity-100">
              <img className="w-8" src="/cat.png" alt="" />
            </span>
          </button>
        </div>
      </main>
    </>
  );
}
