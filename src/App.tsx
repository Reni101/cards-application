import s from './App.module.scss'
import { Header } from './components/ui/header'

export function App() {
  return (
    <div className={s.container}>
      <Header />
    </div>
  )
}
