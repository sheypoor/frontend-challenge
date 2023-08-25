import { FC, ReactNode } from 'react'
import Header from '~~components/layout/Header/Header'
import { Stack } from '@mui/material'
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Stack sx={{ mt: '3rem', p: '1rem' }}>{children}</Stack>
    </>
  )
}

export default Layout
