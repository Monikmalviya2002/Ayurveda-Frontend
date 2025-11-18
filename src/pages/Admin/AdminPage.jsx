import React, { useState } from "react";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import DashboardOverview from "../../components/Admin/DashboardOverview";
import UserManagement from "../../components/Admin/UserManagement";
import ContentModeration from "../../components/Admin/ContentModeration";
import AnalyticsSection from "../../components/Admin/AnalyticsSection";
import PlatformSettings from "../../components/Admin/PlatformSettings";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "users":
        return <UserManagement />;
      case "content":
        return <ContentModeration />;
      case "analytics":
        return <AnalyticsSection />;
      case "settings":
        return <PlatformSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <header className="sticky top-0 z-50">
        <AdminNavbar
          onToggleSidebar={() => setSidebarOpen((s) => !s)}
          sidebarOpen={sidebarOpen}
        />
      </header>

      <div className="drawer drawer-mobile min-h-screen">
        <input
          id="admin-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={sidebarOpen}
          onChange={(e) => setSidebarOpen(e.target.checked)}
        />

        <div className="drawer-side">
          <label
            htmlFor="admin-drawer"
            className="drawer-overlay"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="w-64 bg-slate-800/80 backdrop-blur-md border-r border-slate-700 ">
            <AdminSidebar
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <div className="mt-6 text-sm text-slate-400"></div>
          </aside>
        </div>

        <div className="drawer-content flex-1 flex flex-col min-h-screen bg-linear-to-r from-green-50 to-green-100 overflow-auto">
          <div className="p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-green-900">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-green-900 opacity-90 ">
                  Manage platform, users, content & analytics
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="btn btn-ghost btn-square md:hidden"
                  onClick={() => setSidebarOpen((s) => !s)}
                  aria-label="Toggle sidebar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  <button className="btn btn-sm bg-black text-white">
                    New Announcement
                  </button>
                  <button className="btn btn-sm bg-amber-300 text-slate-900">
                    Create Post
                  </button>
                </div>
              </div>
            </div>

            <div className="tabs tabs-boxed bg-white rounded-full mb-6 p-1">
              {[
                { id: "overview", label: "Overview" },
                { id: "users", label: "Users" },
                { id: "content", label: "Content" },
                { id: "analytics", label: "Analytics" },
                { id: "settings", label: "Settings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    tab text-green-900 font-semibold text-base 
                    px-4 py-2 rounded-full transition-all duration-200
                    ${
                      activeTab === tab.id
                        ? "tab-active bg-green-200 text-green-900 font-bold"
                        : "hover:bg-green-100"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="card bg-emerald-900 p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-white/90 font-medium">
                    Active users
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">
                    1,248
                  </div>
                </div>

                <div className="card bg-teal-900 p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-white/90 font-medium">
                    New signups (7d)
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">98</div>
                </div>

                <div className="card bg-indigo-900 p-4 rounded-2xl shadow-lg">
                  <div className="text-sm text-white/90 font-medium">
                    Pending reviews
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">12</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-md border border-[#E8E2D9]">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>

          <footer className="px-6 py-4 bg-slate-800 border-t border-slate-700 text-sm text-slate-200 mt-auto">
            <div className="container mx-auto font-bold">
              © {new Date().getFullYear()} AYURCONNECT
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
