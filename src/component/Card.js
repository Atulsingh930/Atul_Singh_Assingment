import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

function Card({data}) {                                         
    const {image=null, type, typeName, heading, userImage, userName, view, place=null, date=null, description, companyName } = data
  return (
    <div className='lg:w-[43rem] bg-white max-h-[29.5rem] w-full flex flex-col gap-5 border border-[#E0E0E0] rounded-sm  max-sm:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.12)]'>     
    {
            (type === 'article' || type === 'education') && (<img className='w-full' src={image} alt="" />)
        }
        <div className="w-full flex flex-col items-start gap-3 px-5">
            <div className=' w-full flex flex-col gap-2.5'>
                <p className='text-lg font-medium'>{typeName}</p>
                <p className='text-[1.325rem] font-semibold'>{heading}</p>
            {
                type === 'article' || type === 'education' ? (<p className='w-full text-ellipsis whitespace-nowrap overflow-hidden text-[1.185rem] text-[#5C5C5C]'>{description}</p>) : 
                (
                    <div className='w-full flex flex-col items-start gap-4'>
                        <div className='flex items-center gap-10'>
                            <div className='flex gap-1 items-center font-medium text-black'>
                                {
                                    type === 'job' ? (
                                        <>
                                            <MdWorkOutline/>
                                            <p>{companyName}</p>
                                        </>
                                    ) : (
                                        <>
                                            <FaCalendar/>
                                            <p>{date}</p>
                                        </>
                                    )
                                }
                            </div>
                            <div className='flex gap-1 items-center font-medium text-black'>
                                <TfiLocationPin/>
                                <p>{place}</p>
                            </div>
                        </div>
                        <button className={`w-full border text-[0.8125rem] ${type === 'job' ? 'text-[#02B875]' : 'text-[#E56135]'} font-semibold border-[#A9AEB8] rounded-lg py-2`}>
                            {type === 'job' ? 'Apply on Timesjobs' : 'Visit Website'}
                        </button>
                    </div>
                )
            }
            </div>
        </div>
        <div className='flex justify-between items-center px-5 pb-5 object-cover'>
            <div className='flex  items-center gap-2.5 object-cover'>
                <img className='' src={userImage} alt="" />
                <p className='text-lg font-semibold'>{userName}</p>
            </div>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2 font-semibold text-sm text-[#525252]'>
                    <MdOutlineRemoveRedEye className='text-lg font'/>
                    <p>{view}</p>
                </div>
                <div className='px-3 py-2 bg-[#EDEEF0]'>
                    <BsShareFill className='text-lg text-[#2D2D2D]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card