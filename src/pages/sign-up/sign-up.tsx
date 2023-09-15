import { useNavigate } from 'react-router-dom'

import { RegisterForm } from '../../components/auth/register-form'
import { useSignUpMutation } from '../../services/auth-api/auth-api'
import { LoginDataType } from '../../services/auth-api/types'

export const SignUp = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const onSubmitHandler = (dataForm: Omit<LoginDataType, 'rememberMe'>) => {
    const { email, password } = dataForm

    signUp({ password, email })
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return (
    <>
      <RegisterForm onSubmit={onSubmitHandler} />
    </>
  )
}
