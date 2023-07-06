import { useState } from 'react'

import { LogOut } from './assets/icons/logOut'
import { Button } from './components/ui/button'
import { TextField } from './components/ui/text-field'

export function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <div style={{ margin: 20 }}>
        <Button variant={'secondary'}>
          <LogOut /> Primary
        </Button>
        <TextField
          value={value}
          onSetValue={setValue}
          disabled={false}
          type="search"
          label="Input"
        />
      </div>
    </>
  )
}
