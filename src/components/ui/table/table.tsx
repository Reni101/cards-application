import { useState } from 'react'

import s from './table.module.scss'
import { Tbody } from './tbody'
import { Thead } from './thead'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  key: string
  label: string
  isSortable?: boolean
}

export type Row = {
  title: string
  cardsCount: number
  updated: string
  createdBy: string
}

type PropsType = {
  options: Row[]
  dataHeader: Column[]
}
export const Table = ({ options, dataHeader }: PropsType) => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <table className={s.container}>
      <Thead
        sort={sort}
        columns={dataHeader}
        onSort={sort => {
          setSort(sort)
        }}
      />
      <Tbody options={options} />
    </table>
  )
}
