import { Stack } from '@mui/material'
import Header from '~~components/layout/Header'
type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Stack sx={{ mt: '3rem', p: '1rem' }}>{children}</Stack>
    </>
  )
}

export default Layout
