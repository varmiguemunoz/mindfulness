"use client";

import React from "react";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideosMediaPlayer {
  videoUrl: string;
  subtitles?: string;
}

export default function VideosMediaPlayer({
  videoUrl,
  subtitles,
}: VideosMediaPlayer) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // El video viene en un formato de .m3u8 Este script lo convierte y lo inserta en la etiqueta de video
  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls({ enableWebVTT: true });
        hls.loadSource(videoUrl);
        hls.on(Hls.Events.ERROR, (_, data) => {
          console.error("HLS error:", data);
        });

        hls.on(Hls.Events.SUBTITLE_TRACK_LOADED, (_, data) => {
          console.log("Subtitle track loaded:", data);
        });

        hls.attachMedia(videoRef.current);
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = videoUrl;
      }
    }
  }, [videoUrl]);

  const fixVttFormat = (vttContent: string) => {
    return vttContent.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, "$1.$2");
  };

  const getVttBlobUrl = (content: string) => {
    const correctedVttContent = fixVttFormat(content);

    const blob = new Blob([correctedVttContent], { type: "text/vtt" });
    return URL.createObjectURL(blob);
  };

  return (
    <video
      ref={videoRef}
      className="w-full h-[90vh] object-cover"
      controls
      preload="metadata"
      autoPlay
      playsInline
      crossOrigin="anonymous"
      aria-label="Hentai Video Player"
    >
      {subtitles && (
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src={getVttBlobUrl(subtitles)}
          default
        />
      )}
    </video>
  );
}
