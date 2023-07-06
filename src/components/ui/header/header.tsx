import { Logo } from '../../../assets/icons/logo'
import { Button } from '../button'

import s from './header.module.scss'

type PropsType = {
  isLoggedIn?: boolean
}
export const Header = ({ isLoggedIn = false }: PropsType) => {
  return (
    <div className={s.container}>
      <Logo />

      {isLoggedIn ? <div>avatar</div> : <Button as={'a'}>Sign in</Button>}
    </div>
  )
}
