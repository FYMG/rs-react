import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, RickAndMortyApiResponse } from '@models/RickAndMortyApiResponse';
import makeUrlParameters from '@services/redux/query/helpers/makeUrlParameters';

export interface GetAllCharacterQueryParameters {
  [key: string]: string | number | undefined;
  name?: string;
  page?: number | string;
}

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getAllCharacter: builder.query<
      RickAndMortyApiResponse,
      GetAllCharacterQueryParameters
    >({
      query: (queryParameters: GetAllCharacterQueryParameters) =>
        `character${makeUrlParameters({
          queryParameters,
        })}`,
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetAllCharacterQuery, useGetCharacterByIdQuery } = rickAndMortyApi;
