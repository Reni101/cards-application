import { Button } from './components/ui/button'
import { Checkbox } from './components/ui/checkbox'

export function App() {
  return (
    <>
      <div style={{ margin: 20 }}>
        <Button>Sign In</Button>
        <Checkbox label={'Remember me'} />
      </div>
    </>
  )
}
