import { forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import Arrow from '../../../assets/icons/arrow'
import { Typography } from '../typography'

import s from './select.module.scss'

type PropsType = {
  options: { value: string; label: string | number }[]
  disabled?: boolean
  defaultValue?: string
  onValueChange?: (value: string) => void
  value?: string
  className?: string
  placeholder?: string
  showIcon?: boolean
  label?: string
  size?: 'small' | 'large'
}

export const Select = (props: PropsType) => {
  const { showIcon = true } = props

  const itemForRender = props.options?.map((el, index) => (
    <SelectItem className={props.className} value={el.value} key={index}>
      {el.label}
    </SelectItem>
  ))

  return (
    <div className={s.container}>
      {props.label && (
        <Typography
          as={'span'}
          variant={'body2'}
          className={`${s.label} ${props.disabled && s.disabled}`}
        >
          {props.label}
        </Typography>
      )}
      <SelectRadix.Root
        disabled={props.disabled}
        value={props.value}
        onValueChange={props.onValueChange}
        defaultValue={props.defaultValue}
      >
        <SelectRadix.Trigger
          className={`${s.SelectTrigger} ${props.className ?? ''}`}
          disabled={props.disabled}
        >
          <SelectRadix.Value />
          {showIcon && (
            <SelectRadix.Icon className={s.SelectIcon}>
              <Arrow />
            </SelectRadix.Icon>
          )}
        </SelectRadix.Trigger>
        <SelectRadix.Content position="popper" sideOffset={0} className={s.SelectContent}>
          <SelectRadix.Viewport className={s.SelectViewport}>
            <SelectRadix.Group>
              <SelectRadix.Label className={s.SelectLabel} />
              {itemForRender}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Root>
    </div>
  )
}

const SelectItem = forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <SelectRadix.Item className={`${s.SelectItem} ${className}`} {...props} ref={forwardedRef}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  )
})
