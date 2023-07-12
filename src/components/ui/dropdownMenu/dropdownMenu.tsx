import { ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropdownMenu.module.scss'

type PropsType = {
  children: ReactNode
  options: ReactNode[]
  className?: string
}
export const DropdownMenu = (props: PropsType) => {
  const { className = '', options, children } = props

  const menuForRender = options.map((el, index) => (
    <div key={index}>
      <DropdownMenuRadix.Item className={s.item}>{el}</DropdownMenuRadix.Item>
      {index !== options.length - 1 && <DropdownMenuRadix.Separator className={s.separator} />}
    </div>
  ))

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button className={s.trigger} aria-label="Customise options">
          {children}
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={`${s.content_container} ${className}`}>
          {menuForRender}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
