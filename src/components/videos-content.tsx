"use client";

import React from "react";
import VideoCard from "./ui/videoCard";
import Link from "next/link";

interface VideosContentProps {
  title: string;
  image: string;
  description: string;
  id: string;
}

export default function VideosContent({
  title,
  image,
  id,
  description,
}: VideosContentProps) {
  return (
    <Link href={`/dashboard/videos/${id}`} className="w-full h-full">
      <VideoCard image={image} title={title} description={description} />
    </Link>
  );
}
