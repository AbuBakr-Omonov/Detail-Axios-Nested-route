import React from 'react'
import { MessageSquare, UserCircle, MailOpen, Send } from 'lucide-react';

const Messages = () => {
  return (
    <div>
      <div className="bg-slate-800 text-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold flex items-center gap-2"><MessageSquare /> Messages</h2>
      <div className="space-y-6 mt-4">
        <div className="p-4 bg-slate-700 rounded-lg">
          <p className="flex gap-2 items-center text-blue-300"><UserCircle /> John Doe</p>
          <p className="text-sm">"Hey, can we meet at 3PM today?"</p>
        </div>
        <div className="p-4 bg-slate-700 rounded-lg">
          <p className="flex gap-2 items-center text-green-300"><MailOpen /> Anna Smith</p>
          <p className="text-sm">"Here's the report from last week."</p>
        </div>
        <div className="p-4 bg-slate-700 rounded-lg">
          <p className="flex gap-2 items-center text-yellow-300"><Send /> New Message Sent</p>
          <p className="text-sm">Your message has been delivered successfully.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Messages