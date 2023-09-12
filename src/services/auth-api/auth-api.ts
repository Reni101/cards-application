import { baseApi } from '../base-api'

import { AuthMeData, LoginDataType } from './types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    authMe: builder.query<AuthMeData, void>({
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
    signIn: builder.mutation<{ accessToken: string }, LoginDataType>({
      query: ({ password, email, rememberMe = true }) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: { password, email, rememberMe },
        }
      },
    }),
    signUp: builder.mutation<
      { id: string; name: string; email: string },
      Omit<LoginDataType, 'rememberMe'>
    >({
      query: ({ password, email }) => {
        return {
          url: 'auth/sign-up',
          method: 'POST',
          body: { password, email },
        }
      },
    }),
  }),
})

export const { useAuthMeQuery, useUpdateUserDataMutation, useSignInMutation, useSignUpMutation } =
  authApi
