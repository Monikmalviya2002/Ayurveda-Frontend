"use client";

import React, { useState } from "react";

export default function PlatformSettings() {
  const [platformName, setPlatformName] = useState("AyurConnect");
  const [supportEmail, setSupportEmail] = useState("support@ayurconnect.com");
  const [businessPhone, setBusinessPhone] = useState("+91-9876-543-210");

  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [doctorVerification, setDoctorVerification] = useState(true);

  const [bannerTitle, setBannerTitle] = useState("AYURCONNECT: Your Path to Holistic Well-being");
  const [bannerDesc, setBannerDesc] = useState("Discover ancient wisdom Ayurveda for the balanced and healthy life");
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
    // prepare payload -> replace with real API call
    const payload = {
      platformName,
      supportEmail,
      businessPhone,
      twoFactor,
      doctorVerification,
      banner: bannerFile ? bannerFile.name : null,
    };

    console.log("Saving Platform Settings:", payload);
    // show simple feedback (replace with toast/system)
    alert("Settings saved (this is a demo — wire API to persist).");
  };

  const handleCancel = () => {
    // simple reset behavior (customize as needed)
    setPlatformName("AyurConnect");
    setSupportEmail("support@ayurconnect.com");
    setBusinessPhone("+91-9876-543-210");
    setAdminPassword("");
    setShowPassword(false);
    setTwoFactor(true);
    setDoctorVerification(true);
    setBannerFile(null);
    setBannerPreview(null);
  };

  return (
    <section aria-labelledby="platform-settings-heading" className="space-y-6">
      <header>
        <h2 id="platform-settings-heading" className="text-3xl font-bold text-white mb-1">Platform Settings</h2>
        <p className="text-slate-400">Manage platform configuration, banners, and security settings.</p>
      </header>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Settings */}
        <div className="rounded-lg p-6 bg-slate-800/50 border border-slate-700/40 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">General Settings</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-1">
              <label className="block text-sm font-medium text-slate-300 mb-2">Platform Name</label>
              <input
                type="text"
                value={platformName}
                onChange={(e) => setPlatformName(e.target.value)}
                className="input input-bordered w-full bg-slate-800/60 text-slate-100 focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Support Email</label>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="input input-bordered w-full bg-slate-800/60 text-slate-100 focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Business Phone</label>
              <input
                type="tel"
                value={businessPhone}
                onChange={(e) => setBusinessPhone(e.target.value)}
                className="input input-bordered w-full bg-slate-800/60 text-slate-100 focus:border-emerald-400"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="rounded-lg p-6 bg-slate-800/50 border border-slate-700/40 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-xl">🛡️</span> Security Settings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Admin Password</label>
              <div className="flex gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter new admin password"
                  className="input input-bordered flex-1 bg-slate-800/60 text-slate-100 focus:border-emerald-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="btn btn-ghost px-3"
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">Choose a strong admin password and keep it secure.</p>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-300 mb-2">Account protections</label>

              <div className="flex items-center justify-between p-3 bg-slate-700/20 border border-slate-700/30 rounded-lg">
                <div>
                  <p className="text-sm text-slate-200 font-medium">Two-Factor Authentication</p>
                  <p className="text-xs text-slate-400">Require a second factor for admin access.</p>
                </div>
                <input
                  type="checkbox"
                  checked={twoFactor}
                  onChange={(e) => setTwoFactor(e.target.checked)}
                  className="toggle toggle-sm"
                  aria-label="Toggle two-factor authentication"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-700/20 border border-slate-700/30 rounded-lg">
                <div>
                  <p className="text-sm text-slate-200 font-medium">Enable Doctor Verification</p>
                  <p className="text-xs text-slate-400">Require manual verification for registered doctors.</p>
                </div>
                <input
                  type="checkbox"
                  checked={doctorVerification}
                  onChange={(e) => setDoctorVerification(e.target.checked)}
                  className="toggle toggle-sm"
                  aria-label="Toggle doctor verification"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Banner Management */}
        <div className="rounded-lg p-6 bg-slate-800/50 border border-slate-700/40 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white mb-4">Homepage Banner</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Banner Title</label>
                <input
                  type="text"
                  value={bannerTitle}
                  onChange={(e) => setBannerTitle(e.target.value)}
                  className="input input-bordered w-full bg-slate-800/60 text-slate-100 focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Banner Description</label>
                <textarea
                  value={bannerDesc}
                  onChange={(e) => setBannerDesc(e.target.value)}
                  rows={3}
                  className="textarea textarea-bordered w-full bg-slate-800/60 text-slate-100 focus:border-emerald-400 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Banner Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                  className="file-input file-input-bordered w-full bg-slate-800/60 text-slate-100"
                />
                <p className="text-xs text-slate-400 mt-2">Recommended: 1600×600 px. PNG or JPG.</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-slate-700/30 bg-slate-900/30">
              <div className="w-full h-36 bg-slate-800/30 rounded-lg overflow-hidden flex items-center justify-center">
                {bannerPreview ? (
                  // preview
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={bannerPreview} alt="Banner preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-slate-400 text-center">
                    <div className="text-3xl">🖼️</div>
                    <div className="text-sm mt-2">No banner uploaded</div>
                  </div>
                )}
              </div>

              <div className="text-xs text-slate-400 text-center">
                Preview
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="btn bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg"
          >
            💾 Save Changes
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-ghost border border-slate-700 text-slate-300 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
