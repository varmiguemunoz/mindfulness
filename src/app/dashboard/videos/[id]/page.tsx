"use client";
import React, { useEffect, useState } from "react";

import { getSuscriptionStatus } from "@/utils/api";
import { redirect, usePathname } from "next/navigation";
import { getVideo } from "@/utils/sanity";

export default function Videos() {
  const [videos, setVideos] = useState([]) as any;

  const pathname = usePathname();

  const match = pathname?.match(/\/dashboard\/videos\/(\d+)/);
  const id = match ? match[1] : (null as any);

  useEffect(() => {
    const fetchData = async () => {
      const { status } = await getSuscriptionStatus();

      const subscriptionActive = status === "active" ? true : false;

      if (!subscriptionActive) {
        redirect("/dashboard");
      } else {
        try {
          const data = await getVideo(id);
          console.log(data);
          setVideos(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-full mt-[118px] mx-auto pb-[100px]">
      {/* Reproductor de video */}
      {videos?.video && (
        <video
          ref={videos.video}
          className="w-full h-[90vh] object-cover"
          controls
          preload="metadata"
          autoPlay
          playsInline
          crossOrigin="anonymous"
          aria-label="Hentai Video Player"
        ></video>
      )}

      {/* Información de la serie */}
      <section className="w-full flex justify-between items-top gap-20 py-16 max-w-[1214px] mx-auto max-md:flex-col max-md:px-4">
        <div className="md:w-[70%] flex flex-col gap-5">
          <h1 className="text-lightPurple font-bold text-2xl">hoka</h1>

          <p className="text-lightGray text-md font-normal">descripcion</p>
        </div>
      </section>
    </div>
  );
}
