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

      <div className="drawer drawer-mobile">
        <input id="admin-drawer" type="checkbox" className="drawer-toggle" checked={sidebarOpen} readOnly />

        <div className="drawer-side">
          <label
            htmlFor="admin-drawer"
            className="drawer-overlay"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="w-72 bg-slate-800/80 backdrop-blur-md border-r border-slate-700 p-4">
            <AdminSidebar
              activeTab={activeTab}
              onTabChange={(tab) => setActiveTab(tab)}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            <div className="mt-6 text-sm text-slate-400">
              <div>Logged in as</div>
              <div className="font-medium text-slate-100">Admin</div>
              <div className="mt-3">
                <button
                  className="btn btn-ghost btn-sm w-full text-left"
                  onClick={() => {
                    /* implement sign out */
                  }}
                >
                  Sign out
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Main content area */}
        <div className="drawer-content flex flex-col min-h-screen">
          <div className="p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-sm text-slate-300">Manage platform, users, content & analytics</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="btn btn-ghost btn-square md:hidden"
                  onClick={() => setSidebarOpen((s) => !s)}
                  aria-label="Toggle sidebar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  <button className="btn btn-sm btn-outline">New Announcement</button>
                  <button className="btn btn-sm bg-amber-300 text-slate-900">Create Post</button>
                </div>
              </div>
            </div>

            <div className="tabs tabs-boxed bg-slate-800/60 rounded-full mb-6">
              <button className={`tab ${activeTab === "overview" ? "tab-active" : ""}`} onClick={() => setActiveTab("overview")}>Overview</button>
              <button className={`tab ${activeTab === "users" ? "tab-active" : ""}`} onClick={() => setActiveTab("users")}>Users</button>
              <button className={`tab ${activeTab === "content" ? "tab-active" : ""}`} onClick={() => setActiveTab("content")}>Content</button>
              <button className={`tab ${activeTab === "analytics" ? "tab-active" : ""}`} onClick={() => setActiveTab("analytics")}>Analytics</button>
              <button className={`tab ${activeTab === "settings" ? "tab-active" : ""}`} onClick={() => setActiveTab("settings")}>Settings</button>
            </div>

            {/* Actual content area */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="card bg-slate-800/60 p-4 rounded-2xl shadow">
                  <div className="text-sm text-slate-300">Active users</div>
                  <div className="text-2xl font-bold text-white mt-2">1,248</div>
                </div>
                <div className="card bg-slate-800/60 p-4 rounded-2xl shadow">
                  <div className="text-sm text-slate-300">New signups (7d)</div>
                  <div className="text-2xl font-bold text-white mt-2">98</div>
                </div>
                <div className="card bg-slate-800/60 p-4 rounded-2xl shadow">
                  <div className="text-sm text-slate-300">Pending reviews</div>
                  <div className="text-2xl font-bold text-white mt-2">12</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="bg-slate-800/50 rounded-2xl p-6 shadow-inner">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>

          <footer className="px-6 py-4 border-t border-slate-700 text-sm text-slate-400">
            <div className="container mx-auto">© {new Date().getFullYear()} AYURCONNECT — Admin Console</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
