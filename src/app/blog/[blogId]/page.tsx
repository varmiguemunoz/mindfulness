import React from "react";
import { getBlog } from "@/utils/sanity";

import Image from "next/image";
import FormattedDate from "@/components/ui/FormattedDate";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default async function page({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  const blog = await getBlog(blogId);

  return (
    <article className="w-full flex flex-col md:gap-16 gap-10 px-5 md:px-16 md:py-12">
      <div className="flex md:flex-row flex-col items-center justify-start gap-5 w-full">
        <Image
          src={blog.mainImage}
          alt={"icon"}
          width={500}
          height={350}
          loading="lazy"
          className={`object-cover rounded-lg  w-[500px] h-[350px]`}
        />
        <div className="flex flex-col justify-start items-start gap-5">
          <h3 className={`font-bold text-black/80 md:text-5xl text-3xl`}>
            {blog.title}
          </h3>
          <div className="flex items-center justify-center gap-3">
            <FormattedDate date={blog.publishedAt} type="featured" />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-5 items-start justify-center">
        <div className="md:w-[30%] w-full bg-gray-300/30 px-7 py-6 ">
          <p className="text-black/50 text-center font-bold text-lg">
            &quot;{blog.description}&quot;
          </p>
        </div>

        <div className="md:w-[70%] w-full text-lg font-light text-black/50">
          <PortableText value={blog.body} />
        </div>
      </div>

      <Link
        href={"/blog"}
        className="text-white text-center w-60 mx-auto font-bold px-5 py-3 bg-lavender rounded-sm"
      >
        Go Back
      </Link>
    </article>
  );
}
