import { ComponentPropsWithoutRef, FC } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({ variant = 'primary', fullWidth, className, ...rest }) => {
  return (
    <button className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
