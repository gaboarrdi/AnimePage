import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App'
import { FirstSection } from './components/FirstSection'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <FirstSection />
  </React.StrictMode>
)
