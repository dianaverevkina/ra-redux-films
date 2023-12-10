import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: builder => ({
    getFilms: builder.query({
      query: (name) => `/?apikey=9713c5e7&s=${name}`
    }),
    getFilm: builder.query({
      query: (id) => `/?apikey=9713c5e7&i=${id}`
    })
  })
})

export const { useGetFilmsQuery, useGetFilmQuery } = apiSlice;