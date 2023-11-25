import React from 'react'
import whole from '../assets/whole.svg'
import { IoIosSearch } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdPersonAdd } from "react-icons/io";

function Navbar({setLoggedIn}) {

  const handleLogin = ()=>{
    setLoggedIn(true)
    console.log('first')
  }
  
  return (
    <div className='w-full lg:h-[4.5rem] flex lg:px-[4.5rem] p-4 items-center justify-between bg-richblack-5'>
        <img className='max-sm:h-3' src={whole} alt=""/>
        <div className='lg:w-[22.5rem] lg:py-3 py-2 pl-[2.5rem] px-4 relative bg-[#F2F2F2] rounded-3xl'>
            <IoIosSearch className='absolute lg:top-3.5 top-2.5 left-4 text-xl font-bold'/>
            <input type="text" className='w-full bg-transparent outline-none' placeholder='Search for your favorite groups in ATG' />
        </div>
        <div className='max-sm:hidden flex items-center'>
            <p className='text-[#2E2E2E] font-medium'>Create account. <span onClick={handleLogin} className='text-[#2F6CE5] font-bold cursor-pointer'>It’s free!</span></p>
            <TiArrowSortedDown/>
        </div>
        <div onClick={handleLogin} className='sm:hidden rounded-full text-center bg-[#EDEEF0] p-1 text-lg'>
          <IoMdPersonAdd size={20}/>
        </div>
    </div>
  )
}

export default Navbar