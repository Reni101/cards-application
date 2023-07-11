import { useState } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type PropsType = {
  min: number
  max: number
  defaultValue: number[]
  callback?: (value: number[]) => void
  className?: string
}

export const Slider = (props: PropsType) => {
  const { className = '' } = props
  const [value, setValue] = useState([props.defaultValue[0], props.defaultValue[1]])

  const onValueChangeHandler = (value: number[]) => {
    setValue(value)
  }
  const onValueCommitHandler = (value: number[]) => {
    props.callback && props.callback(value)
  }

  return (
    <div className={`${s.container} ${className}`}>
      <div className={s.value}>{value[0]}</div>
      <SliderRadix.Root
        onValueChange={onValueChangeHandler}
        onValueCommit={onValueCommitHandler}
        className={s.root}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      >
        <SliderRadix.Track className={s.track}>
          <SliderRadix.Range className={s.range} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.thumb} />
        <SliderRadix.Thumb className={s.thumb} />
      </SliderRadix.Root>

      <div className={s.value}>{value[1]}</div>
    </div>
  )
}
