import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "MindfulFlow | Contact Us",
  description:
    "Experience mindfulness like never before. Access guided meditations, yoga sessions, and relaxation techniques to enhance your well-being. Join MindfulFlow today!",
  keywords: [
    "mindfulness",
    "meditation",
    "yoga",
    "guided meditation",
    "breathwork",
    "inner peace",
    "relaxation",
    "wellness",
    "pilates",
    "mental health",
  ],
  openGraph: {
    title: "MindfulFlow | Contact Us",
    description:
      "Experience mindfulness like never before. Access guided meditations, yoga sessions, and relaxation techniques to enhance your well-being. Join MindfulFlow today!",
    url: "https://www.mindfulflow.com/",
    siteName: "MindfulFlow",
    images: [
      {
        url: "https://www.mindfulflow.com/mindfulness.png",
        width: 1200,
        height: 630,
        alt: "MindfulFlow - Mindfulness & Yoga",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MindfulFlow | Contact Us",
    description:
      "Experience mindfulness like never before. Access guided meditations, yoga sessions, and relaxation techniques to enhance your well-being. Join MindfulFlow today!",
    images: ["https://www.mindfulflow.com/mindfulness.png"],
  },

  alternates: {
    canonical: "https://www.mindfulflow.com/",
    languages: {
      "en-US": "https://www.mindfulflow.com/",
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
