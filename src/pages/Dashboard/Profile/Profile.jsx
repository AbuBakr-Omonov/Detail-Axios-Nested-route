import React from 'react'
import { UserRound, Mail, Smartphone, MapPin, CalendarCheck2 } from 'lucide-react';

const Profile = () => {
  return (
    <div>
       <div className="bg-gray-950 text-white p-8 rounded-2xl border border-gray-700 shadow-md">
      <h2 className="text-3xl font-bold flex items-center gap-2 mb-6"><UserRound /> User Profile</h2>
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <Mail className="text-sky-400" /> <span>abubakr@example.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Smartphone className="text-green-400" /> <span>+998 90 123 45 67</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="text-yellow-400" /> <span>Tashkent, Uzbekistan</span>
        </div>
        <div className="flex items-center gap-4">
          <CalendarCheck2 className="text-purple-400" /> <span>Member since Jan 2024</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile