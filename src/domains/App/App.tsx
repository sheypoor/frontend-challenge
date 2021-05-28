import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useApp } from './App.biz'
import { AppProvider } from './App.context'
import AppRoutes from './AppRoutes'

const App: FC = () => {
  const { contextValue: value } = useApp()

  return (
    <AppProvider {...{ value }}>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </AppProvider>
  )
}

export default App
