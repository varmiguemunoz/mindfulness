import React from "react";
import BlogComponent from "@/components/blog";
import Link from "next/link";

export default function Blog() {
  return (
    <div
      className="w-full bg-orange-400 h-auto py-10 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/banner-image-blog-dashboard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1114px] mx-auto bg-black h-auto px-10 py-10 flex flex-col gap-5">
        <div className="flex justify-between">
          <h2 className="text-white font-medium text-4xl">News Hentify</h2>
          <Link
            href={"/blog"}
            className="text-white font-bold text-xl underline"
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
