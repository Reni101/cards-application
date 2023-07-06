import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

type FormValues = {
  login: string
  password: string
  rememberMe: boolean
}
export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>()

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
        <TextField label={'login'} {...register('login')} />
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
