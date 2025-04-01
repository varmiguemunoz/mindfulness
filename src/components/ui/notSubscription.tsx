import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

export default function NotSubscription() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-5">
      <div className="max-w-xl w-full flex flex-col gap-3 items-center justify-center">
        <h1 className="text-2xl text-center sm:text-3xl md:text-3xl font-extrabold mb-0 text-black leading-tight">
          You are not subscribed to the platform
        </h1>
        <span className="text-black/60 font-light text-md text-center texbl">
          Click below to subscribe and unlock all features!
        </span>

        <FaArrowCircleDown color="#3b82f6" size={58} />
      </div>
    </section>
  );
}
