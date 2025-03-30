import { getBlogs } from "@/utils/sanity";
import React from "react";
import Link from "next/link";
import BlogCard from "./ui/BlogCard";

import { Blog as BlogType } from "@/types/sanity";

export default async function Blog() {
  const blog = await getBlogs(4);
  return (
    <>
      {blog.map(
        ({ alt, mainImage, slug, title, _id, publishedAt }: BlogType) => (
          <div key={_id} className="w-full ">
            <Link href={`/blog/${slug}`} className="w-full">
              <BlogCard
                title={title}
                src={mainImage}
                alt={alt}
                date={publishedAt}
              />
            </Link>
          </div>
        )
      )}
    </>
  );
}
