import s from './App.module.scss'
import { LoginForm } from './components/auth/login-form'
import { Header } from './components/ui/header'
import { Select } from './components/ui/select-box'

export function App() {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className={s.container}>
        <LoginForm />
        <Select />
      </div>
    </>
  )
}
