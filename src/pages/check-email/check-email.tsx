import { Navigate, useLocation } from 'react-router-dom'

import { CheckEmailForm } from '../../components/auth/check-email-form'

export const CheckEmail = () => {
  const location = useLocation()

  if (!location.state?.email) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <CheckEmailForm email={location.state.email} />
    </>
  )
}
