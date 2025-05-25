import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Home, BarChart2, FileText, Users, Settings, Bell, MessageSquare, CheckSquare, User, HelpCircle } from 'lucide-react';


import "./style.css"

const Dashboard = () => {
  const navigate = useNavigate()
  return (

    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white border-r shadow-lg px-4 py-6">
        <h2 className="text-2xl font-bold text-sky-600 mb-6">My Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <NavLink to="" end className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-00 hover:bg-sky-50">
            <Home size={18} /> Landing
          </NavLink>
          <NavLink to="Analytics" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <BarChart2 size={18} /> Analytics
          </NavLink>
          <NavLink to="Reports" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <FileText size={18} /> Reports
          </NavLink>
          <NavLink to="Users" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <Users size={18} /> Users
          </NavLink>
          <NavLink to="Settings" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <Settings size={18} /> Settings
          </NavLink>
          <NavLink to="Notifications" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <Bell size={18} /> Notifications
          </NavLink>
          <NavLink to="Messages" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <MessageSquare size={18} /> Messages
          </NavLink>
          <NavLink to="Tasks" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <CheckSquare size={18} /> Tasks
          </NavLink>
          <NavLink to="Profile" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <User size={18} /> Profile
          </NavLink>
          <NavLink to="Help" className="sidebar-link flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-sky-50">
            <HelpCircle size={18} /> Help
          </NavLink>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow flex items-center justify-between px-6 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Welcome to the Dashboard  <span className='text-blue-400 cursor-pointer' onClick={() => navigate("/")}>go home</span> </h1>

          <div className="text-sm text-gray-500">User: Abubakr</div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard



