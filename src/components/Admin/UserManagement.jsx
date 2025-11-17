import React from "react";

export default function UserManagement() {
  const users = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Doctor",
      status: "Verified",
      joinDate: "2024-01-15",
      consultations: 127,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Patient",
      status: "Active",
      joinDate: "2024-02-20",
      consultations: 5,
    },
    {
      id: 3,
      name: "Anjali Singh",
      role: "Doctor",
      status: "Pending",
      joinDate: "2024-03-10",
      consultations: 0,
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Patient",
      status: "Blocked",
      joinDate: "2024-01-05",
      consultations: 12,
    },
    {
      id: 5,
      name: "Dr. Meera Desai",
      role: "Doctor",
      status: "Verified",
      joinDate: "2024-02-28",
      consultations: 89,
    },
  ];

  const statusClasses = {
    Verified: "bg-emerald-100 text-emerald-800",
    Active: "bg-teal-100 text-teal-800",
    Pending: "bg-amber-100 text-amber-800",
    Blocked: "bg-rose-100 text-rose-800",
  };

  const roleBadge = (role) =>
    role === "Doctor" ? "bg-emerald-600 text-white" : "bg-sky-600 text-white";

  const initials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-green-900">User Management</h2>
          <p className="text-sm text-slate-600 mt-1">
            Manage, verify, and moderate user and doctor accounts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 hover:shadow-sm">
            ⤓ Export
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
            + Add User
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
        <div className="flex-1 relative max-w-xl w-full">
          <span className="absolute left-3 top-3 text-slate-400">🔍</span>
          <input
            type="text"
            aria-label="Search users"
            placeholder="Search users by name, email or role..."
            className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div className="flex items-center gap-2">
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700">
            <option value="">All roles</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>

          <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700">
            <option value="">All status</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="blocked">Blocked</option>
          </select>

          <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-700 hover:shadow-sm">
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="text-left text-xs text-slate-500 uppercase">
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Join Date</th>
                <th className="px-4 py-3">Consultations</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-semibold">
                        {initials(user.name)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {user.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          — {user.id}@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${roleBadge(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        statusClasses[user.status] ||
                        "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {user.joinDate}
                  </td>

                  <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                    {user.consultations}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        title="View profile"
                        className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
                      >
                        👁️
                      </button>

                      <button
                        title="Edit user"
                        className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
                      >
                        ✏️
                      </button>

                      <button
                        title="Delete user"
                        className="p-2 rounded-md hover:bg-rose-50 text-rose-600"
                      >
                        🗑️
                      </button>

                      <button
                        title="More"
                        className="p-2 rounded-md hover:bg-slate-100 text-slate-600"
                      >
                        ⋯
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Showing 1–{users.length} of {users.length} users
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-md border border-slate-200 text-slate-700">
              Prev
            </button>
            <button className="px-3 py-1 rounded-md border border-slate-200 text-slate-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
