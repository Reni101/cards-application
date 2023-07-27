import { useState } from 'react'

import s from './App.module.scss'
import { LoginForm } from './components/auth/login-form'
import { Header } from './components/ui/header'
import { Pagination } from './components/ui/pagination'

export function App() {
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState('30')

  const onPageChanged = (pageNumber: number) => {
    console.log(pageNumber, 'page number')
    setPage(pageNumber)
  }
  const onChangeRows = (value: string) => {
    console.log(value, 'page rows')
    setRows(value)
  }

  return (
    <>
      <Header isLoggedIn={false} />
      <div className={s.container}>
        <LoginForm />
        <Pagination
          pageCount={25}
          currentPage={page}
          rowsValue={rows}
          changePage={onPageChanged}
          changeRows={onChangeRows}
        />
      </div>
    </>
  )
}
