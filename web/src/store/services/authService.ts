import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithRetry } from '../baseQuery'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) => ({
    chackTokens: builder.query({
      query: () => 'check-tokens',
    }),
  }),
})

export const { useChackTokensQuery } = authApi
