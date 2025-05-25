import React from 'react'
import { CheckCircle, Clock, ClipboardCheck } from 'lucide-react';

const Tasks = () => {
  return (
    <div>
       <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold flex items-center gap-2 mb-6"><ClipboardCheck /> Task Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-800/60 p-5 rounded-lg border border-green-400">
          <p className="text-xl font-semibold flex items-center gap-2 text-green-300"><CheckCircle /> Finish Dashboard UI</p>
          <p className="text-sm text-green-200 mt-1">Completed successfully on May 20</p>
        </div>
        <div className="bg-yellow-800/60 p-5 rounded-lg border border-yellow-400">
          <p className="text-xl font-semibold flex items-center gap-2 text-yellow-300"><Clock /> API Integration</p>
          <p className="text-sm text-yellow-100 mt-1">In progress – due in 2 days</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tasks