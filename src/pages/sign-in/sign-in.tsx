import { Navigate } from 'react-router-dom'

import { LoginForm } from '../../components/auth/login-form'
import { useAuthMeQuery, useSignInMutation } from '../../services/auth-api/auth-api'

export const SignIn = () => {
  const [signIn] = useSignInMutation()
  const { data, isSuccess } = useAuthMeQuery()

  if (data && isSuccess) return <Navigate to={'/decks'} />

  return <LoginForm onSubmit={signIn} />
}
