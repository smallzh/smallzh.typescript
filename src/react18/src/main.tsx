import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { App } from './App'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

const RootApp: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)

const root = document.getElementById('root')!
createRoot(root).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
)
