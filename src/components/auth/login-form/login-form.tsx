import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

const schema = z.object({
  email: z.string().trim().email('Invalid email address ').nonempty('Enter email'),
  password: z.string().trim().nonempty('Enter password').min(3, '3 malo'),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof schema>

export const LoginForm = () => {
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
    console.log(data)
  }

  return (
    <Card className={s.container}>
      <Typography variant={'large'} className={s.title}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField errorMessage={errors.email?.message} label={'email'} {...register('email')} />
        <TextField label={'password'} type={'password'} {...register('password')} />
        <Checkbox label={'Remember me'} onCheckedChange={onChange} checked={value} />

        <Typography variant={'body2'} as={'a'} href={'/'}>
          Forgot Password?
        </Typography>
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}
