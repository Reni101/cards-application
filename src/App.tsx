import { Button } from './components/ui/button'

export function App() {
  return (
    <>
      <div style={{ margin: 20 }}>
        <Button>Button primary</Button>
        <Button variant={'secondary'}>Button secondary</Button>
        <Button variant={'tertiary'}>Tertiary</Button>
        <Button as="a" variant={'link'} href={'/'}>
          Link-button
        </Button>
        <button>aaaa</button>
      </div>
    </>
  )
}
