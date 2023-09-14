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
      providesTags: ['Me'],
      extraOptions: { maxRetries: 1 },
    }),
    updateUserData: builder.mutation<any, any>({
      query: () => {
        return {
          url: 'auth/me',
          method: 'PATCH',
          body: {},
        }
      },
    }),
    signOut: builder.mutation<void, void>({
      query: () => {
        return {
          url: 'auth/logout',
          method: 'POST',
        }
      },
      invalidatesTags: ['Me'],
    }),
    signIn: builder.mutation<{ accessToken: string }, LoginDataType>({
      query: ({ password, email, rememberMe = true }) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: { password, email, rememberMe },
        }
      },
      invalidatesTags: ['Me'],
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
    recoverPassword: builder.mutation<any, any>({
      query: () => {
        return {
          url: 'auth/recover-password',
          method: 'POST',
          body: {},
        }
      },
    }),
  }),
})

export const {
  useAuthMeQuery,
  useUpdateUserDataMutation,
  useSignInMutation,
  useSignUpMutation,
  useSignOutMutation,
} = authApi
