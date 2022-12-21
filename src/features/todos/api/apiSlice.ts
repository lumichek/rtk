import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducePath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500'}),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos'
    })
  })
})