export interface IPerson {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

export interface IPeopleData {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}

export default async function getPeopleData(searchValue: string) {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchValue.trim()}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return (await response.json()) as IPeopleData;
}
