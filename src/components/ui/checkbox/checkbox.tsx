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
  const disabledClass = `${props.disabled ? s.disabled : ''}`

  return (
    <>
      <form>
        <div className={s.container}>
          <CheckboxRadix.Root className={s.root} id="c1" {...props}>
            <div className={`${s.checkbox} ${disabledClass}`}>
              <CheckboxRadix.Indicator className={s.indicator}>
                <Checked />
              </CheckboxRadix.Indicator>
            </div>
          </CheckboxRadix.Root>
          <label className={`${s.label}  ${disabledClass}`} htmlFor="c1">
            {props.label}
          </label>
        </div>
      </form>
    </>
  )
}
