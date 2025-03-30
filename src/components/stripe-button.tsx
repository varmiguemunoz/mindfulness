import Link from "next/link";
import React from "react";

import { MdDomainVerification } from "react-icons/md";

export default function StripeButton() {
  // All the stripe logic here

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-5 items-center justify-center bg-zinc-700 px-8 py-10 rounded-sm">
        <MdDomainVerification color="#F2CEF0" size={58} />
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold text-[#CFCFCF] leading-tight">
          Activate Your Content
        </h1>
        <span className="text-white font-light text-md text-center mb-4">
          Unlock exclusive Hentai content now! Activate your access by
          subscribing here
        </span>

        <Link
          href={"#"}
          className="text-zinc-700 px-4 py-3 text-center font-bold text-xl rounded-sm bg-lightPurple"
        >
          Subscribe Now
        </Link>
      </div>
    </section>
  );
}
