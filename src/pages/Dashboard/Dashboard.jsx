import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='w-[250px] h-screen bg-sky-300'></div>
      <div className='text-white flex-1 border-8'>
          <Outlet />
      </div>
    </div>
  )
}

export default Dashboard