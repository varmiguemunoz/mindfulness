import { type SchemaTypeDefinition } from "sanity";

import slider from "./schemas/slider";
import author from "./schemas/author";
import post from "./schemas/posts";
import blockContent from "./schemas/blockContent";
import blogBanner from "./schemas/blogBanner";
import typeContent from "./schemas/typeContent";
import videos from "./schemas/videos";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [slider, author, post, blockContent, blogBanner, typeContent, videos],
};
