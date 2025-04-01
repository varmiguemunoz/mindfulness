import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schema } from "./sanity/schema";

export default defineConfig({
  name: "civil-registry",
  title: "Civil Registry",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  cdn: true,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2024-09-18" })],
});
