import { useNavigate, useParams } from 'react-router-dom'

import { CreateNewPasswordForm } from '../../components/auth/create-new-password-form'
import { useResetPasswordMutation } from '../../services/auth-api/auth-api'

export const CreateNewPassword = () => {
  const { token } = useParams()
  const navigate = useNavigate()
  const [resetPassword] = useResetPasswordMutation()

  const onSubmitHandler = (data: { password: string }) => {
    if (token) {
      resetPassword({ token, password: data.password })
        .unwrap()
        .then(() => {
          navigate('/')
        })
    }
  }

  return (
    <>
      <CreateNewPasswordForm onSubmit={onSubmitHandler} />
    </>
  )
}
