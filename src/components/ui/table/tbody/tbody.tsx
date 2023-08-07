import { Row } from '../table'

import s from './tbody.module.scss'

type PropsType = {
  options: Row[]
}
export const Tbody = ({ options }: PropsType) => {
  return (
    <tbody className={s.container}>
      {options.map(el => (
        <tr key={el.title}>
          <td>{el.title}</td>
          <td>{el.cardsCount}</td>
          <td>{el.updated}</td>
          <td>{el.createdBy}</td>
          <td>icons...</td>
        </tr>
      ))}
    </tbody>
  )
}
