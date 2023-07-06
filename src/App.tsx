import s from './App.module.scss'
import { LoginForm } from './components/auth/login-form'
import { Header } from './components/ui/header'

export function App() {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.flex}>
        <LoginForm />
      </div>
    </div>
  )
}
