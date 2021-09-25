import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-1 px-4 border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="relative w-28 h-12">
          <Image
            src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
            layout="fill"
            alt="logo"
          />
        </div>
        <div>search</div>
        <div>login</div>
      </div>
    </header>
  )
}

export default Header
