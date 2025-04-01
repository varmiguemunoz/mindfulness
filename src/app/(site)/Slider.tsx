"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

import { LucidePlay } from "lucide-react";

type SliderData = {
  title: string;
  description: string;
  url: string;
  buttonTitle: string;
  image: string;
};
interface SliderProps {
  pagination?: boolean;
  slides?: number;
  className?: string;
  spaceBetween?: number;
  speed?: number;
  loop?: boolean;
  delay?: number;
  custom?: boolean;
  children?: React.ReactNode;
  responsive?: boolean;
  data: SliderData[];
}

export default function Slider({
  pagination,
  slides = 1,
  className,
  spaceBetween,
  speed,
  delay,
  loop,
  responsive = false,
  data,
}: SliderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <Swiper
      loop={loop ? loop : true}
      speed={speed ? speed : 2000}
      autoplay={{
        delay: delay ? delay : 2000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      }}
      spaceBetween={spaceBetween ? spaceBetween : 0}
      pagination={pagination ? { clickable: true } : false}
      modules={[Pagination, Autoplay]}
      className={className}
      slidesPerView={responsive && isMobile ? 2 : slides}
    >
      {data?.map(({ image, title, description, buttonTitle, url }, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center items-center text-center w-full h-full p-3 px-24 bg-black"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <div className="w-full h-full flex text-white max-md:flex-col max-md:pt-6">
            <div className="w-[40%] flex flex-col justify-center px-10 items-start max-md:w-full">
              <h2 className="text-4xl font-bold text-left">{title}</h2>
              <p className="mt-4 text-lg mb-5 text-left font-normal line-clamp-4">
                {description}
              </p>
              <Link
                href={url}
                className="bg-lavender mt-10 rounded-sm flex-grow-0 gap-3 flex-shrink-0 px-5 py-4 text-white font-bold flex"
              >
                <LucidePlay width={24} height={24} />
                {buttonTitle}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
