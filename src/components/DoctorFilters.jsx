import { Filter } from 'lucide-react';
import React from 'react'

const DoctorFilters = ({ filters, setFilters, onReset }) => {
    const specializations = ["Skin Care", "Hair Loss", "PCOD", "Thyroid", "Weight Management", "General Physician", "Women's Health", "Digestion"];
    const handleSpecializationToggle = (spec) => {
        setFilters(prev => ({
            ...prev,
            specializations: prev.specializations.includes(spec)
                ? prev.specializations.filter(s => s !== spec)
                : [...prev.specializations, spec]
        }));
    };

    return (
        <div className="bg-white border border-[#BDC2B3] rounded-xl p-6 sticky top-24">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-[#403D27] flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                </h3>
                <button
                    onClick={onReset}
                    className="text-sm text-[#6d7571] hover:text-[#403D27] underline"
                >
                    Reset All
                </button>
            </div>

            {/* Specialization */}
            <div className="mb-6">
                <h4 className="font-semibold text-[#403D27] mb-3">Specialization</h4>
                <div className="space-y-2">
                    {specializations.map((spec) => (
                        <label key={spec} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.specializations.includes(spec)}
                                onChange={() => handleSpecializationToggle(spec)}
                                className="checkbox text-green-600 checkbox-sm border-[#BDC2B3] checked:border-[#B7B687] [--chkbg:#B7B687]"
                            />
                            <span className="text-sm text-[#403D27]">{spec}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Gender Preference */}
            <div className="mb-6">
                <h4 className="font-semibold text-[#403D27] mb-3">Gender Preference</h4>
                <select
                    value={filters.gender}
                    onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
                    className="select bg-white select-bordered w-full border-[#BDC2B3] focus:border-[#B7B687] text-[#403D27]"
                >
                    <option value="all">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            {/* Experience */}
            <div>
                <h4 className="font-semibold text-[#403D27] mb-3">Experience</h4>
                <select
                    value={filters.experience}
                    onChange={(e) => setFilters(prev => ({ ...prev, experience: e.target.value }))}
                    className="select bg-white select-bordered w-full border-[#BDC2B3] focus:border-[#B7B687] text-[#403D27]"
                >
                    <option value="all">All</option>
                    <option value="1-5">1-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                </select>
            </div>
        </div>
    );
};

export default DoctorFilters