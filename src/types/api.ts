export interface Serie {
  created_at: string;
  description: string;
  id: number;
  thumbnail: string;
  title: string;
  type: string;
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
