export interface Serie {
  publishedAt: string;
  description: string;
  slug: string;
  _id: string;
  thumbnail: string;
  title: string;
}

export interface Chapter {
  created_at: string;
  description: string;
  id: number;
  id_movies: number;
  season: number;
  url: string;
  title: string;
  translation: string;
  thumbnail: string;
}
