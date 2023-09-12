import { Navigate } from 'react-router-dom'

import { RegisterForm } from '../../components/auth/register-form'
import { useSignUpMutation } from '../../services/auth-api/auth-api'
import { LoginDataType } from '../../services/auth-api/types'

export const SignUp = () => {
  const [signUp, { data }] = useSignUpMutation()

  const onSubmitHandler = (data: Omit<LoginDataType, 'rememberMe'>) => {
    const { email, password } = data

    signUp({ password, email })
  }

  if (data?.email) {
    return <Navigate to={'/check_email'} />
  }

  return (
    <>
      <RegisterForm onSubmit={onSubmitHandler} />
    </>
  )
}
