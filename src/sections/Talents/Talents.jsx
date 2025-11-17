import LinesTalents from '@/assets/svg/LinesTalents'
import React from 'react'

const Talents = () => {
  return (
    <div className='w-full h-screen bg-black flex flex-col items-center justify-center text-white p-8 text-center relative'>
      <LinesTalents estilos={'w-1/3 z-0 h-auto absolute left-0 bottom-0'}></LinesTalents>
      <LinesTalents estilos={'w-1/3 z-0 h-auto absolute right-0 top-0 rotate-180'}></LinesTalents>
        <h4 className='text-4xl'>Conoce a nuestros <span className='text-purpura'>talentos</span> detras de cada <br/>uno de nuestros proyectos</h4>
        <a className='hover:bg-oro hover:text-black bg-black border-2 border-oro p-2 w-1/3 rounded-md text-oro font-medium uppercase mt-12 duration-200 z-10'>Nuestro equipo</a>
    </div>
  )
}

export default Talents