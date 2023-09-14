import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

const schema = z.object({
  email: z.string().trim().nonempty('Enter email').email('Invalid email address '),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(3, 'Must be 3 characters long')
    .max(30, 'Must be no more than 30 characters'),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof schema>

type PropsType = {
  onSubmit?: (data: FormValues) => void
}

export const LoginForm = (props: PropsType) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: true,
  })

  const onSubmit = (data: FormValues) => {
    props.onSubmit && props.onSubmit(data)
  }

  return (
    <Card className={s.container}>
      <Typography variant={'large'} as={'h2'}>
        Sign In
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
        <Checkbox
          className={s.checkbox}
          label={'Remember me'}
          onCheckedChange={onChange}
          checked={value}
        />

        <Typography className={s.forgot} variant={'body2'} as={Link} to={'/forgot_password'}>
          Forgot Password?
        </Typography>
        <Button className={s.button_submit} fullWidth type="submit">
          Sign in
        </Button>
      </form>

      <Typography className={s.text_bottom} variant={'body2'}>
        Don`t have an account?
      </Typography>

      <Button variant={'link'} as={Link} to={'/signup'} className={s.link_sign_up}>
        Sign up
      </Button>
    </Card>
  )
}
