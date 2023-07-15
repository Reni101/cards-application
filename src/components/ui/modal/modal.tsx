import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import ClearText from '../../../assets/icons/clearText.tsx'
import { Button } from '../button'
import { Typography } from '../typography'

import s from './modal.module.scss'

type PropsType = {
  children?: ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  title?: string
  btnName?: string
  isShowBtn?: boolean
  trigger?: ReactNode
}
export const Modal = (props: PropsType) => {
  const { children, onOpenChange, isOpen, trigger, title, btnName, isShowBtn } = props

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          {title && (
            <Dialog.Title className={s.titleContainer}>
              <Typography variant="h2" as="h2">
                {title}
              </Typography>
              <Dialog.Close className={s.iconClose}>
                <ClearText />
              </Dialog.Close>
            </Dialog.Title>
          )}
          <div className={s.contentBody}>{children}</div>
          {isShowBtn && (
            <div className={s.buttonContainer}>
              <Dialog.Close>
                <Button variant="secondary" fullWidth={true}>
                  Close
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button variant="primary" fullWidth={true}>
                  {btnName}
                </Button>
              </Dialog.Close>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
