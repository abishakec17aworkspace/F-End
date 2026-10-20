import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-row h-screen w-full bg-black'>
        <Sidebar/>
        <main className='bg-white text-violet-800 p-4 scale-90 rounded-xl  m-4 w-full h-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
