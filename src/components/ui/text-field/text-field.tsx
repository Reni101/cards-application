import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

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
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  (props: TextFieldPropsType, ref) => {
    const {
      type = 'text',
      label,
      value,
      onSetValue,
      disabled,
      errorMessage,
      className = '',
      ...rest
    } = props
    const inputId = useId()

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

    const stylesInput = {
      input: isSearch ? s.input + ' ' + s.isSearchIcon : s.input,
      error: errorMessage! ? s.input + ' ' + s.error : '',
    }

    return (
      <div className={`${s.wrapper} ${className}`}>
        {label && (
          <label htmlFor={inputId} className={s.label}>
            {label}
          </label>
        )}
        <div className={`${s.inputWrapper} ${disabled ? s.disabled : ''}`}>
          <input
            className={`${stylesInput.input} ${stylesInput.error}`}
            id={inputId}
            type={isPass && isShowPass ? 'text' : type}
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
          <div className={s.inputIconLeft}>{iconLeft}</div>
          <div className={s.inputIconRight}>
            {showIconRight(isPass, isShowPass, isSearch, value)}
          </div>
        </div>
        {errorMessage && <div className={s.errorMessage}>{errorMessage}</div>}
      </div>
    )
  }
)
