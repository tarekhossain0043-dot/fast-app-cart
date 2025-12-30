import { ChevronDown } from 'lucide-react'
import React from 'react'
import { CiChat1 } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function UsersDetails() {
  return (
    <div className='pl-5 flex items-center gap-5'>
        <CiChat1 className='w-6 h-6 text-white'/>
        <p className='mb-0 relative'>
            <IoMdNotificationsOutline className='w-6 h-6 text-white' />
            <span className='absolute -top-4 right-0     w-5 h-5 rounded-full bg-[#1E5EFF] text-sm font-bold text-white flex items-center justify-center p-3 shadow-sm shadow-amber-200'>0</span>
        </p>
        <div className="flex items-center gap-3">
            <span className='w-10 h-10 bg-[#1FD286] flex items-center justify-center text-2xl uppercase rounded-full text-white font-bold'>r</span>
            <div className="flex items-center gap-4 group relative">
                <p className='mb-0 text-[14px] leading-5 text-white font-medium capitalize tracking-wide'>Randhir kumar</p>
                <ChevronDown className='w-6 h-6 text-white group-hover:rotate-180 group-hover:text-primary transition-all duration-500 ease-in-out' />
                <div className="absolute p-2.5 hidden group-hover:flex flex-col gap-2 top-full right-0 max-w-62.5 w-full bg-slate-100 shadow-sm rounded-sm cursor-pointer">
                    <Link className='py-1 px-2 transition-all duration-300 ease-in-out hover:pl-3 hover:text-primary text-slate-500'>User profile</Link>
                    <Link className='py-1 px-2 transition-all duration-300 ease-in-out hover:pl-3 hover:text-primary text-slate-500'>settings</Link>
                    <Link className='py-1 px-2 transition-all duration-300 ease-in-out hover:pl-3 hover:text-primary text-slate-500'>Logout</Link>
                </div>
            </div>
        </div>

    </div>
  )
}
