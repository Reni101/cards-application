import { useState } from 'react'

import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import { EditProfileInfo } from './edit-profile-info/edit-profile-info.tsx'
import { ProfileInfo } from './profile-info/profile-info.tsx'
import s from './profile.module.scss'

export const Profile = () => {
  const [edit, setEdit] = useState(false)

  return (
    <Card className={`${s.container} ${edit && s.changeInfo}`}>
      <Typography variant="large" className={s.title}>
        Personal Information
      </Typography>
      {edit ? (
        <EditProfileInfo
          avatar="https://zamanilka.ru/wp-content/uploads/2023/05/ava-baby-290523-2-1024x1024.jpg"
          onCloseEdit={setEdit}
          name="Kirill"
        />
      ) : (
        <ProfileInfo
          onEdit={setEdit}
          avatar="https://zamanilka.ru/wp-content/uploads/2023/05/ava-baby-290523-2-1024x1024.jpg"
          email="test@gmail.com"
          name="Kirill"
        />
      )}
    </Card>
  )
}
