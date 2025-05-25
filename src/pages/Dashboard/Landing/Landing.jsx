import React from 'react'

const Landing = () => {
  return (
    <div>
         <div className="space-y-6">
      <section className="bg-gray-900 text-gray-300  rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold mb-2">Welcome to dashraboard</h2>
        <p className="text-gray-300">
          This is your main dashboard. Here you can quickly view recent activities, stats, and shortcuts to important tools.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900  rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold text-gray-300">Users</h3>
          <p className="text-3xl font-bold text-sky-600 mt-2">1,254</p>
          <p className="text-sm text-gray-500">+24 today</p>
        </div>
        <div className="bg-gray-900  rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold text-gray-300">Messages</h3>
          <p className="text-3xl font-bold text-sky-600 mt-2">342</p>
          <p className="text-sm text-gray-500">5 new</p>
        </div>
        <div className="bg-gray-900  rounded-xl shadow p-4">
          <h3 className="text-xl font-semibold text-gray-300">Tasks Completed</h3>
          <p className="text-3xl font-bold text-sky-600 mt-2">87%</p>
          <p className="text-sm text-gray-500">Weekly Progress</p>
        </div>
      </section>
      <section className="bg-gray-900  rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-300">Quick Links</h3>
        <ul className="space-y-2 text-sky-700 font-medium">
          <li><a href="#" className="hover:underline"> Go to Reports</a></li>
          <li><a href="#" className="hover:underline"> View All Messages</a></li>
          <li><a href="#" className="hover:underline"> Manage Users</a></li>
          <li><a href="#" className="hover:underline"> Update Profile</a></li>
        </ul>
      </section>
      <section className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-300">About This Dashboard</h3>
        <p className="text-gray-500 leading-relaxed">
          This dashboard is built using React and Tailwind CSS. It offers a modern, responsive interface for managing
          users, analyzing data, handling messages, and customizing user settings.
        </p>
      </section>
    </div>
    </div>
  )
}

export default Landing