import React from 'react'
import logo from '../../../public/assets/images/logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full h-24 fixed top-0 left-0 z-50 bg-transparent">
        <div className='w-full'>
            <Image src={logo} alt="Abi Rached Studios Logo" className="w-24">
            </Image>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar