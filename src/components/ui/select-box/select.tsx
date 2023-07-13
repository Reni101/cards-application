import { forwardRef, useState } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import ArrowDown from '../../../assets/icons/arrowDown'

import s from './select.module.scss'

type PropsType = {
  options?: { key: string; value: string }[]
}

export const Select = (props: PropsType) => {
  const [value, setValue] = useState('apple')

  return (
    <SelectRadix.Root
      disabled={false}
      defaultValue={'banana'}
      value={value}
      onValueChange={value => {
        setValue(value)
      }}
    >
      <SelectRadix.Trigger className={s.SelectTrigger}>
        <SelectRadix.Value />
        <SelectRadix.Icon className={s.SelectIcon}>
          <ArrowDown />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      {/*<SelectRadix.Portal>*/}
      <SelectRadix.Content position="popper" sideOffset={0} className={s.SelectContent}>
        {/*<SelectRadix.ScrollUpButton className={s.SelectScrollButton}>*/}
        {/*  <Checked />*/}
        {/*</SelectRadix.ScrollUpButton>*/}
        <SelectRadix.Viewport className={s.SelectViewport}>
          <SelectRadix.Group>
            <SelectRadix.Label className={s.SelectLabel} />
            <SelectItem value="apple">Select-box1</SelectItem>
            <SelectItem value="banana">Select-box2</SelectItem>
          </SelectRadix.Group>

          {/*<SelectRadix.Separator className={s.SelectSeparator} />*/}
        </SelectRadix.Viewport>
        {/*<Select.ScrollDownButton className="SelectScrollButton">*/}
        {/*  <ChevronDownIcon />*/}
        {/*</Select.ScrollDownButton>*/}
      </SelectRadix.Content>
      {/*</SelectRadix.Portal>*/}
    </SelectRadix.Root>
  )
}

const SelectItem = forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <SelectRadix.Item className={`${s.SelectItem} ${className}`} {...props} ref={forwardedRef}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      {/*<SelectRadix.ItemIndicator className={s.SelectItemIndicator}>*/}
      {/*  <ArrowDown />*/}
      {/*</SelectRadix.ItemIndicator>*/}
    </SelectRadix.Item>
  )
})
