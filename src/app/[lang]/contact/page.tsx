import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Hentify | Login",
  description:
    "Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!",
  keywords: [
    "hentai",
    "premium hentai",
    "hentai streaming",
    "anime porn",
    "yuri hentai",
    "yaoi hentai",
    "hentai HD",
    "uncensored hentai",
    "hentai online",
    "exclusive hentai",
    "login hentai",
  ],
  openGraph: {
    title: "Hentify | Login",
    description:
      "Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!",
    url: "https://www.hentifyhub.com/login",
    siteName: "Hentify",
    images: [
      {
        url: "https://www.hentifyhub.com/header.png",
        width: 1200,
        height: 630,
        alt: "Hentify - Watch Hentai Streaming",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hentify | Login",
    description:
      "Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!",
    images: ["https://www.hentifyhub.com/header.png"],
  },

  alternates: {
    canonical: "https://www.hentifyhub.com/login",
    languages: {
      "en-US": "https://www.hentifyhub.com/login",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4">
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
          Contact Us
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
