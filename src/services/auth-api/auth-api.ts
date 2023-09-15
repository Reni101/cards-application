import { baseApi } from '../base-api'

import { AuthMeData, LoginDataType } from './types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      async queryFn(_name, _api, _extraOptions, baseQuery) {
        const result = await baseQuery({
          url: 'auth/me',
          method: 'GET',
        })

        if (result.error?.status === 401) {
          return { data: { success: false } }
        }

        return { data: result.data } as { data: AuthMeData }
      },
      providesTags: ['Me'],
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
      query: data => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        }
      },
      invalidatesTags: ['Me'],
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
    signUp: builder.mutation<
      { id: string; name: string; email: string },
      Omit<LoginDataType, 'rememberMe'>
    >({
      query: data => {
        return {
          url: 'auth/sign-up',
          method: 'POST',
          body: data,
        }
      },
    }),
    recoverPassword: builder.mutation<any, { email: string }>({
      query: ({ email }) => {
        return {
          url: 'auth/recover-password',
          method: 'POST',
          body: {
            email,
            html: '<h1>Hi,dear ##name##</h1><p>Click <a href="http://localhost:5173/create-new-password/##token##">here</a> to recover your password</p>',
          },
        }
      },
    }),
    resetPassword: builder.mutation<any, { token: string; password: string }>({
      query: ({ token, password }) => {
        return {
          url: `auth/reset-password/${token}`,
          method: 'POST',
          body: { password },
        }
      },
    }),
  }),
})

export const {
  useUpdateUserDataMutation,
  useRecoverPasswordMutation,
  useSignInMutation,
  useSignUpMutation,
  useSignOutMutation,
  useGetMeQuery,
  useResetPasswordMutation,
} = authApi
