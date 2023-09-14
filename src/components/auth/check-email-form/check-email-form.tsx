import { Link } from 'react-router-dom'

import EmailCheck from '../../../assets/icons/emailCheck.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './check-email-form.module.scss'

type PropsType = {
  email: string
}
export const CheckEmailForm = (props: PropsType) => {
  const { email } = props

  return (
    <Card className={s.container}>
      <Typography variant="large" className={s.title}>
        Check Email
      </Typography>
      <EmailCheck className={s.icon} />
      <Typography variant="body2" className={s.description}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>
      <Button className={s.button} as={Link} to={'/'} fullWidth variant="primary">
        Back to Sign In
      </Button>
    </Card>
  )
}
