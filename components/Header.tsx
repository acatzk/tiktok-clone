import React from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-1.5 px-3 border-b border-[#D3DEDE] bg-white z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Main Logo */}
        <Link href="/">
          <a className="relative w-[115px] h-12">
            <Image
              src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
              layout="fill"
              alt="logo"
            />
          </a>
        </Link>

        {/* Search */}
        <div
          className="hidden relative w-1/3 overflow-hidden md:flex items-center rounded-full 
                   bg-[#F1F1F2] border border-transparent group focus-within:border-[#C5C6C9] 
                     transition ease-in-out duration-75">
          <input
            type="text"
            placeholder="Search accounts and videos"
            className="group text-sm flex-grow py-3 pl-4 mr-11 rounded-full font-normal 
            placeholder-gray-500 text-black bg-[#F1F1F2] focus:outline-none"
          />
          <span className="absolute h-8 w-6 bg-[#dfdfe2] right-[21px]"></span>
          <button className="absolute inset-y-0 right-0 px-3 bg-[#F1F1F2] hover:bg-[#EAEAEB] focus:outline-none">
            <FiSearch className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Options */}
        <div className="flex items-center space-x-4">
          <a href="#" className="no-underline hover:underline font-semibold text-base">
            Upload
          </a>
          <button
            className="px-8 py-2 text-sm font-bold rounded bg-[#fe2c55] hover:bg-[#EF2950] 
          active:bg-[#DF274B] text-white transition ease-in-out duration-150">
            Log in
          </button>
          <div className="dropdown dropdown-hover dropdown-end">
            <button>
              <CgMoreVerticalAlt className="w-6 h-6" />
            </button>
            <ul className="text-sm py-2 rounded shadow-lg menu dropdown-content bg-white w-52">
              <li className="hover:bg-gray-50">
                <a className="active:bg-none font-medium">English</a>
              </li>
              <li className="hover:bg-gray-50">
                <a className="active:bg-none font-medium">Feedback and Help</a>
              </li>
              <li className="hover:bg-gray-50">
                <a className="active:bg-none font-medium">Keyboard Shortcuts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
