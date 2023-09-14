import { Link } from 'react-router-dom'

import { Logo } from '../../../assets/icons/logo'
import { useAuthMeQuery } from '../../../services/auth-api/auth-api'
import { Button } from '../button'

import s from './header.module.scss'
import { NavAvatar } from './navAvatar'

export const Header = () => {
  const { data, isSuccess } = useAuthMeQuery()

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Logo />
        {!!data?.email && isSuccess ? (
          <NavAvatar userData={data} />
        ) : (
          <Button variant={'primary'} as={Link} to={'/'}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}
