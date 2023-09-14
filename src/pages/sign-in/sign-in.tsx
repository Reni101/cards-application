import { Navigate } from 'react-router-dom'

import { LoginForm } from '../../components/auth/login-form'
import { useGetMeQuery, useSignInMutation } from '../../services/auth-api/auth-api'

export const SignIn = () => {
  const [signIn] = useSignInMutation()
  const { data, isSuccess } = useGetMeQuery()

  if (data?.email && isSuccess) return <Navigate to={'/decks'} />

  return <LoginForm onSubmit={signIn} />
}
