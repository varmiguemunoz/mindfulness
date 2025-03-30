import { createClient, groq } from "next-sanity";

import clientConfig from "./config";

async function getServices() {
  try {
    const query = groq`
  *[_type == "services"]{
    description,
      title,
      _id,
    "imageUrl": image.asset->url,
    "altText": image.alt
  }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBlogs(limit: number) {
  try {
    const query = groq`
    *[_type == "post"] | order(publishedAt desc) [0...$limit] {
      "slug": slug.current,
      title,
      _id,
      publishedAt,
      "alt": mainImage.alt,
      "mainImage": mainImage.asset->url
    }
  `;

    return await createClient(clientConfig).fetch(
      query,
      { limit },
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBlog(slug: string) {
  try {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    _id,
    body,
    description,
    publishedAt,
    "alt": mainImage.alt,
    "mainImage": mainImage.asset->url
  }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {
        slug,
      },
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBannerBlogImage() {
  try {
    const query = groq`
    *[_type == "bannerblog"] | order(_createdAt desc) [0] {
    "alt": image.alt,
    "image": image.asset->url
  }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getSliderImages() {
  try {
    const query = groq`
    *[_type == "slider"] | order(_createdAt desc){
    "alt": image.alt,
    "image": image.asset->url,
    title,
    description,
    buttonTitle,
    url
  }
    `;

    return await createClient(clientConfig).fetch(
      query,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getServices, getBlogs, getBlog, getBannerBlogImage, getSliderImages };
