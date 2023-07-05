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
  return (
    <>
      <form>
        <div className={s.container}>
          <div className={`${s.checkbox_wrapper}  ${props.disabled ? s.disabled : ''} `}>
            <CheckboxRadix.Root className={s.root} id="c1" {...props}>
              <CheckboxRadix.Indicator className={s.indicator}>
                <Checked />
              </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
          </div>
          <label className={`${s.label}  ${props.disabled ? s.disabled : ''} `} htmlFor="c1">
            {props.label}
          </label>
        </div>
      </form>
    </>
  )
}
