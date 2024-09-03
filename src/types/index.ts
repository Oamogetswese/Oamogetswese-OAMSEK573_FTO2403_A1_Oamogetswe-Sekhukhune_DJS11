// Define the Genre type
export type Genre = 'Technology' | 'Education' | 'Entertainment' | 'Health';

// Define the Episode interface
export interface Episode {
  id: string;
  title: string;
  mp3Url: string;
  duration: number; // Duration in seconds
}

// Define the Season interface
export interface Season {
  id: string;
  title: string;
  episodes: Episode[];
  releaseDate: string; // ISO date string
}

// Define the Show interface
export interface Show {
  id: string;
  title: string;
  description: string;
  seasons: Season[];
  genres: Genre[];
}

// Define the Preview interface
export interface Preview {
  id: string;
  title: string;
  description: string;
  genres: Genre[];
  imageUrl: string; // Assuming the API provides an image URL
}
