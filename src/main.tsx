import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './styles/index.scss'
import { Router } from './router'
import { store } from './services/store'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
