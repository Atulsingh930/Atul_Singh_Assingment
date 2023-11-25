import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { MdGroupAdd } from "react-icons/md";

function FilterComponent() {

    const data = [
        {
            id: 1,
            name: "All",
            post: 32,
        },
        {
            id: 2,
            name: "Article",
            post: 32,
        },
        {
            id: 3,
            name: "Event",
            post: 32,
        },
        {
            id: 4,
            name: "Education",
            post: 32,
        },
        {
            id: 5,
            name: "Job",
            post: 32,
        },
    ]
    const [filterData, setFilterData] = useState(1)
  return (
    <div className='w-full flex items-center justify-between relative'>
        <div className='absolute hidden lg:visible h-[0.0625rem] w-full bg-[#E0E0E0] bottom-[7.8px] -z-10'>
        </div>
        <div className=' hidden lg:flex items-center justify-center gap-4'>
            {
                data.map((item) => (
                    <div onClick={()=>setFilterData(item.id)} className={`pb-5 ${item.id===filterData && 'border-b-2 border-b-[#000000]'} cursor-pointer`} key={`${item.id}`}>
                        <p className={`${item.id===filterData ? 'text-[#000000]' : 'text-[#8A8A8A]'} `}>{`${item.name}${item.id===filterData ? ` (${item.post})` : ''}`}</p>
                    </div>
                ))
            }
        </div>
        <div className=' hidden lg:flex items-start pb-5 gap-x-5'>
            <div className='px-3 py-2 rounded-lg flex gap-2 items-center bg-[#EDEEF0]'>
                <p className='font-medium'>Write a Post</p>
                <TiArrowSortedDown/>
            </div>
            <div className='px-3 py-2 rounded-lg flex gap-1.5 items-center text-white bg-[#2F6CE5]'>
                <MdGroupAdd />
                <p className='font-medium'>Join Group</p>
            </div>
        </div>
        <div className='lg:hidden w-full flex items-center justify-between p-4'>
            <p className='text-lg font-bold'>Post{`(${data.find((item) => item.id === filterData)?.post})`}</p>
            <select className='bg-[#F1F3F5] outline-none px-2.5 py-2 rounded-lg' value={filterData} onChange={(e) => setFilterData(parseInt(e.target.value))}>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default FilterComponent