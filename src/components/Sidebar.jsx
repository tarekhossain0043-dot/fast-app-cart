import { Home } from 'lucide-react'
import React, { useState } from 'react'
import { nav_menu_data } from '../assets/assets'

export default function Sidebar() {
  const [isActive,setIsActive] = useState(nav_menu_data[0].label);
  const handleMenuActive = (menu) => {
    setIsActive(menu);
  }
  return (
    <div className='max-w-62.5 w-full bg-primary p-4 border-r text-white'>
      {nav_menu_data.map((menu,index) =>(
      <button key={index} onClick={() => handleMenuActive(menu.label)} className={`p-3 flex items-center transition-all duration-500 ease-in-out rounded-sm cursor-pointer w-full gap-4 text-[14px] font-normal leading-5 capitalize cursor-pointer ${isActive === menu.label ? 'bg-white text-[#5A607F]' : 'text-white'} hover:bg-slate-100 hover:text-[#5A607F]`}>
        <menu.icon className='w-5 h-5' />
        <div className="flex items-center justify-between w-full">
        <span>{menu.label}</span>
        {menu.orderNum && (
          <span className='px-3 py-1 bg-[#131523] text-white text-[12px] font-bold leading-4 rounded-full'>{menu.orderNum}</span>
        )}
        </div>
      </button>
      ))}
    </div>
  )
}
