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

async function getVideos(currentPage: number = 1, itemsPerPage: number = 10) {
  try {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const query = groq`
    *[_type == "video"] | order(publishedAt desc) [${start}...${end}] {
      "slug": slug.current,
      title,
      _id,
      publishedAt,
      "alt": thumbnail.alt,
      "thumbnail": thumbnail.asset->url,
      description
    }
  `;

    const client = createClient(clientConfig);
    const data = await client.fetch(query, {}, { cache: "no-store" });

    // Obtener el total de videos para la paginación
    const totalQuery = groq`count(*[_type == "video"])`;
    const totalItems = await client.fetch(totalQuery);

    return { data, totalItems };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getVideo(slug: string) {
  try {
    const query = groq`
    *[_type == "video" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      _id,
      publishedAt,
      "alt": thumbnail.alt,
      "thumbnail": thumbnail.asset->url,
      description,
      title,
      body,
      "video": video.asset->url,
      "typecontent": typecontent-> {
          _id,
          name
      }
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

async function getTypesContent() {
  try {
    const query = groq`
    *[_type == "typecontent"] | order(_createdAt desc){
      name
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

async function getVideosToCategories(
  currentPage: number = 1,
  itemsPerPage: number = 10,
  category: string
) {
  try {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const query = groq`
    *[_type == "video" && typecontent->name == $category] | order(publishedAt desc) [${start}...${end}] {
      "slug": slug.current,
      title,
      _id,
      publishedAt,
      "alt": thumbnail.alt,
      "thumbnail": thumbnail.asset->url,
      description
    }
  `;

    // Obtener el total de videos para la paginación
    const totalQuery = groq`count(*[_type == "video" &&
    typecontent->name == $category])`;

    const client = createClient(clientConfig);
    const data = await client.fetch(query, { category }, { cache: "no-store" });

    const totalItems = await client.fetch(totalQuery, { category });

    return { data, totalItems };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {
  getServices,
  getTypesContent,
  getVideosToCategories,
  getBlogs,
  getBlog,
  getBannerBlogImage,
  getSliderImages,
  getVideos,
  getVideo,
};
