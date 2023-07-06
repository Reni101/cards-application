import { ChangeEvent, FC, useState } from 'react'

import ClearText from '../../../assets/icons/clearText.tsx'
import Search from '../../../assets/icons/search.tsx'
import ShowPass from '../../../assets/icons/showPass.tsx'
import UnShowPass from '../../../assets/icons/unShowPass.tsx'

import s from './text-field.module.scss'

type InputType = 'text' | 'password' | 'search'
type TextFieldPropsType = {
  value?: string
  label?: string
  type?: InputType
  onSetValue?: (value: string) => void
  disabled?: boolean
  errorMessage?: string
}

export const TextField: FC<TextFieldPropsType> = props => {
  const { type = 'text', label, value, onSetValue, disabled, errorMessage } = props

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

  const iconLeft = isSearch ? <Search /> : null
  const showIconRight = (
    isPass: boolean,
    isShowPass: boolean,
    isSearch: boolean,
    value: string = ''
  ) => {
    if (isPass) {
      return isShowPass ? <ShowPass onClick={onShowPass} /> : <UnShowPass onClick={onShowPass} />
    }
    if (isSearch && value) {
      return <ClearText onClick={onClearInputText} />
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
      <div className={`${s.inputWrapper} ${disabled ? s.disabled : ''}`}>
        <input
          className={`${isSearch ? s.input + ' ' + s.isSearchIcon : s.input} ${
            errorMessage! ? s.input + ' ' + s.error : ''
          }`}
          id="1"
          type={isPass && isShowPass ? 'text' : type}
          placeholder="text"
          value={value}
          onChange={onChangeHandler}
          disabled={disabled}
        />
        <div className={s.inputIconLeft}>{iconLeft}</div>
        <div className={s.inputIconRight}>{showIconRight(isPass, isShowPass, isSearch, value)}</div>
      </div>
      {errorMessage && <div className={s.errorMessage}>{errorMessage}</div>}
    </div>
  )
}
