import React from 'react'
import Header from './Header'

type TLayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <main>
      <Header />
      <article className="container">{children}</article>
    </main>
  )
}

export default Layout
