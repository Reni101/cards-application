import { useId } from 'react'

import { LogOut } from '../../../../assets/icons/logOut'
import Person from '../../../../assets/icons/person'
import { Avatar } from '../../avatar'
import { DropdownMenu } from '../../dropdownMenu'
import { Typography } from '../../typography'

import s from './navAvatar.module.scss'

export const NavAvatar = () => {
  const options = [
    <div key={useId()} className={s.info}>
      <Avatar fallback={'Ivan'} />
      <div>
        <Typography variant={'subtitle2'}> Ivan</Typography>
        <Typography variant={'caption'} className={s.email}>
          j&johnson@gmail.com
        </Typography>
      </div>
    </div>,
    <div key={useId()} className={s.item}>
      <Person /> My Profile
    </div>,
    <div key={useId()} className={s.item}>
      <LogOut /> Sign Out
    </div>,
  ]

  return (
    <div>
      <DropdownMenu options={options}>
        <div className={s.avatar}>
          <Typography variant={'subtitle1'} className={s.name}>
            Ivan
          </Typography>
          <Avatar fallback={'Ivan'} />
        </div>
      </DropdownMenu>
    </div>
  )
}
