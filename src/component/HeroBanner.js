import React from 'react'
import heroBanner from '../assets/HeroBanner.svg'
function HeroBanner() {
  return (
    <div className='w-full relative img-gradient object-cover'>
        <img className='w-full lg:h-[27.5rem] h-[14.6rem] overflow-x-hidden object-cover' src={heroBanner} alt="" />
        <div className='absolute lg:bottom-24 lg:left-40 left-8 bottom-8 flex flex-col text-white gap-1 items-start z-10'>
            <p className='font-bold lg:text-4xl text-[1.1612rem] -tracking-tight'>Computer Engineering</p>
            <p className='lg:text-lg text-xs'>142,765 Computer Engineers follow this</p>
        </div>
    </div>
  )
}

export default HeroBanner