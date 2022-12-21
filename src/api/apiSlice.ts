import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todos } from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todos, void>({
      query: () => '/todos',
    }),
  }),
});

export const {
  useGetTodosQuery,
} = apiSlice;
