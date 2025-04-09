"use client";
import React, { useEffect, useState } from "react";

import { getSuscriptionStatus } from "@/utils/api";
import { redirect, usePathname } from "next/navigation";
import { getVideo } from "@/utils/sanity";
import Link from "next/link";
import { toast } from "sonner";

import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Videos() {
  const [videos, setVideos] = useState([]) as any;

  const pathname = usePathname();

  const slug = pathname?.split("/").pop() as any;

  useEffect(() => {
    const fetchData = async () => {
      const { status } = await getSuscriptionStatus();

      const subscriptionActive = status === "active" ? true : false;

      if (!subscriptionActive) {
        redirect("/dashboard");
      } else {
        try {
          const data = await getVideo(slug);
          setVideos(data);
        } catch (err) {
          toast.error(
            "An error occurred while fetching the video. Please try again later."
          );
          throw err;
        }
      }
    };

    fetchData();
  }, [slug]);

  console.log(videos);

  return (
    <div className="w-full mt-[118px] mx-auto pb-[100px]">
      {/* Reproductor de video */}

      <video
        src={videos?.video}
        className="w-full h-[90vh] object-cover"
        controls
        preload="metadata"
        autoPlay
        playsInline
        crossOrigin="anonymous"
        aria-label="Mindfulness Video Player"
      ></video>

      {/* Información de la serie */}
      <section className="w-full flex justify-between items-top gap-20 py-16 max-w-[1214px] mx-auto max-md:flex-col max-md:px-4">
        <div className="md:w-[70%] flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <Link href={"/dashboard"}>
              <FaArrowAltCircleLeft size={28} />
            </Link>
            <h1 className="text-lavender font-bold text-2xl">{videos.title}</h1>
          </div>

          <p className="text-black/50 text-md font-normal">
            {videos.description}
          </p>
        </div>
      </section>
    </div>
  );
}
