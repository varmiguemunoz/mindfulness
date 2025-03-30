import Spinner from "@/components/ui/Spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spinner text="Loading Resources..." color="#004884" hideText={false} />
    </div>
  );
}
