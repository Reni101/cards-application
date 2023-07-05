import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, FC, useState } from 'react'

import ClearTextIcon from '../../../assets/icons/clearTextIcon.tsx'
import SearchIcon from '../../../assets/icons/searchIcon.tsx'
import ShowPassIcon from '../../../assets/icons/showPassIcon.tsx'
import UnShowPassIcon from '../../../assets/icons/unShowPassIcon.tsx'

import s from './text-field.module.scss'

type InputType = 'text' | 'password' | 'search'
type TextFieldPropsType = {
  value?: string
  label?: string
  type?: InputType
  onClearText?: () => void
  onSetValue?: (value: string) => void
}

export const TextField: FC<
  TextFieldPropsType & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldPropsType>
> = props => {
  const { type = 'text', label, value, onClearText, onChange, onSetValue } = props

  const [isShowPass, setIsShowPass] = useState(false)

  const isSearch = type === 'search'
  const isPass = type === 'password'

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onSetValue && onSetValue(e.currentTarget.value)
  }
  const onClearInputText = () => {
    onSetValue && onSetValue('')
  }
  const onShowPass = () => {
    setIsShowPass(!isShowPass)
  }

  const iconLeft = isSearch ? <SearchIcon /> : null
  const showIconRight = (
    isPass: boolean,
    isShowPass: boolean,
    isSearch: boolean,
    value: string = ''
  ) => {
    if (isPass) {
      return isShowPass ? (
        <ShowPassIcon onClick={onShowPass} />
      ) : (
        <UnShowPassIcon onClick={onShowPass} />
      )
    }
    if (isSearch && value) {
      return <ClearTextIcon onClick={onClearInputText} />
    }

    return null
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <label htmlFor="1" className={s.label}>
          {label}
        </label>
      )}
      <div className={s.inputWrapper}>
        <input
          className={isSearch ? `${s.input} ${s.isSearchIcon}` : s.input}
          id="1"
          type={isPass && isShowPass ? 'text' : type}
          placeholder="text"
          value={value}
          onChange={onChangeHandler}
        />
        <div className={s.inputIconLeft}>{iconLeft}</div>
        <div className={s.inputIconRight}>{showIconRight(isPass, isShowPass, isSearch, value)}</div>
      </div>
    </div>
  )
}
