import { LoginForm } from '../../components/auth/login-form'
import { useSignInMutation } from '../../services/auth-api/auth-api'
import { LoginDataType } from '../../services/auth-api/types'

export const SignIn = () => {
  const [signIn, { data }] = useSignInMutation()

  if (data?.accessToken) {
    console.log(data.accessToken)
  }

  const onSubmitHandler = (data: LoginDataType) => {
    signIn(data)
  }

  return <LoginForm onSubmit={onSubmitHandler} />
}
