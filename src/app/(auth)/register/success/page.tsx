import Link from "next/link";
import React from "react";
import { FaFlagCheckered } from "react-icons/fa";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4 items-center justify-center">
        <FaFlagCheckered color="green" size={58} />
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
          Account Created With Success
        </h1>
        <span className="text-black/60 font-light text-md text-center">
          Now you can enjoy all our content,{" "}
          <Link href={"/login"} className="text-blue-400 underline">
            Login Here
          </Link>
        </span>
      </div>
    </section>
  );
}
