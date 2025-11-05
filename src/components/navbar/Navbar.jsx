'use client'
import React from 'react'
import logo from '../../../public/assets/images/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full h-18 fixed flex flex-row top-0 left-0 z-50 bg-[#ffffff36]">
      <div className='w-full pl-4 pt-4'>
        <Image src={logo} alt="logo-navbar" className="w-24">
        </Image>
      </div>
      <div>
        <svg className='size-72 pr-4' viewBox="0 0 428 425" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M373 27H409" stroke="#D1A121" strokeWidth="5.19678" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M373 41.6699H409" stroke="#D1A121" strokeWidth="5.19678" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M373 56.3403H409" stroke="#D1A121" strokeWidth="5.19678" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default Navbar