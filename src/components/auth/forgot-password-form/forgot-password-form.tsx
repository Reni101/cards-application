import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './forgot-password.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid email address ').nonempty('Enter email'),
})

type FormValues = z.infer<typeof schema>

type PropsType = {
  onSubmit?: (data: FormValues) => void
}

export const ForgotPasswordForm = (props: PropsType) => {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmitHandler = (data: FormValues) => {
    onSubmit && onSubmit(data)
  }

  return (
    <Card className={s.container}>
      <Typography variant="large" className={s.title}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          label="Email"
          className={s.input}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Typography variant="body2" className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button className={s.button} fullWidth type="submit">
          Send Instructions
        </Button>
      </form>
      <Typography variant="body2" className={s.bottomText}>
        Did you remember your password?
      </Typography>
      <Button variant={'link'} as={Link} to={'/'} className={s.link}>
        Try logging in
      </Button>
    </Card>
  )
}
