import { ComponentProps, FC } from 'react'

import s from './card.module.scss'

type ContainerProps = ComponentProps<'div'>

export const Card: FC<ContainerProps> = ({ className, ...rest }) => {
  return <div className={`${s.container} ${className}`} {...rest}></div>
}
