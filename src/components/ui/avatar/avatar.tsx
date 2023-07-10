import * as AvatarRadix from '@radix-ui/react-avatar'

import { nameTrimming } from '../../../common/utils/nameTrimming'

import s from './avatar.module.scss'
type PropsType = {
  src?: string
  size?: 'large' | 'small'
  fallback: string
}

export const Avatar = (props: PropsType) => {
  const { size = 'small' } = props
  const isSmall = size === 'small'

  return (
    <>
      <AvatarRadix.Root className={`${s.avatar_root} ${isSmall && s.avatar_small}`}>
        <AvatarRadix.Image src={props.src} className={s.avatar_img} />
        <AvatarRadix.Fallback>{nameTrimming(props.fallback)}</AvatarRadix.Fallback>
      </AvatarRadix.Root>
    </>
  )
}
