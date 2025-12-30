import React from 'react'
import SearchBar from './SearchBar'
import UsersDetails from './UsersDetails'

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-header-bg py-2.5 px-5  '>
        <div>
            <img src='./logo.png' alt="logo" />
        </div>
        <SearchBar />
        <div className='hidden md:block'>

        <UsersDetails />
        </div>
    </div>
  )
}
