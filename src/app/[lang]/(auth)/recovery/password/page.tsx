import RecoverPassword from "@/components/recover-password";
import React, { Suspense } from "react";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4">
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
          Create Password
        </h1>
        <Suspense>
          <RecoverPassword />
        </Suspense>
      </div>
    </section>
  );
}
