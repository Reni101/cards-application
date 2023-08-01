import s from './App.module.scss'
import { Header } from './components/ui/header'
import { Table } from './components/ui/table'

export function App() {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className={s.container}>
        {/*<LoginForm />*/}
        <Table />
      </div>
    </>
  )
}
