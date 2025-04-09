import type { Metadata } from "next";
import Footer from "../(site)/Footer";
import Navbar from "../(site)/Navbar";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { getSuscriptionStatus } from "@/utils/api";
import { signOut } from "@/utils/supabase/actions";

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

  console.log(data);

  const subscriptionActive =
    data && data.status === ("active" as string) ? true : false;

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
