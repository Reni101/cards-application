import { Button } from './components/ui/button'

export function App() {
  return (
    <>
      Hello
      <Button variant="secondary" as="a" href={'https://www.google.com/'}>
        hi
      </Button>
      <Button>hi</Button>
    </>
  )
}
