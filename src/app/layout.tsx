import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import { Toaster } from "sonner";

import type React from "react";

import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindfulFlow | Find Your Inner Peace & Balance",
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
    title: "MindfulFlow | Find Your Inner Peace & Balance",
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
    title: "MindfulFlow | Find Your Inner Peace & Balance",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}>) {
  return (
    <html lang={"en"} className={bricolageGrotesque.className}>
      <GoogleAnalytics gaId="GTM-5SPQ8KBQ" />
      <GoogleTagManager gtmId="GTM-5SPQ8KBQ" />

      <body className="bg-white w-full">
        {children}

        <Toaster />
        <CookieBanner />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SPQ8KBQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
