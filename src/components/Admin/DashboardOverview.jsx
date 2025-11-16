"use client";

import React from "react";

export default function DashboardOverview() {
  const stats = [
    { icon: "👥", label: "Total Users", value: "12,543", change: "+12.5%", color: "emerald" },
    { icon: "💬", label: "Consultations", value: "3,287", change: "+8.2%", color: "teal" },
    { icon: "💰", label: "Monthly Revenue", value: "₹3,84,560", change: "+15.3%", color: "amber" },
    { icon: "⚠️", label: "Pending Reviews", value: "45", change: "-2.1%", color: "rose" },
  ];

  const colorClasses = {
    emerald: "from-emerald-500/20 to-emerald-500/10 border-emerald-500/30 text-emerald-400",
    teal: "from-teal-500/20 to-teal-500/10 border-teal-500/30 text-teal-400",
    amber: "from-amber-500/20 to-amber-500/10 border-amber-500/30 text-amber-400",
    rose: "from-rose-500/20 to-rose-500/10 border-rose-500/30 text-rose-400",
  };

  const recentActivities = [
    { action: "New doctor registered", user: "Dr. Priya Sharma", time: "2 hours ago" },
    { action: "Content flagged for review", user: "PCOD Management Blog", time: "4 hours ago" },
    { action: "User payment received", user: "Consultation Fee", time: "6 hours ago" },
    { action: "New consultation request", user: "Weight Management", time: "8 hours ago" },
  ];

  const healthMetrics = [
    { metric: "Server Status", status: "Healthy", percentage: 99.8 },
    { metric: "Database Performance", status: "Good", percentage: 97.2 },
    { metric: "API Response Time", status: "Excellent", percentage: 98.5 },
    { metric: "User Satisfaction", status: "Great", percentage: 96.3 },
  ];

  return (
    <section aria-labelledby="dashboard-overview">
      <header className="mb-8">
        <h2 id="dashboard-overview" className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
        <p className="text-slate-400">Welcome back! Here's your platform performance at a glance.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 backdrop-blur-sm border ${colorClasses[stat.color]} bg-gradient-to-br ${colorClasses[stat.color] ? "" : ""}`}
            style={{ backgroundBlendMode: "overlay" }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-white/8 rounded-lg text-2xl">{stat.icon}</div>
              <span className="text-xs font-semibold text-slate-300">{stat.change}</span>
            </div>

            <p className="text-slate-300 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="rounded-lg p-6 backdrop-blur-sm border border-slate-700/40 bg-slate-800/50">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">📍</span>
            Recent Activities
          </h3>

          <div className="space-y-3">
            {recentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-700/30 last:border-b-0">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">{activity.action}</p>
                  <p className="text-xs text-slate-400">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="rounded-lg p-6 backdrop-blur-sm border border-slate-700/40 bg-slate-800/50">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">📈</span>
            System Health
          </h3>

          <div className="space-y-4">
            {healthMetrics.map((health, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-slate-300">{health.metric}</p>
                  <span className="text-xs font-semibold text-emerald-400">{health.percentage}%</span>
                </div>

                <div className="w-full bg-slate-700/30 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${health.percentage}%`, background: "linear-gradient(90deg,#34d399,#2dd4bf)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
