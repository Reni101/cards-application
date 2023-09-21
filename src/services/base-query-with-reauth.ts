import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
//mutex
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es/v1',
  credentials: 'include',
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: 'auth/refresh-token',
        method: 'POST',
      },
      api,
      extraOptions
    )

    if (refreshResult?.meta?.response?.status === 204) {
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
