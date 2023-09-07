import { baseApi } from '../base-api'

import { LoginDataType } from './Types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    authMe: builder.query<any, void>({
      query: () => {
        return {
          url: 'auth/me',
          method: 'GET',
        }
      },
    }),
    updateUserData: builder.mutation<any, any>({
      query: () => {
        return {
          url: 'auth/me',
          method: 'PATCH',
        }
      },
    }),
    login: builder.mutation<any, LoginDataType>({
      query: ({ password, email, rememberMe }) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: { password, email, rememberMe },
        }
      },
    }),
  }),
})

export const { useAuthMeQuery, useUpdateUserDataMutation, useLoginMutation } = authApi
