import { Settings } from 'lucide-react'
import React from 'react'

export default function Dash_header() {
  return (
    <div className='flex items-center justify-between mb-6'>
        <h4 className='mb-0 text-[24px] font-bold leading-9 capitalize'>Dashboard</h4>
        <div className="flex items-center cursor-pointer transition-all duration-300 ease-in-out gap-1 justify-center py-2 px-6 rounded-sm border hover:bg-primary transition-all duration-500 ease-in-out hover:text-white border-slate-2 text-[#1E5EFF]">
            <Settings className='w-8 h-8' />
            <span className='font-normal text-[16px] leading-6'>Mange</span>
        </div>
    </div>
  )
}
