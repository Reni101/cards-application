import { useNavigate } from 'react-router-dom'

import { LoginForm } from '../../components/auth/login-form'
import { useSignInMutation } from '../../services/auth-api/auth-api'
import { LoginDataType } from '../../services/auth-api/types'

export const SignIn = () => {
  const navigate = useNavigate()

  const [signIn, { data }] = useSignInMutation()

  if (data?.accessToken) {
    console.log(data.accessToken)
  }

  const onSubmitHandler = (data: LoginDataType) => {
    signIn(data)
      .unwrap()
      .then(() => {
        navigate('decks')
      })
  }

  return <LoginForm onSubmit={onSubmitHandler} />
}
