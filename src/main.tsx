import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
//import App from './App.tsx'
import HomePage from './pages/Home/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
