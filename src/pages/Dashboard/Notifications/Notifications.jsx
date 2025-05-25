import React from 'react'
import { BellRing, AlertCircle, Info, Mail } from 'lucide-react';

const Notifications = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-3xl font-bold flex items-center gap-2"><BellRing /> Notifications</h2>
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-md">
          <p className="text-lg font-semibold flex items-center gap-2 text-blue-400"><AlertCircle /> New Security Alert</p>
          <p className="text-sm">Unusual login detected from a new device.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md">
          <p className="text-lg font-semibold flex items-center gap-2 text-green-400"><Info /> Feature Update</p>
          <p className="text-sm">Dashboard now supports real-time charts.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md">
          <p className="text-lg font-semibold flex items-center gap-2 text-yellow-400"><Mail /> Message Reminder</p>
          <p className="text-sm">You have 2 unread messages.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Notifications