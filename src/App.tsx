import { Outlet } from 'react-router-dom'

import s from './App.module.scss'
import { Header } from './components/ui/header'

export function App() {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Outlet />
      </div>
    </>
  )
}
