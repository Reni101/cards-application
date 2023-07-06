import { useState } from 'react'

import s from './App.module.scss'
import { Checkbox } from './components/ui/checkbox'
import { Header } from './components/ui/header'
import { TextField } from './components/ui/text-field'

export function App() {
  const [value, setValue] = useState('')

  return (
    <div className={s.container}>
      <Header />
      <TextField value={value} onSetValue={setValue} disabled={false} type="search" label="Input" />
      <Checkbox disabled={true} label={'Check box'} />
    </div>
  )
}
