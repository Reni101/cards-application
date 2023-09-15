import { useNavigate } from 'react-router-dom'

import { ForgotPasswordForm } from '../../components/auth/forgot-password-form'
import { useRecoverPasswordMutation } from '../../services/auth-api/auth-api'

export const ForgotPassword = () => {
  const navigate = useNavigate()

  const [recoverPassword] = useRecoverPasswordMutation()
  const onSubmitHandler = (data: { email: string }) => {
    recoverPassword(data)
      .unwrap()
      .then(() => {
        navigate('/check_email', { state: { email: data.email } })
      })
  }

  return (
    <>
      <ForgotPasswordForm onSubmit={onSubmitHandler} />
    </>
  )
}
