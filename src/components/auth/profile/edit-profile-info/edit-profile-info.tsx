import { useState } from 'react'

import { Avatar } from '../../../ui/avatar'
import { Button } from '../../../ui/button'
import { TextField } from '../../../ui/text-field'

import s from './edit-profile-info.module.scss'

type PropsType = {
  onCloseEdit: (edit: boolean) => void
  name: string
  avatar: string
}
export const EditProfileInfo = (props: PropsType) => {
  const { onCloseEdit, avatar, name } = props
  const [value, setValue] = useState(name)
  const onCloseEditInfo = () => {
    if (value.length) onCloseEdit(false)
  }

  return (
    <>
      <Avatar fallback="kirill" size="large" src={avatar} />
      <TextField
        className={s.input}
        label="Nick name"
        placeholder="Nick name"
        onSetValue={setValue}
        value={value}
      />
      <Button fullWidth={true} variant="primary" onClick={onCloseEditInfo}>
        Save Changes
      </Button>
    </>
  )
}
