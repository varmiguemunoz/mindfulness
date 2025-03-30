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
  title: "Hentify | Unlimited Anime & Exclusive Content",
  description:
    "Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!",
  keywords: [
    "hentai",
    "free hentai",
    "hentai streaming",
    "anime porn",
    "yuri hentai",
    "yaoi hentai",
    "hentai HD",
    "uncensored hentai",
    "hentai online",
    "exclusive hentai",
  ],
  openGraph: {
    title: "Hentify | Unlimited Anime & Exclusive Content",
    description:
      "Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!",
    url: "https://www.hentifyhub.com/",
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
    title: "Hentify | Unlimited Anime & Exclusive Content",
    description:
      "Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!",
    images: ["https://www.hentifyhub.com/header.png"],
  },

  alternates: {
    canonical: "https://www.hentifyhub.com/",
    languages: {
      "en-US": "https://www.hentifyhub.com/",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}>) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={bricolageGrotesque.className}>
      <GoogleAnalytics gaId="GTM-5SPQ8KBQ" />
      <GoogleTagManager gtmId="GTM-5SPQ8KBQ" />

      <body className="bg-[#212121] w-full">
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
