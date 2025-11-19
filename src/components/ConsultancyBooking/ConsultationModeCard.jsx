import { CheckCircle } from 'lucide-react';
import React from 'react'

const ConsultationModeCard = ({ mode, icon: Icon, title, price, info, selected, onSelect }) => {
    return (
        <div
            onClick={onSelect}
            className={`cursor-pointer rounded-lg p-4 border-2 transition-all duration-300 ${selected
                    ? 'bg-[#E2E8D7] border-[#B7B687] shadow-md'
                    : 'bg-white border-[#BDC2B3] hover:border-[#B7B687]'
                }`}
        >
            <div className="flex items-start gap-3">
                <div className={`p-3 rounded-lg ${selected ? 'bg-[#403D27]' : 'bg-[#E2E8D7]'}`}>
                    <Icon className={`w-6 h-6 ${selected ? 'text-white' : 'text-[#403D27]'}`} />
                </div>
                <div className="flex-1">
                    <h3 className="font-['Inter'] font-semibold text-[#403D27] text-lg mb-1">{title}</h3>
                    <p className="text-sm text-[#6d7571] font-['Inter'] mb-2">{info}</p>
                    <p className="font-['Inter'] font-bold text-[#403D27] text-xl">₹{price}</p>
                </div>
                {selected && <CheckCircle className="w-6 h-6 text-[#B7B687]" />}
            </div>
        </div>
    );
};

export default ConsultationModeCard