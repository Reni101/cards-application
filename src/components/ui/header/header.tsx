import { Logo } from '../../../assets/icons/logo'
import { Button } from '../button'

import s from './header.module.scss'
export const Header = () => {
  const isLogged = true

  return (
    <div className={s.container}>
      <Logo />

      {isLogged ? <Button as={'a'}>Sign in</Button> : <div>avatar</div>}
    </div>
  )
}
