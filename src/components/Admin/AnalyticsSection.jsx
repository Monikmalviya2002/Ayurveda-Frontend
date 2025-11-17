import React from "react";

export default function AnalyticsSection() {
  const feedbackItems = [
    { label: "Doctors Satisfaction", score: 94 },
    { label: "Patients Satisfaction", score: 91 },
    { label: "Platform Usability", score: 88 },
    { label: "Support Quality", score: 96 },
  ];
  const kpis = [
    { label: "New Users (30d)", value: "1,247", color: "indigo" },
    { label: "Avg Consult / Day", value: "310", color: "emerald" },
    { label: "Conversion", value: "4.8%", color: "amber" },
    { label: "MRR", value: "₹15.4L", color: "teal" },
  ];

  const Sparkline = ({ color = "#0ea5a4" }) => (
    <svg
      width="110"
      height="28"
      viewBox="0 0 110 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <polyline
        points="2,20 18,12 34,16 50,8 66,10 82,6 98,10"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor={color} stopOpacity="0.18" />
        <stop offset="1" stopColor={color} stopOpacity="0.02" />
      </linearGradient>
    </svg>
  );

  return (
    <section aria-labelledby="analytics-heading" className="space-y-6">
      <header>
        <h2
          id="analytics-heading"
          className="text-3xl font-bold text-green-900"
        >
          Analytics & Insights
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Important metrics, trends and satisfaction scores at a glance.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div
            key={k.label}
            className={`flex items-center justify-between p-4 rounded-xl shadow-sm border ${
              k.color === "indigo"
                ? "bg-indigo-900 text-white border-indigo-800"
                : ""
            }
                ${
                  k.color === "emerald"
                    ? "bg-emerald-900 text-white border-emerald-800"
                    : ""
                }
                ${
                  k.color === "amber"
                    ? "bg-amber-900 text-white border-amber-800"
                    : ""
                }
                ${
                  k.color === "teal"
                    ? "bg-teal-900 text-white border-teal-800"
                    : ""
                }`}
          >
            <div>
              <div className="text-xs opacity-90">{k.label}</div>
              <div className="text-xl font-bold mt-1">{k.value}</div>
            </div>
            <div className="opacity-80">
              {/* small icon */}
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                {k.color === "indigo" && "👥"}
                {k.color === "emerald" && "💬"}
                {k.color === "amber" && "📈"}
                {k.color === "teal" && "💰"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="rounded-xl p-5 bg-white border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  👥 User Growth
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Month-over-month growth and retention.
                </p>
              </div>
              <div className="text-sm text-slate-500">
                Updated: a few mins ago
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="text-xs text-slate-500">This Month</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">
                    +8.5%
                  </div>

                  <div className="mt-3">
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: "85%",
                          background: "linear-gradient(90deg,#34d399,#10b981)",
                        }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-slate-500 flex gap-4">
                      <span>
                        New: <strong className="text-slate-800">1,247</strong>
                      </span>
                      <span>
                        Active:{" "}
                        <strong className="text-slate-800">8,923</strong>
                      </span>
                      <span>
                        Retention:{" "}
                        <strong className="text-slate-800">92.3%</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-36 h-20 flex items-center justify-center">
                  <Sparkline color="#10b981" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-5 bg-white border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  💬 Consultations
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Volume, pending items and ratings.
                </p>
              </div>
              <div className="text-sm text-slate-500">Monthly Avg</div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500">Completed</div>
                <div className="text-xl font-bold text-teal-700 mt-1">
                  3,287
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500">Pending</div>
                <div className="text-xl font-bold text-amber-600 mt-1">145</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500">Avg Rating</div>
                <div className="text-xl font-bold text-emerald-700 mt-1">
                  4.8⭐
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs text-slate-500 mb-2">Response Time</div>
              <div className="h-2 bg-slate-100 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: "78%",
                    background: "linear-gradient(90deg,#2dd4bf,#06b6d4)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl p-5 bg-white border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  💰 Revenue
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Monthly performance vs target.
                </p>
              </div>
              <div className="text-sm text-slate-500">This month</div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">Monthly Revenue</div>
                  <div className="text-2xl font-bold text-amber-600 mt-1">
                    ₹15,42,890
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 text-right">
                    Target
                  </div>
                  <div className="text-xl font-semibold text-teal-600 text-right">
                    ₹15,00,000
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: "103%",
                      background: "linear-gradient(90deg,#f59e0b,#f97316)",
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-emerald-700 font-semibold">
                  ✓ Target exceeded by 2.9%
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="text-sm text-slate-500">Trend</div>
              <div className="w-40">
                <Sparkline color="#f97316" />
              </div>
            </div>
          </div>

          <div className="rounded-xl p-5 bg-white border border-slate-100 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  📈 Feedback & Satisfaction
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Net scores from users and doctors.
                </p>
              </div>
              <div className="text-sm text-slate-500">Realtime</div>
            </div>

            <div className="mt-4 space-y-3">
              {feedbackItems.map((fb, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm text-slate-700">{fb.label}</div>
                    <div className="text-sm font-semibold text-slate-900">
                      {fb.score}%
                    </div>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full">
                    <div
                      className="h-3 rounded-full"
                      style={{
                        width: `${fb.score}%`,
                        background: "linear-gradient(90deg,#34d399,#06b6d4)",
                        boxShadow: "0 1px 6px rgba(12,74,110,0.06)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-sm text-slate-500">
              Last 30 days · Change vs previous period:{" "}
              <span className="text-emerald-700 font-semibold">+3.2%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
