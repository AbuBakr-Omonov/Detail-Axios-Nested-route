import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Home, BarChart2, FileText, Users, Settings, Bell, MessageSquare, CheckSquare, User, HelpCircle } from 'lucide-react';


import "./style.css"

const Dashboard = () => {
  const navigate = useNavigate()
  return (

    <div className="flex min-h-screen bg-gray-700 ">
      <div className="w-64  border-r shadow-lg px-4 py-6 bg-gray-900">
        <h2 className="text-2xl font-bold text-sky-600 mb-6">My Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink to="" end className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <Home size={18} /> Landing
          </NavLink>
          <NavLink to="Analytics" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <BarChart2 size={18} /> Analytics
          </NavLink>
          <NavLink to="Reports" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <FileText size={18} /> Reports
          </NavLink>
          <NavLink to="Users" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <Users size={18} /> Users
          </NavLink>
          <NavLink to="Settings" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <Settings size={18} /> Settings
          </NavLink>
          <NavLink to="Notifications" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <Bell size={18} /> Notifications
          </NavLink>
          <NavLink to="Messages" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <MessageSquare size={18} /> Messages
          </NavLink>
          <NavLink to="Tasks" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <CheckSquare size={18} /> Tasks
          </NavLink>
          <NavLink to="Profile" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <User size={18} /> Profile
          </NavLink>
          <NavLink to="Help" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700">
            <HelpCircle size={18} /> Help
          </NavLink>
           <span className='text-blue-800 cursor-pointer text-[20px]' onClick={() => navigate("/")}>  Back</span>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-gray-900 text-gray-300 shadow flex items-center justify-between px-6 border-b">
          <h1 className="text-xl font-semibold  ">Welcome to the Dashboard  </h1>

          <div className="text-sm ">User: Abu Bakr</div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
    
  )
}

export default Dashboard



