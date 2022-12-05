import React from 'react'
import Header from './Header'

type TLayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <main className="py-4">
      <Header />
      <section className="container">{children}</section>
    </main>
  )
}

export default Layout
