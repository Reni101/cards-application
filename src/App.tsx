import s from './App.module.scss'
import { Router } from './router'

export function App() {
  return (
    <div className={s.container}>
      <Router />
    </div>
  )
}
