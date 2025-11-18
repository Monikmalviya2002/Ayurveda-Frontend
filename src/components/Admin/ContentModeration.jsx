import React, { useState } from "react";

export default function ContentModeration() {
  const initialFlagged = [
    {
      id: 1,
      type: "Blog",
      title: "Weight Loss Tips",
      author: "Dr. Sharma",
      status: "Flagged",
      reason: "Medical claims verification needed",
      date: "2024-03-18",
    },
    {
      id: 2,
      type: "Comment",
      title: "On PCOD Management",
      author: "User123",
      status: "Flagged",
      reason: "Inappropriate language",
      date: "2024-03-17",
    },
    {
      id: 3,
      type: "Video",
      title: "Ayurvedic Skincare",
      author: "Dr. Patel",
      status: "Pending Review",
      reason: "Copyright concern",
      date: "2024-03-16",
    },
    {
      id: 4,
      type: "Blog",
      title: "Thyroid Wellness",
      author: "Dr. Singh",
      status: "Approved",
      reason: "All checks passed",
      date: "2024-03-15",
    },
  ];

  const [flaggedContent, setFlaggedContent] = useState(initialFlagged);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const stats = [
    {
      label: "Total Content",
      value: flaggedContent.length + 338,
      color: "emerald",
    },
    {
      label: "Flagged",
      value: flaggedContent.filter((c) => c.status === "Flagged").length,
      color: "rose",
    },
    {
      label: "Pending Review",
      value: flaggedContent.filter((c) => c.status === "Pending Review").length,
      color: "amber",
    },
    {
      label: "Approved",
      value: flaggedContent.filter((c) => c.status === "Approved").length,
      color: "teal",
    },
  ];

  const colorMap = {
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
    rose: "bg-rose-50 border-rose-100 text-rose-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    teal: "bg-teal-50 border-teal-100 text-teal-700",
  };

  const statusChip = (status) => {
    if (status === "Flagged") return "bg-rose-100 text-rose-800";
    if (status === "Pending Review") return "bg-amber-100 text-amber-800";
    if (status === "Approved") return "bg-emerald-100 text-emerald-800";
    return "bg-slate-100 text-slate-800";
  };

  const handleApprove = (id) => {
    setFlaggedContent((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Approved" } : c))
    );
  };

  const handleReject = (id) => {
    setFlaggedContent((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Rejected" } : c))
    );
  };

  const filtered = flaggedContent.filter((c) => {
    const q = query.trim().toLowerCase();
    if (
      q &&
      !(
        c.title.toLowerCase().includes(q) ||
        c.author.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q)
      )
    ) {
      return false;
    }
    if (filterType && c.type !== filterType) return false;
    if (filterStatus && c.status !== filterStatus) return false;
    return true;
  });

  return (
    <section aria-labelledby="content-moderation-heading" className="space-y-6">
      <header>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2
              id="content-moderation-heading"
              className="text-3xl font-bold text-green-900"
            >
              Content Moderation
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Review and moderate blogs, comments, and video uploads.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative text-green-900">
              <span className="absolute left-3 top-2.5">🔍</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, author or type..."
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm w-80 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                aria-label="Search content"
              />
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-green-900 "
            >
              <option value="">All types</option>
              <option value="Blog">Blog</option>
              <option value="Comment">Comment</option>
              <option value="Video">Video</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-green-900"
            >
              <option value="">All status</option>
              <option value="Flagged">Flagged</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>

            <button
              onClick={() => {
                setQuery("");
                setFilterType("");
                setFilterStatus("");
              }}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-green-900"
            >
              Reset
            </button>

            <button
              onClick={() => alert("Export CSV (stub)")}
              className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-700"
            >
              Export
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`rounded-xl p-4 border ${colorMap[s.color]} shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-xl font-bold text-slate-900">{s.value}</p>
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/80">
                  {s.color === "emerald" && "📦"}
                  {s.color === "rose" && "🚩"}
                  {s.color === "amber" && "⏳"}
                  {s.color === "teal" && "✅"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-50">
              <tr className="text-left text-xs text-slate-500 uppercase">
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-slate-500"
                  >
                    No content found
                  </td>
                </tr>
              )}

              {filtered.map((content) => (
                <tr
                  key={content.id}
                  className="border-t last:border-b hover:bg-slate-50 transition"
                >
                  <td className="px-4 py-4 align-middle">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-800">
                        {content.type[0]}
                      </div>
                      <div className="text-sm text-slate-700">
                        {content.type}
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-slate-900">
                      {content.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      ID: #{content.id}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-700">
                    {content.author}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusChip(
                        content.status
                      )}`}
                    >
                      {content.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {content.reason}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {content.date}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleApprove(content.id)}
                        title="Approve"
                        className="px-3 py-1 rounded-md bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 text-sm"
                      >
                        ✓ Approve
                      </button>

                      <button
                        onClick={() => handleReject(content.id)}
                        title="Reject"
                        className="px-3 py-1 rounded-md bg-rose-600/10 hover:bg-rose-600/20 text-rose-700 text-sm"
                      >
                        ✗ Reject
                      </button>

                      <button
                        onClick={() => alert(`Open details for #${content.id}`)}
                        title="View details"
                        className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-sm"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Showing 1–{filtered.length} of {flaggedContent.length} items
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-md border border-slate-200 text-slate-700">
              Prev
            </button>
            <button className="px-3 py-1 rounded-md border border-slate-200 text-slate-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
