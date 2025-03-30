import React from "react";
import Image from "next/image";
import FormattedDate from "./FormattedDate";

interface BlogCardProps {
  title: string;
  src: string;
  alt: string;
  date: string;
}

function BlogCard({ title, src, alt, date }: BlogCardProps) {
  return (
    <div className="flex md:flex-row flex-col w-full items-center justify-between md:gap-12 border-b border-gray-300/30 py-5">
      <Image
        src={src}
        alt={alt}
        width={220}
        height={300}
        loading="lazy"
        quality={100}
        className={`object-cover rounded-sm md:w-1/2 md:h-[300px] w-full h-[300px]`}
      />
      <div className="flex flex-col justify-start items-start gap-3 md:w-1/2 w-full h-full">
        <span className="rounded-full px-3 py-1 text-[#2ABDBB] font-medium text-sm bg-gray-100/10">
          Latest News
        </span>
        <div className="flex items-center justify-center gap-3">
          <FormattedDate date={date} type={"post"} />
        </div>
        <h3 className={`font-bold text-white text-2xl`}>{title}</h3>

        <span className="text-[#2ABDBB] font-bold text-sm mt-5">
          Miguel Munoz
        </span>
      </div>
    </div>
  );
}

export default BlogCard;
