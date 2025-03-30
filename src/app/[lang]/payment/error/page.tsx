import Link from "next/link";
import React from "react";
import { CgDanger } from "react-icons/cg";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4 items-center justify-center">
        <CgDanger color="red" size={58} />
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-2 text-[#CFCFCF] leading-tight">
          Payment Not Processed
        </h1>
        <span className="text-white font-light text-md text-center">
          Your payment was not processed successfully
        </span>
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Go Home
        </Link>
      </div>
    </section>
  );
}
