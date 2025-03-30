"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { FaRegCheckCircle } from "react-icons/fa";

import { saveSubscription } from "@/utils/api";

export default function page() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  useEffect(() => {
    if (session_id) {
      const fetchData = async () => {
        try {
          const result = await saveSubscription(session_id);

          toast.error(result?.message);
        } catch (err) {
          console.log(err);
        }
      };

      fetchData();
    }
  }, [session_id]);

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4 items-center justify-center">
        <FaRegCheckCircle color="green" size={58} />
        <h1 className="text-4xl text-center sm:text-5xl md:text-5xl leading-20 font-extrabold mb-2 text-[#CFCFCF] ">
          Payment Successfully Processed
        </h1>
        <span className="text-white font-light sm:text-md md:text-lg text-center">
          Your payment has been successfully processed
        </span>
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Go Home
        </Link>
      </div>
    </section>
  );
}
