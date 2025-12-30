import { Home } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='max-w-62.5 bg-primary p-4 border-r text-white'>
      <button className='p-3 flex items-center gap-4 text-[14px] font-normal leading-5 text-[#5A607F] capitalize cursor-pointer hover:bg-slate-100'>
        <Home />
        <span>Dashboard</span>
      </button>
    </div>
  )
}
