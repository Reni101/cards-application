import { FC, ReactNode } from 'react'

import s from './card.module.scss'

type CardPropsType = {
  children: ReactNode
  className?: string
}

export const Card: FC<CardPropsType> = ({ children, className }) => {
  const finalClassName = className ? className : s.card

  return <div className={finalClassName}>{children}</div>
}
