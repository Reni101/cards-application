import { LoginForm } from '../../components/auth/login-form'
import { useLoginMutation } from '../../services/auth-api/auth-api'
import { LoginDataType } from '../../services/auth-api/Types'

export const SignIn = () => {
  const [loginRequest] = useLoginMutation()

  const onSubmitHandler = (data: LoginDataType) => {
    loginRequest(data)
  }

  return <LoginForm onSubmit={onSubmitHandler} />
}
