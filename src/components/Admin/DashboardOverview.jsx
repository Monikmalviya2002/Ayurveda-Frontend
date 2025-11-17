"use client";

import React from "react";

export default function DashboardOverview() {
  const stats = [
    {
      icon: "👥",
      label: "Total Users",
      value: "12,543",
      change: "+12.5%",
      color: "emerald",
    },
    {
      icon: "💬",
      label: "Consultations",
      value: "3,287",
      change: "+8.2%",
      color: "indigo",
    },
    {
      icon: "💰",
      label: "Monthly Revenue",
      value: "₹3,84,560",
      change: "+15.3%",
      color: "amber",
    },
    {
      icon: "⚠️",
      label: "Pending Reviews",
      value: "45",
      change: "-2.1%",
      color: "rose",
    },
  ];

  const colorClasses = {
    emerald:
      "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-800",
    indigo: "from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-800",
    amber: "from-amber-50 to-amber-100 border-amber-200 text-amber-800",
    rose: "from-rose-50 to-rose-100 border-rose-200 text-rose-800",
  };

  const recentActivities = [
    {
      action: "New doctor registered",
      user: "Dr. Priya Sharma",
      time: "2 hours ago",
    },
    {
      action: "Content flagged for review",
      user: "PCOD Management Blog",
      time: "4 hours ago",
    },
    {
      action: "User payment received",
      user: "Consultation Fee",
      time: "6 hours ago",
    },
    {
      action: "New consultation request",
      user: "Weight Management",
      time: "8 hours ago",
    },
  ];

  const healthMetrics = [
    { metric: "Server Status", status: "Healthy", percentage: 99.8 },
    { metric: "Database Performance", status: "Good", percentage: 97.2 },
    { metric: "API Response Time", status: "Excellent", percentage: 98.5 },
    { metric: "User Satisfaction", status: "Great", percentage: 96.3 },
  ];

  return (
    <section aria-labelledby="dashboard-overview" className="space-y-8">
      <header className="mb-2">
        <h2
          id="dashboard-overview"
          className="text-3xl md:text-4xl font-bold text-green-900"
        >
          Dashboard Overview
        </h2>
        <p className="text-sm md:text-base text-slate-600 mt-1">
          Welcome back! Quick snapshot of platform health, content, and
          activity.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <article
            key={idx}
            className={`
              relative overflow-hidden rounded-2xl p-5 shadow-lg border ${
                colorClasses[stat.color]
              } 
              bg-gradient-to-br ${
                colorClasses[stat.color].includes("from-")
                  ? ""
                  : "from-white to-white"
              }
              transform transition-transform hover:-translate-y-1 duration-200
            `}
            aria-labelledby={`stat-${idx}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/70 ${
                    colorClasses[stat.color].split(" ")[2]
                  }`}
                  aria-hidden="true"
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p
                    id={`stat-${idx}`}
                    className="text-sm font-medium text-slate-700"
                  >
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xl md:text-2xl font-extrabold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`inline-block text-sm px-3 py-1 rounded-full font-semibold ${
                    stat.change.startsWith("-")
                      ? "bg-rose-100 text-rose-700"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -right-8 -bottom-8 w-36 h-36 rounded-full opacity-10"
              style={{
                background:
                  stat.color === "emerald"
                    ? "radial-gradient(circle,#34d399 0%, transparent 60%)"
                    : stat.color === "teal"
                    ? "radial-gradient(circle,#2dd4bf 0%, transparent 60%)"
                    : stat.color === "amber"
                    ? "radial-gradient(circle,#f59e0b 0%, transparent 60%)"
                    : "radial-gradient(circle,#fb7185 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="rounded-2xl p-6 bg-white shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-3">
              <span className="text-2xl">📍</span>
              Recent Activities
            </h3>
            <button className="text-sm px-3 py-1 rounded-full bg-slate-50 border hover:shadow-sm text-slate-700 transition">
              View all
            </button>
          </div>

          <ul className="space-y-3">
            {recentActivities.map((activity, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start p-3 rounded-lg hover:bg-slate-50 transition"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800">
                    {activity.action}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activity.user} • {activity.time}
                  </p>
                </div>
                <div>
                  <button className="text-xs text-slate-500 hover:text-slate-700">
                    Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl p-6 bg-white shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-3">
              <span className="text-2xl">📈</span>
              System Health
            </h3>
            <div className="text-sm text-slate-500">
              Last updated: a few minutes ago
            </div>
          </div>

          <div className="space-y-4">
            {healthMetrics.map((health, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-700">{health.metric}</p>
                  <div className="text-sm font-semibold text-slate-800">
                    {health.percentage}%
                  </div>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${Math.min(100, health.percentage)}%`,
                      background: "linear-gradient(90deg,#34d399,#2dd4bf)",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-slate-600">Quick actions</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm border">
                Restart Server
              </button>
              <button className="px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-sm border">
                Run DB Check
              </button>
              <button className="px-3 py-1 rounded-md bg-slate-50 text-slate-800 text-sm border">
                Open Logs
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
