"use client";
import React, { useEffect, useState } from "react";

import { getChapters, getSuscriptionStatus } from "@/utils/api";
import { redirect, usePathname } from "next/navigation";
import { Chapter } from "@/types/api";

import VideoCardEpisodes from "../../../../components/ui/videoCardEpisodes";
import VideosMediaPlayer from "@/components/videosMediaPlayer";

export default function Videos() {
  const [chapters, setChapters] = useState([]);
  const [subtitlesContent, setSubtitlesContent] = useState<string | null>(null);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);

  const pathname = usePathname();

  const match = pathname?.match(/\/dashboard\/videos\/(\d+)/);
  const id = match ? match[1] : null;

  const handleCurrentChapter = (chapter: Chapter) => {
    setCurrentChapter(chapter);
    setSubtitlesContent(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { status } = await getSuscriptionStatus();

      const subscriptionActive = status === "active" ? true : false;

      if (!subscriptionActive) {
        redirect("/dashboard");
      } else {
        try {
          const data = await getChapters(Number(id));
          setChapters(data);
          setCurrentChapter(data[0]);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (currentChapter?.translation) {
      const fetchSubtitlesUrl = async () => {
        try {
          const response = await fetch(currentChapter.translation);
          const data = await response.text();
          setSubtitlesContent(data);
        } catch (error) {
          console.error("Error al obtener los subtítulos:", error);
        }
      };

      fetchSubtitlesUrl();
    }
  }, [currentChapter]);

  return (
    <div className="w-full mt-[118px] mx-auto pb-[100px]">
      {/* Reproductor de video */}
      {currentChapter?.url && (
        <VideosMediaPlayer
          videoUrl={currentChapter?.url}
          subtitles={subtitlesContent ? subtitlesContent : ""}
        />
      )}

      {/* Información de la serie */}
      <section className="w-full flex justify-between items-top gap-20 py-16 max-w-[1214px] mx-auto max-md:flex-col max-md:px-4">
        <div className="md:w-[70%] flex flex-col gap-5">
          <h1 className="text-lightPurple font-bold text-2xl">
            {currentChapter?.title}
          </h1>

          <p className="text-lightGray text-md font-normal">
            {currentChapter?.description}
          </p>
        </div>

        {/* Componente de capitulos de cada serie*/}

        <div className="md:w-[30%] flex flex-col gap-10 h-auto  md:max-h-[484px] ">
          <h2 className="text-2xl font-bold capitalize text-lightGray">
            All Episodes
          </h2>
          <div className="h-auto overflow-y-auto">
            {chapters.map((chapter: Chapter) => (
              <VideoCardEpisodes
                title={chapter.title}
                image={chapter.thumbnail}
                key={chapter.id}
                active={chapter.id === currentChapter?.id}
                onSelect={() => handleCurrentChapter(chapter)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
