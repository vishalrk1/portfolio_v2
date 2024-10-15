import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToasterProvider } from './providers/ToastProvider.tsx'
import Footer from './components/sections/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToasterProvider/>
    <BrowserRouter>
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
