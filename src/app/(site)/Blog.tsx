import React from "react";
import BlogComponent from "@/components/blog";

import Link from "next/link";

export default function Blog() {
  return (
    <div
      className="w-full bg-white/15 h-auto py-20 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('/banner-blog.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1114px] mx-auto bg-white h-auto px-10 py-10 flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-black font-medium text-4xl">News Mindfulness</h2>
          <Link
            href={"/blog"}
            className="text-black font-bold text-xl underline"
          >
            See All News
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 items-center justify-start">
          <BlogComponent />
        </div>
      </div>
    </div>
  );
}
