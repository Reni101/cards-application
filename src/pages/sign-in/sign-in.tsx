import { Navigate } from 'react-router-dom'

import { LoginForm } from '../../components/auth/login-form'
import { useGetMeQuery, useSignInMutation } from '../../services/auth-api/auth-api'

export const SignIn = () => {
  const [signIn] = useSignInMutation()
  const { data } = useGetMeQuery()

  if (data && data?.success !== false) return <Navigate to={'/decks'} />

  return <LoginForm onSubmit={signIn} />
}
