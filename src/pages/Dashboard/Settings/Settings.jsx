import React from 'react'

const Settings = () => {
  return (
    <div>
      <div className="bg-gray-900 p-6 rounded-2xl shadow-md text-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold">System Settings</h2>
        </div>

        <p className="text-gray-400 mb-6">
          Quyidagi sozlamalar yordamida tizim funksiyalarini boshqarishingiz mumkin. Har bir parametr uchun kerakli qiymatni belgilang.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input type="text"  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"  placeholder="Foydalanuvchi nomi"
             
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email notifications</label>
            <select
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue="enabled"
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Theme</label>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 transition">Light</button>
              <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">Dark</button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings