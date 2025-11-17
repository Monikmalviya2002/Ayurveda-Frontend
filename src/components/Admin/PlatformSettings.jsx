import React, { useState } from "react";

export default function PlatformSettings() {
  const [platformName, setPlatformName] = useState("AyurConnect");
  const [supportEmail, setSupportEmail] = useState("support@ayurconnect.com");
  const [businessPhone, setBusinessPhone] = useState("+91-9876-543-210");

  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [doctorVerification, setDoctorVerification] = useState(true);

  const [bannerTitle, setBannerTitle] = useState(
    "AYURCONNECT: Your Path to Holistic Well-being"
  );
  const [bannerDesc, setBannerDesc] = useState(
    "Discover ancient wisdom of Ayurveda for a balanced and healthy life"
  );
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  const handleFile = (file) => {
    if (!file) return;
    setBannerFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setBannerPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const payload = {
      platformName,
      supportEmail,
      businessPhone,
      twoFactor,
      doctorVerification,
      banner: bannerFile ? bannerFile.name : null,
    };
    console.log("Saving Platform Settings:", payload);
    alert("Settings saved (demo). Hook up real API to persist.");
  };

  const handleCancel = () => {
    setPlatformName("AyurConnect");
    setSupportEmail("support@ayurconnect.com");
    setBusinessPhone("+91-9876-543-210");
    setAdminPassword("");
    setShowPassword(false);
    setTwoFactor(true);
    setDoctorVerification(true);
    setBannerFile(null);
    setBannerPreview(null);
    setBannerTitle("AYURCONNECT: Your Path to Holistic Well-being");
    setBannerDesc(
      "Discover ancient wisdom of Ayurveda for a balanced and healthy life"
    );
  };

  return (
    <section aria-labelledby="platform-settings-heading" className="space-y-6">
      <header>
        <h2
          id="platform-settings-heading"
          className="text-3xl font-bold text-green-900"
        >
          Platform Settings
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Configure platform identity, security, and homepage banner.
        </p>
      </header>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="rounded-2xl bg-[#FBF7F2] border border-[#E8E2D9] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-slate-800 mb-4">General</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-slate-700 mb-2">Platform Name</span>
              <input
                type="text"
                value={platformName}
                onChange={(e) => setPlatformName(e.target.value)}
                className="rounded-md border border-[#E8E2D9] px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                aria-label="Platform name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-700 mb-2">Support Email</span>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="rounded-md border border-[#E8E2D9] px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                aria-label="Support email"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-slate-700 mb-2">
                Business Phone
              </span>
              <input
                type="tel"
                value={businessPhone}
                onChange={(e) => setBusinessPhone(e.target.value)}
                className="rounded-md border border-[#E8E2D9] px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                aria-label="Business phone"
              />
            </label>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-[#E8E2D9] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-slate-800 mb-4 flex items-center gap-3">
            🛡️ Security
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm text-slate-700">
                Admin Password
              </label>
              <div className="flex gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter new admin password"
                  className="flex-1 rounded-md border border-[#E8E2D9] px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  aria-label="Admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="inline-flex items-center px-3 rounded-md border border-[#E8E2D9] bg-white text-slate-700"
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <p className="text-xs text-slate-500">
                Use a strong password and rotate periodically.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-md border border-[#E8E2D9] bg-[#FEFEFC]">
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-slate-500">
                    Require second factor for admin access
                  </p>
                </div>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={twoFactor}
                    onChange={(e) => setTwoFactor(e.target.checked)}
                    className="toggle toggle-sm"
                    aria-label="Toggle two factor"
                  />
                </label>
              </div>

              <div className="flex items-center justify-between p-3 rounded-md border border-[#E8E2D9] bg-[#FEFEFC]">
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Doctor Verification
                  </p>
                  <p className="text-xs text-slate-500">
                    Require admin approval for doctor accounts
                  </p>
                </div>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={doctorVerification}
                    onChange={(e) => setDoctorVerification(e.target.checked)}
                    className="toggle toggle-sm"
                    aria-label="Toggle doctor verification"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#FBF7F2] border border-[#E8E2D9] p-6 shadow-sm">
          <h3 className="text-lg font-medium text-slate-800 mb-4">
            Homepage Banner
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <div className="md:col-span-2 space-y-3">
              <label className="block text-sm text-slate-700">
                Banner Title
              </label>
              <input
                type="text"
                value={bannerTitle}
                onChange={(e) => setBannerTitle(e.target.value)}
                className="w-full rounded-md border border-[#E8E2D9] px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                aria-label="Banner title"
              />

              <label className="block text-sm text-slate-700">
                Banner Description
              </label>
              <textarea
                value={bannerDesc}
                onChange={(e) => setBannerDesc(e.target.value)}
                rows={3}
                className="w-full rounded-md border border-[#E8E2D9] px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none"
                aria-label="Banner description"
              />

              <label className="block text-sm text-slate-700">
                Banner Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFile(e.target.files?.[0])}
                className="w-full rounded-md border border-[#E8E2D9] px-2 py-1 bg-white text-slate-800"
                aria-label="Banner image"
              />
              <p className="text-xs text-slate-500">
                Recommended: 1600×600 px (PNG/JPG). Max 3MB.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-md border border-[#E8E2D9] bg-white">
              <div className="w-full aspect-[16/6] bg-slate-50 rounded-md overflow-hidden flex items-center justify-center">
                {bannerPreview ? (
                  <img
                    src={bannerPreview}
                    alt="Banner preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-slate-500">
                    <div className="text-4xl">🖼️</div>
                    <div className="text-sm mt-2">No banner uploaded</div>
                  </div>
                )}
              </div>

              <div className="w-full text-xs text-slate-600 text-center">
                <div className="font-medium text-slate-800">{bannerTitle}</div>
                <div className="mt-1">{bannerDesc}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow hover:scale-[1.01] transition-transform"
            aria-label="Save settings"
          >
            💾 Save Changes
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#E8E2D9] bg-white text-slate-700"
            aria-label="Cancel and reset"
          >
            Cancel
          </button>

          <div className="ml-auto text-sm text-slate-500">
            Last saved:{" "}
            <span className="text-slate-700 font-medium">
              a few minutes ago
            </span>
          </div>
        </div>
      </form>
    </section>
  );
}
