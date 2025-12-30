import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <>
    <Header />
    <div className='flex'>
      <Sidebar />
      <div className="flex pl-10 pt-6 flex-1 flex-col gap-5">
      <Outlet />
      </div>
    </div>
    </>
  )
}
