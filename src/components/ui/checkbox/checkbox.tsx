import { useId } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import { Checked } from '../../../assets/icons/cheked'

import s from './checkbox.module.scss'

type PropsType = {
  label?: string
  checked?: boolean
  onCheckedChange?: (value: boolean) => void
  disabled?: boolean
  className?: string
}

export const Checkbox = (props: PropsType) => {
  const { className = '', ...restProps } = props
  const checkboxId = useId()
  const disabledClass = `${props.disabled ? s.disabled : ''}`

  return (
    <>
      <div className={`${s.container} ${className}`}>
        <CheckboxRadix.Root className={s.root} id={checkboxId} {...restProps}>
          <div className={`${s.checkbox} ${disabledClass}`}>
            <CheckboxRadix.Indicator className={s.indicator}>
              <Checked />
            </CheckboxRadix.Indicator>
          </div>
        </CheckboxRadix.Root>
        <label className={`${s.label}  ${disabledClass}`} htmlFor={checkboxId}>
          {props.label}
        </label>
      </div>
    </>
  )
}
