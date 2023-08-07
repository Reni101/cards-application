import { ComponentPropsWithoutRef } from 'react'

import Arrow from '../../../../assets/icons/arrow'
import { Column, Sort } from '../table'

import s from './thead.module.scss'

type PropsType = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Array<Column>
    sort: Sort
    onSort: (sort: Sort) => void
  },
  'children'
>

export const Thead = ({ columns, sort, onSort, ...restProps }: PropsType) => {
  const handleSorting = (e: any) => {
    const isSortable = e.target.getAttribute('data-sortable')
    const key = e.target.getAttribute('data-name')

    if (key === null) throw new Error('No data-name found!')

    if (!isSortable || isSortable !== 'true') return

    if (key !== sort?.key) {
      return onSort({ key, direction: 'asc' })
    }
    if (sort?.direction === 'asc') {
      return onSort({ key, direction: 'desc' })
    }
    onSort(null)
  }

  return (
    <thead className={s.container} {...restProps}>
      <tr onClick={handleSorting}>
        {columns.map(el => (
          <th data-sortable={el.isSortable} data-name={el.key} key={el.key}>
            <span>
              {el.label}
              {el.isSortable && sort?.key === el.key && (
                <Arrow className={`${s.arrow} ${sort?.direction === 'desc' && s.arrowDown}`} />
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  )
}
