"use client";

import { NextStudio } from "next-sanity/studio";

import config from "@sanity";

export default function StudioPage() {
  return (
    <section className="absolute left-0 top-0 w-full h-full z-20">
      <NextStudio config={config} />
    </section>
  );
}
