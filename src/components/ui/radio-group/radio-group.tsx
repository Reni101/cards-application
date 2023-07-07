import { FC } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type OptionsType = {
  label: string
  value: string
  id: string
}

type PropsType = {
  labelText?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  options: OptionsType[]
  className?: string
}
export const RadioGroup: FC<PropsType> = ({
  options = [],
  onValueChange,
  className,
  disabled,
  ...rest
}) => {
  const disabledStyle = disabled ? s.disabled : ''

  return (
    <>
      {options.map(option => {
        return (
          <div className={`${s.container} ${className}`} key={option.id}>
            <RadioGroupRadix.Root
              className={`${s.root}`}
              aria-label="View density"
              onValueChange={onValueChange}
              disabled={disabled}
              {...rest}
            >
              <RadioGroupRadix.Item className={s.item} value={option.value} id={option.id}>
                <RadioGroupRadix.Indicator className={`${s.indicator} ${disabledStyle}`} />
              </RadioGroupRadix.Item>
            </RadioGroupRadix.Root>
            <label className={`${s.label} ${disabledStyle}`} htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        )
      })}
    </>
  )
}
