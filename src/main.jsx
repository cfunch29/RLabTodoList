import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todos from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todos />
  </StrictMode>,
)
