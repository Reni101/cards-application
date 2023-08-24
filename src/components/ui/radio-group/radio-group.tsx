import { FC } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import { Typography } from '../typography'

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
    <RadioGroupRadix.Root className={s.root} disabled={disabled} {...rest}>
      {options.map(option => (
        <div key={option.id} className={s.radio_container}>
          <RadioGroupRadix.Item className={s.item} value={option.value} id={option.id}>
            <RadioGroupRadix.Indicator className={`${s.indicator} ${disabledStyle}`} />
          </RadioGroupRadix.Item>
          <Typography
            as={'label'}
            variant={'body2'}
            className={`${s.label} ${disabledStyle}`}
            htmlFor={option.id}
          >
            {option.label}
          </Typography>
        </div>
      ))}
    </RadioGroupRadix.Root>
  )
}
