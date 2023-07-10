import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'
export const Slider = () => {
  return (
    <>
      <SliderRadix.Root className={s.root}>
        <SliderRadix.Track>
          <SliderRadix.Range />
        </SliderRadix.Track>
        <SliderRadix.Thumb />
      </SliderRadix.Root>
    </>
  )
}
