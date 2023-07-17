import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { ModalTitle } from './modal-title'
import s from './modal.module.scss'

type PropsType = {
  children?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  title?: string
  trigger?: ReactNode
}
export const Modal = (props: PropsType) => {
  const { children, onOpenChange, isOpen, trigger, title } = props

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          {title && <ModalTitle title={title} />}
          <div className={s.contentBody}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
