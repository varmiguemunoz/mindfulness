import AstronautLoader from "@/components/ui/astronautLoader";

import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full overflow-hidden h-[70vh] relative">
      <div className="absolute md:top-1/4 bottom-0 flex flex-col gap-3 md:px-20 px-8">
        <h1 className="text-white text-4xl font-bold">Page not found</h1>
        <p className="text-white font-normal">
          the url you are looking for does not exist on our website.{" "}
        </p>

        <Link
          href={"/dashboard"}
          className="px-4 py-3 bg-lightPurple font-bold text-xl text-white cursor-pointer text-center hover:bg-gray-400"
        >
          Go Back
        </Link>
      </div>

      <AstronautLoader />
    </div>
  );
}
