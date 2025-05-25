import React from 'react'
const Users = () => {
  return (
    

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-800 rounded-xl overflow-hidden">
          <thead className="bg-gray-600 text-gray-300 border-gray-700">
            <tr>
              <th className="text-left py-3 px-4">#</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Role</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700 hover:bg-gray-700/40 transition text-gray-200">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4">Abubakr</td>
              <td className="py-3 px-4">abubakr@example.com</td>
              <td className="py-3 px-4">Admin</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 rounded text-xs font-medium bg-green-600 text-white">Active</span>
              </td>
            </tr>
            <tr className="border-b border-gray-700 hover:bg-gray-700/40 transition text-gray-200">
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4">Jamshid</td>
              <td className="py-3 px-4">jamshid@example.com</td>
              <td className="py-3 px-4">User</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500 text-white">Pending</span>
              </td>
            </tr>
            <tr className="border-b border-gray-700 hover:bg-gray-700/40 transition text-gray-200">
              <td className="py-3 px-4">3</td>
              <td className="py-3 px-4">Dilnoza</td>
              <td className="py-3 px-4">dilnoza@example.com</td>
              <td className="py-3 px-4">Moderator</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 rounded text-xs font-medium bg-green-600 text-white">Active</span>
              </td>
            </tr>
            <tr className="border-b border-gray-700 hover:bg-gray-700/40 transition text-gray-200">
              <td className="py-3 px-4">4</td>
              <td className="py-3 px-4">Aziza</td>
              <td className="py-3 px-4">aziza@example.com</td>
              <td className="py-3 px-4">User</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 rounded text-xs font-medium bg-red-600 text-white">Blocked</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

  
  )
}

export default Users