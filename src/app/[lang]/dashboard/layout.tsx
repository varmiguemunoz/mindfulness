import type { Metadata } from "next";
import Footer from "../(site)/Footer";
import Navbar from "../(site)/Navbar";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getSuscriptionStatus } from "@/utils/api";
import { signOut } from "@/utils/supabase/actions";

export const metadata: Metadata = {
  title: "Hentify | Exclusive Dashboard Content",
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
  ],
  openGraph: {
    title: "Hentify | Exclusive Dashboard Content",
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
    title: "Hentify | Exclusive Dashboard Content",
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

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await getSuscriptionStatus();

  const subscriptionActive = data && data === ("active" as any) ? true : false;

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="w-full">
      <Navbar
        session={user}
        signOut={signOut}
        showSearch={subscriptionActive}
      />
      {children}
      <Footer />
    </main>
  );
}
