import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'ffc4bdef7bmsh008ba9208359439p1d4f45jsn848dea47c83d')

      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' })
  })
})

export const {
  useGetTopChartsQuery,
} = shazamCoreApi