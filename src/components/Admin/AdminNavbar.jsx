import React from "react";
export default function AdminNavbar({ onToggleSidebar, sidebarOpen }) {
  return (
    <nav className="navbar sticky top-0 z-40 bg-gradient-to-r from-green-800 to-green-700 shadow-lg text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-3">
            <button
              className="btn btn-ghost btn-square p-2"
              onClick={onToggleSidebar}
              aria-label="Toggle sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {sidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <h1 className="text-lg md:text-xl font-bold text-white select-none">
                AyurConnect Admin
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="relative btn btn-ghost btn-square tooltip tooltip-left btn btn-ghost px-1 hover:bg-inherit border-none hover:border-none focus:border-none active:border-none"
              data-tip="Notifications"
              aria-label="Notifications"
            >
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-green-800"></span>
            </button>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="relative btn btn-ghost px-1 hover:bg-inherit border-none hover:border-none focus:border-none active:border-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    AD
                  </div>
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 mt-3 shadow-lg bg-base-100 text-white rounded-lg w-40 border border-slate-700"
                role="menu"
                aria-label="Profile menu"
              >
                <li role="menuitem">
                  <a>Profile</a>
                </li>
                <li role="menuitem">
                  <a>Settings</a>
                </li>
                <li role="menuitem">
                  <a className="text-red-400">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}