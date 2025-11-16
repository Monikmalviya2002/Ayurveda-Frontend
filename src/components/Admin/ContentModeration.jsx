import React from "react";

export default function ContentModeration() {
  const flaggedContent = [
    { id: 1, type: "Blog", title: "Weight Loss Tips", author: "Dr. Sharma", status: "Flagged", reason: "Medical claims verification needed", date: "2024-03-18" },
    { id: 2, type: "Comment", title: "On PCOD Management", author: "User123", status: "Flagged", reason: "Inappropriate language", date: "2024-03-17" },
    { id: 3, type: "Video", title: "Ayurvedic Skincare", author: "Dr. Patel", status: "Pending Review", reason: "Copyright concern", date: "2024-03-16" },
    { id: 4, type: "Blog", title: "Thyroid Wellness", author: "Dr. Singh", status: "Approved", reason: "All checks passed", date: "2024-03-15" },
  ];

  const stats = [
    { label: "Total Content", value: "342", color: "emerald" },
    { label: "Flagged", value: "23", color: "rose" },
    { label: "Pending Review", value: "12", color: "amber" },
    { label: "Approved", value: "307", color: "teal" },
  ];

  const colorClasses = {
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-300" },
    rose: { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-300" },
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-300" },
    teal: { bg: "bg-teal-500/10", border: "border-teal-500/20", text: "text-teal-300" },
  };

  const handleApprove = (id) => {
    // TODO: wire API call to approve content
    console.log("Approve", id);
    alert(`Approved content #${id} (hook up real API)`);
  };

  const handleReject = (id) => {
    // TODO: wire API call to reject content
    console.log("Reject", id);
    alert(`Rejected content #${id} (hook up real API)`);
  };

  return (
    <section aria-labelledby="content-moderation-heading">
      <header className="mb-8">
        <h2 id="content-moderation-heading" className="text-3xl font-bold text-white mb-2">Content Moderation</h2>
        <p className="text-slate-400">Review and moderate blogs, comments, and video uploads.</p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => {
          const cls = colorClasses[stat.color] || colorClasses.emerald;
          return (
            <div key={idx} className={`${cls.bg} ${cls.border} border rounded-lg p-4`}>
              <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${cls.text}`}>{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Content Table */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="border-b border-slate-700/50 bg-slate-900/30">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>

            <tbody>
              {flaggedContent.map((content) => (
                <tr key={content.id} className="border-b border-slate-700/30 hover:bg-slate-800/30 transition">
                  <td className="px-6 py-4 text-sm">
                    <span className="px-2 py-1 bg-slate-700/30 rounded text-xs font-semibold text-slate-300">
                      {content.type}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-white font-medium">{content.title}</td>

                  <td className="px-6 py-4 text-sm text-slate-300">{content.author}</td>

                  <td className="px-6 py-4 text-sm">
                    {content.status === "Flagged" && <span className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded text-xs font-semibold">🚩 Flagged</span>}
                    {content.status === "Pending Review" && <span className="px-2 py-1 bg-amber-500/20 text-amber-300 rounded text-xs font-semibold">⏳ Pending</span>}
                    {content.status === "Approved" && <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs font-semibold">✓ Approved</span>}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-400">{content.reason}</td>

                  <td className="px-6 py-4 text-sm text-slate-400">{content.date}</td>

                  <td className="px-6 py-4 flex items-center gap-2">
                    <button
                      onClick={() => handleApprove(content.id)}
                      title="Approve"
                      className="px-3 py-1 rounded-md bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 transition"
                      aria-label={`Approve content ${content.title}`}
                    >
                      ✓
                    </button>

                    <button
                      onClick={() => handleReject(content.id)}
                      title="Reject"
                      className="px-3 py-1 rounded-md bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 transition"
                      aria-label={`Reject content ${content.title}`}
                    >
                      ✗
                    </button>

                    <button
                      onClick={() => alert(`Open detail view for item #${content.id}`)}
                      title="View details"
                      className="px-3 py-1 rounded-md bg-slate-700/30 hover:bg-slate-700/40 text-slate-200 transition"
                      aria-label={`View details of ${content.title}`}
                    >
                      ⋯
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
