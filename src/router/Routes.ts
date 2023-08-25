import React from 'react'
import type { RouteObject } from 'react-router'
import Home from '~~pages/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    exact: true,
  },
]

export default routes
