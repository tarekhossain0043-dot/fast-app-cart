import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='relative flex-1 pl-5'>
        <form className='relative text-white'>
            <input type="text" name='search' id='search' className='w-full py-2 px-3 pl-10 outline-none focus:ring-1 ring-amber-200 rounded-sm' />
            <label htmlFor="search" className='absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary'>
                <Search className='w-4 h-4' />
            </label>
        </form>
    </div>
  )
}
