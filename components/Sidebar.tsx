import React from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import { Home, Users } from 'utils/Icon'
import Image from 'next/image'
import { HiCheckCircle } from 'react-icons/hi'
import { accounts } from 'mock'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="fixed overflow-y-hidden">
      <Scrollbar damping={0.1} thumbMinSize={20}>
        <div
          className="mt-6 min-h-screen border-r md:border-transparent 
            shadow md:shadow-none w-[70px] md:w-[340px] scrollbar-w-2 scrollbar-thumb-rounded-full 
            scrollbar-thumb-gray-300 scrollbar-track-white scrollbar-hidden divide-y divide-[#F0F0F1] space-y-2">
          <div className="flex flex-col">
            <button className="flex items-center space-x-2 py-2 rounded-md hover:bg-[#F8F8F8] px-4 text-[#FE2C55] transition ease-in-out duration-300">
              <Home className="w-8 h-8 fill-current" />
              <span className="font-semibold text-base">For You</span>
            </button>
            <button className="flex items-center space-x-2 py-2 rounded-md hover:bg-[#F8F8F8] px-4 text-black transition ease-in-out duration-300">
              <Users className="w-8 h-8 fill-current" />
              <span className="font-semibold text-base">Following</span>
            </button>
          </div>
          <div className="pt-4 flex flex-col space-y-4 pb-4">
            <h1 className="text-gray-400 text-sm font-light tracking-wide">
              Log in to follow creators, like videos, and view comments.
            </h1>
            <button className="py-2.5 rounded border border-[#FE2C55] text-[#FE2C55] font-semibold hover:bg-[#FFF3F5] transition ease-in-out duration-300">
              Login
            </button>
          </div>
          <div className="space-y-2">
            <div className="mt-3 flex items-center justify-between">
              <h3 className="font-light text-sm">Suggested accounts</h3>
              <a href="#" className="font-light text-sm text-[#FE2C55]">
                See all
              </a>
            </div>
            <ul className="flex flex-col">
              {accounts.map(({ img, username, name }, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-4 hover:bg-[#F8F8F8] px-4 py-1.5 rounded cursor-pointer transition ease-in-out duration-300">
                  <Image
                    src={img}
                    width={32}
                    height={32}
                    layout="intrinsic"
                    className="rounded-full bg-gray-400"
                    alt="avatar"
                  />
                  <div className="flex flex-col">
                    <div className="inline-flex items-center flex-row space-x-1">
                      <h2 className="text-sm font-semibold">{username}</h2>
                      <HiCheckCircle className="w-4 h-4 text-[#20D5EC]" />
                    </div>
                    <p className="text-xs font-light text-gray-500">{name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Scrollbar>
    </aside>
  )
}

export default Sidebar
