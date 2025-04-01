import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4 items-center justify-center">
        <MdOutlineMailOutline color="#3b82f6" size={58} />
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
          Confirm Your Account
        </h1>
        <span className="text-black/70 font-light text-md text-center texbl">
          We&apos;ve sent a confirmation link to your email address. Please
          check your inbox and click the link to activate your account.
        </span>
        <p className="text-sm text-gray-500">
          If you don&apos;t see the email, please check your spam folder.
        </p>
      </div>
    </section>
  );
}
