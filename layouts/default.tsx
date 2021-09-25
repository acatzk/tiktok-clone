import React from 'react'
import Head from 'next/head'
import Header from 'components/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="text-black h-[8000px]">
      <Head>
        <title>Tiktok - Make Your Day</title>
      </Head>

      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
