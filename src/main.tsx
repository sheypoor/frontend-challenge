import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, styled } from '@mui/material/styles'
import { theme } from '~~/config/theme'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
