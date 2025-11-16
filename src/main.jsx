import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlogsPage } from './pages/BlogsPage.jsx'
import BlogDetailsPage from './pages/BlogDetailsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App/>
  </StrictMode>,
)
