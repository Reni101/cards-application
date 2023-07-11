import Edit from '../../../../assets/icons/edit.tsx'
import { LogOut } from '../../../../assets/icons/logOut.tsx'
import { Avatar } from '../../../ui/avatar'
import { Button } from '../../../ui/button'
import { Typography } from '../../../ui/typography'

import s from './profile-info.module.scss'

type PropsType = {
  onEdit: (edit: boolean) => void
  name: string
  email: string
  avatar: string
}
export const ProfileInfo = (props: PropsType) => {
  const { onEdit, name, email, avatar } = props
  const onOpenEditHandler = () => {
    onEdit(true)
  }

  return (
    <div className={s.userInfo}>
      <div className={s.avatar}>
        <Avatar fallback={name} size="large" src={avatar} />
        <Button className={s.editWrapper} variant="secondary">
          <Edit />
        </Button>
      </div>

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
