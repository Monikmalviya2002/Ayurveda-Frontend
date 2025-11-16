import React from "react";
export default function UserManagement() {
  const users = [
    { id: 1, name: 'Priya Sharma', role: 'Doctor', status: 'Verified', joinDate: '2024-01-15', consultations: 127 },
    { id: 2, name: 'Rajesh Kumar', role: 'Patient', status: 'Active', joinDate: '2024-02-20', consultations: 5 },
    { id: 3, name: 'Anjali Singh', role: 'Doctor', status: 'Pending', joinDate: '2024-03-10', consultations: 0 },
    { id: 4, name: 'Vikram Patel', role: 'Patient', status: 'Blocked', joinDate: '2024-01-05', consultations: 12 },
    { id: 5, name: 'Dr. Meera Desai', role: 'Doctor', status: 'Verified', joinDate: '2024-02-28', consultations: 89 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">User Management</h2>
        <p className="text-slate-400">Manage, verify, and moderate user and doctor accounts.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-3 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-slate-600 transition">
          🔽 Filter
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50 bg-slate-900/30">
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase">Join Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase">Consultations</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-700/30 hover:bg-slate-800/30 transition">
                  <td className="px-6 py-4 text-sm text-white font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'Doctor' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-teal-500/20 text-teal-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`text-lg ${
                      user.status === 'Verified' ? 'text-emerald-400' :
                      user.status === 'Active' ? 'text-teal-400' :
                      user.status === 'Pending' ? 'text-amber-400' :
                      'text-rose-400'
                    }`}>
                      {user.status === 'Verified' && '✓'}
                      {user.status === 'Active' && '✓'}
                      {user.status === 'Pending' && '⚠️'}
                      {user.status === 'Blocked' && '✗'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{user.joinDate}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-semibold">{user.consultations}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="p-1.5 hover:bg-slate-700/50 rounded transition text-slate-400 hover:text-emerald-400">
                      👁️
                    </button>
                    <button className="p-1.5 hover:bg-slate-700/50 rounded transition text-slate-400 hover:text-blue-400">
                      ✏️
                    </button>
                    <button className="p-1.5 hover:bg-slate-700/50 rounded transition text-slate-400 hover:text-rose-400">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
