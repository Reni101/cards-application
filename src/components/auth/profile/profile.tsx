import Edit from '../../../assets/icons/edit.tsx'
import { LogOut } from '../../../assets/icons/logOut.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './profile.module.scss'
export const Profile = () => {
  return (
    <Card className={s.container}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.avatar}>
        <Button className={s.editWrapper} variant="secondary">
          <Edit />
        </Button>
      </div>
      <div className={s.userInfo}>
        <div className={s.userName}>
          <Typography variant="h1" as="h1" className={s.name}>
            Kirill
          </Typography>
          <Edit className={s.edit} />
        </div>
        <Typography variant="body2" className={s.email}>
          test@gmail.com
        </Typography>
        <Button variant="secondary">
          <LogOut /> Logout
        </Button>
      </div>
    </Card>
  )
}
