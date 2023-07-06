import { ReactNode } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropdownMenu.module.scss'

type PropsType = {
  children: ReactNode
  options: ReactNode[]
}
export const DropdownMenu = (props: PropsType) => {
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button className={s.trigger} aria-label="Customise options">
          {props.children}
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={s.content_container}>
          {props.options.map((el, index) => (
            <>
              <DropdownMenuRadix.Item className={s.item}>{el}</DropdownMenuRadix.Item>
              {index !== props.options.length - 1 && (
                <DropdownMenuRadix.Separator className={s.separator} />
              )}
            </>
          ))}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
