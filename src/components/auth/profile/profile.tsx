import { useState } from 'react'

import Edit from '../../../assets/icons/edit.tsx'
import { Avatar } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import { EditProfileInfo } from './edit-profile-info/edit-profile-info.tsx'
import { ProfileInfo } from './profile-info/profile-info.tsx'
import s from './profile.module.scss'

export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <Card className={`${s.container} ${isEdit && s.changeInfo}`}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      <div className={s.avatar}>
        <Avatar
          fallback="kirill"
          size="large"
          src="https://zamanilka.ru/wp-content/uploads/2023/05/ava-baby-290523-2-1024x1024.jpg"
        />
        <Button className={s.editWrapper} variant="secondary">
          <Edit />
        </Button>
      </div>
      <div className={s.profileInfo}>
        {isEdit ? (
          <EditProfileInfo onCloseEdit={setIsEdit} name="Kirill" />
        ) : (
          <ProfileInfo onEdit={setIsEdit} email="test@gmail.com" name="Kirill" />
        )}
      </div>
    </Card>
  )
}
