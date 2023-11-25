import React from 'react'
import FilterComponent from './FilterComponent'
import {scrollData} from '../utils'
import Card from './Card'
import { TfiLocationPin } from "react-icons/tfi";
import { MdModeEditOutline } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";

function MainPage() {
  return (
    <div className='lg:max-w-[1296px] w-full mx-auto flex flex-col gap-7 items-center mt-8'>
        <div className='w-full'>
            <FilterComponent/>
        </div>
        <div className='w-full flex items-start gap-[6.59rem]'>
            <div className='md:w-[70%] w-full max-sm:bg-[#F1F3F5] flex flex-col gap-4'>
            {
                scrollData.map((item) => {
                    return (
                        <Card key={item.id} data={item}/>
                    )
                })
            }
            </div>
            <div className='hidden lg:flex w-[20%]  flex-col gap-8'>
                <div className='w-full flex items-center justify-between border-b pb-2.5 border-[#B8B8B8]'>
                    <div className='flex items-center gap-1'>
                        <TfiLocationPin className='text-lg'/>
                        <p className='text-sm'>Noida, India</p>
                    </div>
                    <MdModeEditOutline className='text-lg'/>
                </div>
                <div className='flex items-start gap-3 text-[#808080]'>
                    <CiCircleInfo/>
                    <p className='w-[13.75rem] text-xs'>Your location will help us serve better and extend a personalised experience.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPage