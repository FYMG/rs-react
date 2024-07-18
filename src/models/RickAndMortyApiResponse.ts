export interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  // Array of episode URLs
  url: string; // ISO 8601 date string
}

export interface RickAndMortyApiResponse {
  info: Info;
  results: Character[];
}
