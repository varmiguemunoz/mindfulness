"use client";

import React from "react";
import VideoCard from "./ui/videoCard";
import Link from "next/link";

interface VideosContentProps {
  title: string;
  image: string;
  id: number;
}

export default function VideosContent({
  title,
  image,
  id,
}: VideosContentProps) {
  // Componente desde el que se renderizan las tarjetas de las series

  return (
    <Link href={`/dashboard/videos/${id}`} className="w-full h-full">
      <VideoCard image={image} title={title} />
    </Link>
  );
}
