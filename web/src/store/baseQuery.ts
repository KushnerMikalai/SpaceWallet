import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from './rootReducer'

export const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
});

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })
