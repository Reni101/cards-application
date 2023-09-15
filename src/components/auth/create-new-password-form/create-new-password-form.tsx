import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './crreate-new-password-form.module.scss'

const schema = z.object({
  password: z.string().trim().nonempty('Enter password'),
})

type FormValues = z.infer<typeof schema>

type PropsType = {
  onSubmit?: (data: FormValues) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: PropsType) => {
  const onSubmitHandler = (data: FormValues) => {
    onSubmit && onSubmit(data)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  return (
    <Card className={s.container}>
      <Typography variant="large" className={s.title}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField
          className={s.input}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
          {...register('password')}
        />
        <Typography variant="body2" className={s.bottomText}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button className={s.button} fullWidth type="submit">
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
