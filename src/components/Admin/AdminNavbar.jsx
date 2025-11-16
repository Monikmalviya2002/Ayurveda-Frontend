import React from "react";
export default function AdminNavbar({ onToggleSidebar, sidebarOpen }) {
  return (
    <nav className="navbar bg-base-200 sticky top-0 z-50 shadow-md border-b border-slate-700 px-4 md:px-6">
      
      {/* LEFT: Sidebar Toggle + Logo */}
      <div className="flex items-center gap-3">
        {/* Hamburger (visible always for admin convenience) */}
        <button
          className="btn btn-ghost btn-square"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-slate-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold text-white">
            AyurConnect Admin
          </h1>
        </div>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3">

        {/* Notifications */}
        <button
          className="btn btn-ghost btn-square relative tooltip tooltip-left"
          data-tip="Notifications"
        >
          <span className="text-xl">🔔</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button
          className="btn btn-ghost btn-square tooltip tooltip-left"
          data-tip="Settings"
        >
          <span className="text-xl">⚙️</span>
        </button>

        {/* Avatar dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost px-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                AD
              </div>
              <span className="hidden md:block text-sm font-medium text-slate-300">
                Admin
              </span>
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 mt-3 shadow-lg bg-base-100 rounded-lg w-40 border border-slate-700"
          >
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a className="text-red-400">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
