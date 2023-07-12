import Edit from '../../../../assets/icons/edit.tsx'
import { LogOut } from '../../../../assets/icons/logOut.tsx'
import { Button } from '../../../ui/button'
import { Typography } from '../../../ui/typography'

import s from './profile-info.module.scss'

type PropsType = {
  onEdit: (edit: boolean) => void
  name: string
  email: string
}
export const ProfileInfo = (props: PropsType) => {
  const { onEdit, name, email } = props
  const onOpenEditHandler = () => {
    onEdit(true)
  }

  return (
    <div className={s.userInfo}>
      <div className={s.userName}>
        <Typography variant="h1" as="h1" className={s.name}>
          {name}
        </Typography>
        <Edit className={s.edit} onClick={onOpenEditHandler} />
      </div>
      <Typography variant="body2" className={s.email}>
        {email}
      </Typography>
      <Button variant="secondary">
        <LogOut /> Logout
      </Button>
    </div>
  )
}
