import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './register-form.module.scss'

const schema = z
  .object({
    email: z.string().trim().email('Invalid email address ').nonempty('Enter email'),
    password: z.string().trim().nonempty('Enter password').min(3, 'Minimum of 3 characters'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof schema>

type PropsType = {
  onSubmit?: (data: FormValues) => void
}

export const RegisterForm = (props: PropsType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: FormValues) => {
    props.onSubmit && props.onSubmit(data)
  }

  return (
    <Card className={s.container}>
      <Typography variant={'large'} as={'h2'}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={s.input}
          errorMessage={errors.email?.message}
          label={'Email'}
          {...register('email')}
        />
        <TextField
          className={s.input}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
          {...register('password')}
        />
        <TextField
          className={s.input}
          errorMessage={errors.confirmPassword?.message}
          label={'Confirm Password'}
          type={'password'}
          {...register('confirmPassword')}
        />

        <Button className={s.button_submit} fullWidth type="submit">
          Sign Up
        </Button>
      </form>

      <Typography className={s.text_bottom} variant={'body2'}>
        Already have an account?
      </Typography>

      <Button variant={'link'} as={'a'} href={'/'} className={s.link_sign_in}>
        Sign In
      </Button>
    </Card>
  )
}
