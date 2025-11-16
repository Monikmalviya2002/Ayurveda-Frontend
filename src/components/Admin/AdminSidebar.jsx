import React from "react";

export default function AdminSidebar({ activeTab, onTabChange, isOpen = true }) {
  const menuItems = [
    { id: "overview", label: "Dashboard Overview", icon: "📊" },
    { id: "users", label: "User Management", icon: "👥" },
    { id: "content", label: "Content Moderation", icon: "📝" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "inventory", label: "Pharmacy Inventory", icon: "📦" },
    { id: "security", label: "Security & Roles", icon: "🛡️" },
    { id: "settings", label: "Platform Settings", icon: "⚙️" },
  ];

  return (
    // Use fixed width on desktop, slide-in behaviour on mobile using translate classes
    <aside
      className={`fixed md:static top-0 left-0 z-50 h-full md:h-auto md:sticky md:top-16 overflow-y-auto bg-slate-900/90 border-r border-slate-700 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 w-64`}
      aria-label="Admin sidebar"
    >
      <div className="p-6">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Navigation</h2>

        <nav className="space-y-2" aria-label="Main navigation">
          {menuItems.map(({ id, label, icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => onTabChange && onTabChange(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400
                  ${active
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"}
                `}
                aria-current={active ? "page" : undefined}
              >
                <span className="text-lg">{icon}</span>
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Quick Stats */}
      <div className="p-6 border-t border-slate-700 mt-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Quick Stats</h3>

        <div className="space-y-3">
          <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400">Active Users</p>
            <p className="text-lg font-bold text-emerald-400">2,847</p>
          </div>

          <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400">Today's Revenue</p>
            <p className="text-lg font-bold text-teal-400">₹12,450</p>
          </div>

          <div className="bg-slate-800/40 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400">Pending Reviews</p>
            <p className="text-lg font-bold text-amber-400">23</p>
          </div>
        </div>

        {/* Optional small actions */}
        <div className="mt-6 flex flex-col gap-2">
          <button
            className="btn btn-sm btn-ghost text-slate-300 hover:text-white justify-start"
            onClick={() => alert("Exporting reports...")}
          >
            Export Reports
          </button>
          <button
            className="btn btn-sm bg-amber-300 text-slate-900 rounded-full"
            onClick={() => alert("Open quick create...")}
          >
            Quick Create
          </button>
        </div>
      </div>

      {/* small footer for mobile spacing */}
      <div className="md:hidden h-4" />
    </aside>
  );
}
