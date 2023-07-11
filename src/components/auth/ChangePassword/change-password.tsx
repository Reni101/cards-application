import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './change-password.module.scss'

type FormValueType = {
  newPassword: string
}

type PropsType = {
  onSubmit?: (data: FormValueType) => void
}

const schema = z.object({
  newPassword: z.string().trim().nonempty('Enter password').min(3, 'Minimum of 3 characters'),
})

export const ChangePassword = (props: PropsType) => {
  const { onSubmit } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmitHandler = (data: FormValueType) => {
    console.log(data)
    onSubmit && onSubmit(data)
  }

  return (
    <Card className={s.container}>
      <Typography variant="large" className={s.title}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          className={s.input}
          label="Password"
          type="password"
          {...register('newPassword')}
          errorMessage={errors.newPassword?.message}
        />
        <Typography variant="body2" className={s.description}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.button} fullWidth type="submit">
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
