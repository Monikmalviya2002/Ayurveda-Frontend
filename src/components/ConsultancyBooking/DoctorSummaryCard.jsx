import { Award, Star } from 'lucide-react';
import React from 'react'

const DoctorSummaryCard = ({ doctor }) => {
    return (
        <div className="bg-white border border-[#BDC2B3] rounded-xl p-6 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={doctor.avatar}
                    alt={doctor.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-[#E2E8D7]"
                />
                <div className="flex-1">
                    <h1 className="font-['Playfair_Display'] font-bold text-2xl md:text-3xl text-[#403D27] mb-2">
                        {doctor.name}
                    </h1>
                    <p className="font-['Inter'] text-[#6d7571] mb-3">{doctor.qualification}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                        {doctor.specialization.map((spec, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-[#B7B687] text-white text-sm rounded-full font-['Inter']"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm font-['Inter'] text-[#6d7571]">
                        <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span>{doctor.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-[#403D27]">{doctor.rating}</span>
                            <span>({doctor.reviews} reviews)</span>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm font-['Inter']">
                        <div>
                            <span className="text-[#6d7571]">Chat: </span>
                            <span className="font-semibold text-[#403D27]">₹{doctor.fee.chat}</span>
                        </div>
                        <div>
                            <span className="text-[#6d7571]">Voice: </span>
                            <span className="font-semibold text-[#403D27]">₹{doctor.fee.voice}</span>
                        </div>
                        <div>
                            <span className="text-[#6d7571]">Video: </span>
                            <span className="font-semibold text-[#403D27]">₹{doctor.fee.video}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DoctorSummaryCard