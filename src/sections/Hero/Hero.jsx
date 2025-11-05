import Image from 'next/image'
import React from 'react'
import background from '../../../public/assets/images/background-hero.png'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <Image className='h-full w-auto absolute object-cover object-center' src={background}></Image>
    </div>
  )
}

export default Hero