import { Provider } from 'react-redux'

import s from './App.module.scss'
import { Header } from './components/ui/header'
import { RadioGroup } from './components/ui/radio-group'
import { Router } from './router'
import { store } from './services/store'

export function App() {
  const options = [
    { label: 'RadioGroup', value: 'default', id: '1' },
    { label: 'RadioGroup', value: 'active', id: '2' },
    { label: 'RadioGroup', value: 'hover', id: '3' },
  ]

  return (
    <Provider store={store}>
      <Header />
      <div className={s.container}>
        <Router />

        <RadioGroup options={options} />
      </div>
    </Provider>
  )
}
