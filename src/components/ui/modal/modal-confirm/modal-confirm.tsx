import { ReactNode } from 'react'

import s from './modal-confirm.module.scss'
type PropsType = {
  children: ReactNode
  className?: string
}
export const ModalConfirm = (props: PropsType) => {
  const { children, className } = props

  const styles = `${className ? `${s.buttonContainer} ${className}` : s.buttonContainer}`

  return <div className={styles}>{children}</div>
}
