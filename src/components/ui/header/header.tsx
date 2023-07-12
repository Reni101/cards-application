import { Logo } from '../../../assets/icons/logo'
import { Button } from '../button'

import s from './header.module.scss'
import { NavAvatar } from './navAvatar'

type PropsType = {
  isLoggedIn?: boolean
}
export const Header = ({ isLoggedIn = false }: PropsType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Logo />

        {isLoggedIn ? <NavAvatar /> : <Button as={'a'}>Sign in</Button>}
      </div>
    </div>
  )
}
