import { useState } from 'react'

import s from './table.module.scss'
import { Column, Sort, Thead } from './thead/thead'

export const Table = () => {
  const [sort, setSort] = useState<Sort>(null)

  return (
    <table className={s.container}>
      <Thead
        sort={sort}
        columns={dataHead}
        onSort={sort => {
          setSort(sort)
        }}
      />
      <tbody>
        {data.map(el => (
          <tr key={el.title}>
            <td>{el.title + '1111'}</td>
            <td>{el.cardsCount}</td>
            <td>{el.updated}</td>
            <td>{el.createdBy}</td>
            <td>icons...</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
const data = [
  {
    title: 'Pack name A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Pack name B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Pack name C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Pack name D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Pack name E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

const dataHead: Column[] = [
  {
    key: 'name',
    label: 'Name',
    isSortable: true,
  },
  {
    key: 'cards',
    label: 'Cards',
    isSortable: true,
  },
  {
    key: 'updated',
    label: 'Last Updated',
    isSortable: true,
  },
  {
    key: 'created',
    label: 'Created by',
    isSortable: true,
  },
  {
    key: 'options',
    label: '',
  },
]
