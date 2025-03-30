import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  active?: boolean;
  onSelect: () => void;
}

export default function videoCardEpisodes({
  image,
  title,
  active,
  onSelect,
}: Props) {
  return (
    <div
      className={`flex gap-5 items-center justify-center cursor-pointer mb-8 ${active && "rounded border-2 border-purpleBase shadow-purpleBase/50 shadow-md"}`}
      onClick={onSelect}
    >
      <Image
        src={image}
        alt="thumbnail image"
        width={120}
        height={120}
        className="w-[120px] h-[120px] object-cover"
      />
      <h3 className="text-lightGray font-light text-md">{title}</h3>
    </div>
  );
}
