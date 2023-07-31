import * as Dialog from '@radix-ui/react-dialog'

import ClearText from '../../../../assets/icons/clearText'
import { Typography } from '../../typography'

import s from './modal-title.module.scss'

type PropsType = {
  title: string
}
export const ModalTitle = ({ title }: PropsType) => {
  return (
    <Dialog.Title asChild>
      <div className={s.titleContainer}>
        <Typography variant="h2" as="h2">
          {title}
        </Typography>
        <Dialog.Close className={s.iconClose}>
          <ClearText />
        </Dialog.Close>
      </div>
    </Dialog.Title>
  )
}
