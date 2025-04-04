import React from "react";
import Image from "next/image";

export default function VideoCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full flex flex-col gap-2 cursor-pointer">
      <Image
        src={image}
        alt="image-icon"
        width={150}
        height={464}
        quality={100}
        loading="lazy"
        className="w-full rounded-sm h-full max-h-[464px]"
      />

      <h2 className="text-lg font-normal text-black/70">{title}</h2>
      <p className="text-black/50 text-sm font-light">{description}</p>
    </div>
  );
}
