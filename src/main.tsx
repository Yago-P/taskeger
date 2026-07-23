import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home/HomePage.tsx'
import LoginPage from './pages/Login/LoginPage.tsx'
import SignUpPage from './pages/SignUp/SignUpPage.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='sign-up' element={<SignUpPage />} />
        
        

      </Routes>


    </BrowserRouter>
  </StrictMode>
  
)
