import React from 'react'
import Header from './Header'

type TLayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <main>
      <Header />
      <article className="container py-4">{children}</article>
    </main>
  )
}

export default Layout
