import { useId } from 'react'

import { useNavigate } from 'react-router-dom'

import { LogOut } from '../../../../assets/icons/logOut'
import Person from '../../../../assets/icons/person'
import { useSignOutMutation } from '../../../../services/auth-api/auth-api'
import { AuthMeData } from '../../../../services/auth-api/types'
import { Avatar } from '../../avatar'
import { DropdownMenu } from '../../dropdown-menu'
import { Typography } from '../../typography'

import s from './navAvatar.module.scss'

type PropsType = {
  userData: AuthMeData | undefined
}

export const NavAvatar = ({ userData }: PropsType) => {
  const navigate = useNavigate()
  const [signOut, {}] = useSignOutMutation()

  const logOutHandler = () => {
    signOut()
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  const options = [
    <div key={useId()} className={s.info}>
      <Avatar fallback={userData!.name} />
      <div>
        <Typography variant={'subtitle2'}> {userData!.name}</Typography>
        <Typography variant={'caption'} className={s.email}>
          {userData!.email}
        </Typography>
      </div>
    </div>,
    <div key={useId()} className={s.item}>
      <Person /> My Profile
    </div>,
    <div key={useId()} className={s.item} onClick={logOutHandler}>
      <LogOut /> Sign Out
    </div>,
  ]

  return (
    <div>
      <DropdownMenu options={options}>
        <div className={s.avatar}>
          <Typography variant={'subtitle1'} className={s.name}>
            {userData?.name}
          </Typography>
          <Avatar fallback={userData!.name} />
        </div>
      </DropdownMenu>
    </div>
  )
}
