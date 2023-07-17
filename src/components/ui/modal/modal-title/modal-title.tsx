import * as Dialog from '@radix-ui/react-dialog'

import ClearText from '../../../../assets/icons/clearText.tsx'
import { Typography } from '../../typography'

import s from './modal-title.module.scss'

type PropsType = {
  title: string
  className: string
}
export const ModalTitle = (props: PropsType) => {
  const { title, className } = props
  const styles = `${className ? `${s.buttonContainer} ${className}` : s.buttonContainer}`

  return (
    <Dialog.Title asChild>
      <div className={styles}>
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
