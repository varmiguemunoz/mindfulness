import RecoverForm from "@/components/recover-form";
import React from "react";

import { Suspense } from "react";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4">
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
          Recover Account
        </h1>
        <Suspense>
          <RecoverForm />
        </Suspense>
      </div>
    </section>
  );
}
