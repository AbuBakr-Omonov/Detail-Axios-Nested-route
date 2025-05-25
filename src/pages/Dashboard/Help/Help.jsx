import React from 'react'
import { HelpCircle, BookText, PhoneCall, Info } from 'lucide-react';

const Help = () => {
  return (
    <div>
       <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold flex items-center gap-2 mb-6"><HelpCircle /> Help & Support</h2>
      <div className="space-y-6">
        <div className="border border-purple-500 rounded-lg p-5 bg-slate-800/60">
          <h3 className="text-xl flex items-center gap-2 text-purple-300"><BookText /> How to use the dashboard?</h3>
          <p className="text-sm text-gray-300 mt-1">Navigate through the sidebar and click on sections like Analytics, Reports, etc. to explore.</p>
        </div>
        <div className="border border-blue-500 rounded-lg p-5 bg-slate-800/60">
          <h3 className="text-xl flex items-center gap-2 text-blue-300"><Info /> FAQ</h3>
          <p className="text-sm text-gray-300 mt-1">Most common questions are answered here. Make sure to read before contacting support.</p>
        </div>
        <div className="border border-green-500 rounded-lg p-5 bg-slate-800/60">
          <h3 className="text-xl flex items-center gap-2 text-green-300"><PhoneCall /> Contact Support</h3>
          <p className="text-sm text-gray-300 mt-1">Phone: +998 90 987 65 43 | Email: support@dashboard.uz</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Help