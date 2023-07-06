import { Logo } from '../../../assets/icons/logo'
import { Button } from '../button'

import s from './header.module.scss'

type PropsType = {
  isLoggedIn: boolean
}
export const Header = ({ isLoggedIn = false }: PropsType) => {
  return (
    <div className={s.container}>
      <Logo />

      {isLoggedIn ? <Button as={'a'}>Sign in</Button> : <div>avatar</div>}
    </div>
  )
}
