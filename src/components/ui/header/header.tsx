import { Logo } from '../../../assets/icons/logo'
import { useAuthMeQuery } from '../../../services/auth-api/auth-api'
import { Button } from '../button'

import s from './header.module.scss'
import { NavAvatar } from './navAvatar'

export const Header = () => {
  const { data } = useAuthMeQuery()

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Logo />
        {data ? (
          <NavAvatar userData={data} />
        ) : (
          // fix this to Link
          <Button variant={'primary'} as={'a'} href={'/'}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}
