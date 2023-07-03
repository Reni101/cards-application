import { LogOut } from './assets/icons/logOut'
import { Button } from './components/ui/button'

export function App() {
  return (
    <>
      <div style={{ margin: 20 }}>
        <Button variant={'secondary'}>
          <LogOut /> Primary
        </Button>
      </div>
    </>
  )
}
