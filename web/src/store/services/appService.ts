import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRetry } from '../baseQuery'

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    getApp: builder.query({
      query: () => 'app',
    }),
  }),
})

export const { useGetAppQuery } = appApi
