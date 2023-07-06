import s from './App.module.scss'
import { DropdownMenu } from './components/ui/dropdownMenu'
import { Header } from './components/ui/header'

export function App() {
  return (
    <div className={s.container}>
      <Header />
      <DropdownMenu options={['aaaaa', 'bbbbaaaaaaaaa']}>
        <div style={{ color: 'red' }}>Trigger</div>
      </DropdownMenu>
    </div>
  )
}
