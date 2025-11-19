import React from 'react'

const PriceSummary = ({ consultationType, baseFee, onPayNow }) => {
    const platformCharge = Math.round(baseFee * 0.1);
    const total = baseFee + platformCharge;

    return (
        <div className="bg-white border border-[#BDC2B3] rounded-xl p-6 shadow-sm sticky top-6">
            <h2 className="font-['Playfair_Display'] font-bold text-xl text-[#403D27] mb-4">
                Price Summary
            </h2>

            <div className="space-y-3 mb-4">
                <div className="flex justify-between font-['Inter']">
                    <span className="text-[#6d7571]">Consultation Type</span>
                    <span className="text-[#403D27] font-medium">{consultationType}</span>
                </div>

                <div className="flex justify-between font-['Inter']">
                    <span className="text-[#6d7571]">Base Fee</span>
                    <span className="text-[#403D27] font-medium">₹{baseFee}</span>
                </div>

                <div className="flex justify-between font-['Inter']">
                    <span className="text-[#6d7571]">Platform Charge</span>
                    <span className="text-[#403D27] font-medium">₹{platformCharge}</span>
                </div>

                <div className="border-t-2 border-[#BDC2B3] pt-3">
                    <div className="flex justify-between font-['Inter']">
                        <span className="text-[#403D27] font-bold text-lg">Total Amount</span>
                        <span className="text-[#403D27] font-bold text-xl">₹{total}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={onPayNow}
                className="w-full bg-gradient-to-r from-[#403D27] to-[#6d7571] text-white font-semibold rounded-lg shadow-md py-3 font-['Inter'] hover:shadow-lg transition-shadow"
            >
                Pay Now
            </button>

            <p className="text-xs text-[#6d7571] text-center mt-3 font-['Inter']">
                Secure payment powered by Razorpay
            </p>
        </div>
    );
};

export default PriceSummary