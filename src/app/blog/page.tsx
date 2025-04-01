import { getBannerBlogImage, getBlogs } from "@/utils/sanity";
import React from "react";

import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";

import { Blog } from "@/types/sanity";

import Image from "next/image";

export default async function page() {
  const blog = await getBlogs(4);

  const { alt, image } = await getBannerBlogImage();

  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full">
      <Link href={"/login"}>
        <Image
          src={image}
          alt={alt}
          width={800}
          height={101}
          className="mb-16 bg-cover"
          quality={100}
        />
      </Link>

      <section className="grid md:grid-cols-1 grid-cols-1 md:gap-4 gap-12 w-full max-w-[800px] mx-auto border-r border-l border-gray-500/30 px-5">
        <h2 className="font-bold text-4xl border-b-[7px] pb-4 text-black/80 border-[#f47521]">
          Blog
        </h2>
        {blog.map(({ alt, mainImage, slug, title, _id, publishedAt }: Blog) => (
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
        ))}
      </section>
    </div>
  );
}
