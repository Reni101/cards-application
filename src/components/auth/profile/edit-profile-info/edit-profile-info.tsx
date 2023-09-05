import { useState } from 'react'

import { Button } from '../../../ui/button'
import { TextField } from '../../../ui/text-field'

import s from './edit-profile-info.module.scss'

type PropsType = {
  onCloseEdit: (edit: boolean) => void
  name: string
}
export const EditProfileInfo = (props: PropsType) => {
  const { onCloseEdit, name } = props
  const [value, setValue] = useState(name)
  const onCloseEditInfo = () => {
    if (value.length) onCloseEdit(false)
  }

  return (
    <>
      <TextField
        className={s.input}
        label="Nick name"
        placeholder="Nick name"
        onSetValue={setValue}
        value={value}
        autoFocus
      />
      <Button fullWidth={true} variant="primary" onClick={onCloseEditInfo}>
        Save Changes
      </Button>
    </>
  )
}
