import React from "react";

export default function AnalyticsSection() {
  const feedbackItems = [
    { label: "Doctors Satisfaction", score: 94 },
    { label: "Patients Satisfaction", score: 91 },
    { label: "Platform Usability", score: 88 },
    { label: "Support Quality", score: 96 },
  ];

  return (
    <section aria-labelledby="analytics-heading">
      <header className="mb-8">
        <h2 id="analytics-heading" className="text-3xl font-bold text-white mb-2">Analytics & Insights</h2>
        <p className="text-slate-400">Track platform performance, user engagement, and revenue metrics.</p>
      </header>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        {/* User Growth */}
        <article className="rounded-lg p-6 bg-slate-800/60 border border-slate-700/40 shadow-sm backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">👥</span>
            User Growth
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-2">This Month: <span className="font-semibold text-emerald-300">+8.5%</span></p>

              <div className="h-2 bg-slate-700/30 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "85%", background: "linear-gradient(90deg,#34d399,#2dd4bf)" }}
                  aria-hidden
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/30">
              <div>
                <p className="text-xs text-slate-400">New Users</p>
                <p className="text-xl font-bold text-emerald-400">1,247</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Active</p>
                <p className="text-xl font-bold text-teal-400">8,923</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Retention</p>
                <p className="text-xl font-bold text-amber-400">92.3%</p>
              </div>
            </div>
          </div>
        </article>

        {/* Consultations */}
        <article className="rounded-lg p-6 bg-slate-800/60 border border-slate-700/40 shadow-sm backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">💬</span>
            Consultations
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-2">Monthly Average: <span className="font-semibold text-teal-300">1,240</span></p>

              <div className="h-2 bg-slate-700/30 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{ width: "78%", background: "linear-gradient(90deg,#2dd4bf,#06b6d4)" }}
                  aria-hidden
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/30">
              <div>
                <p className="text-xs text-slate-400">Completed</p>
                <p className="text-xl font-bold text-teal-400">3,287</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Pending</p>
                <p className="text-xl font-bold text-amber-400">145</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Avg Rating</p>
                <p className="text-xl font-bold text-emerald-400">4.8⭐</p>
              </div>
            </div>
          </div>
        </article>

        {/* Revenue */}
        <article className="rounded-lg p-6 bg-slate-800/60 border border-slate-700/40 shadow-sm backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">💰</span>
            Revenue
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg p-3 bg-amber-500/10 border border-amber-500/20">
                <p className="text-xs text-slate-400">Monthly Revenue</p>
                <p className="text-2xl font-bold text-amber-400">₹15,42,890</p>
              </div>
              <div className="rounded-lg p-3 bg-teal-500/10 border border-teal-500/20">
                <p className="text-xs text-slate-400">Monthly Target</p>
                <p className="text-2xl font-bold text-teal-400">₹15,00,000</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/30">
              <p className="text-sm text-emerald-400 font-semibold">✓ Target Exceeded by 2.9%</p>
            </div>
          </div>
        </article>

        {/* Feedback & Satisfaction */}
        <article className="rounded-lg p-6 bg-slate-800/60 border border-slate-700/40 shadow-sm backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">📈</span>
            Feedback & Satisfaction
          </h3>

          <div className="space-y-4">
            {feedbackItems.map((fb, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <p className="text-sm text-slate-300">{fb.label}</p>
                  <p className="text-sm font-semibold text-emerald-400">{fb.score}%</p>
                </div>

                <div className="h-2 bg-slate-700/30 rounded-full">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${fb.score}%`, background: "linear-gradient(90deg,#34d399,#2dd4bf)" }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
