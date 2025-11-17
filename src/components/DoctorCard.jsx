import { MessageSquare, Phone, Star, Video } from 'lucide-react'
import React from 'react'
import { Link } from "react-router-dom";


const DoctorCard = ({doctor}) => {
    return (
        <div className="card bg-white border border-[#BDC2B3] rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-[#B7B687] transition-all duration-300">
            <div className="card-body p-6">
                {/* Doctor Info */}
                <div className="flex gap-4 mb-4">
                    <div className="avatar">
                        <div className="w-20 h-20 rounded-full ring ring-[#B7B687] ring-offset-2">
                            <img src={doctor.avatar} alt={doctor.name} />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#403D27] mb-1">{doctor.name}</h3>
                        <p className="text-sm text-[#6d7571] mb-2">{doctor.qualification}</p>
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-4 h-4 fill-[#B7B687] text-[#B7B687]" />
                            <span className="font-semibold text-[#403D27]">{doctor.rating}</span>
                            <span className="text-xs text-[#6d7571]">({doctor.totalReviews} reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Specialization Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {doctor.specialization.map((spec, idx) => (
                        <div key={idx} className="badge bg-[#B7B687] text-white border-none text-xs px-3 py-2">
                            {spec}
                        </div>
                    ))}
                </div>

                {/* Experience & Fee */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-xs text-[#6d7571]">Experience</p>
                        <p className="font-semibold text-[#403D27]">{doctor.experience}</p>
                    </div>
                    <div>
                        <p className="text-xs text-[#6d7571]">Consultation Fee</p>
                        <p className="font-semibold text-[#403D27]">₹{doctor.fee}</p>
                    </div>
                </div>

                {/* Consultation Modes */}
                <div className="flex gap-3 mb-4 pb-4 border-b border-[#BDC2B3]">
                    {doctor.consultationModes.includes('Chat') && (
                        <div className="flex items-center gap-1 text-[#6d7571]">
                            <MessageSquare className="w-5 h-5 text-[#B7B687]" />
                            <span className="text-xs">Chat</span>
                        </div>
                    )}
                    {doctor.consultationModes.includes('Video') && (
                        <div className="flex items-center gap-1 text-[#6d7571]">
                            <Video className="w-5 h-5 text-[#B7B687]" />
                            <span className="text-xs">Video</span>
                        </div>
                    )}
                    {doctor.consultationModes.includes('Voice') && (
                        <div className="flex items-center gap-1 text-[#6d7571]">
                            <Phone className="w-5 h-5 text-[#B7B687]" />
                            <span className="text-xs">Voice</span>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    
            <Link to={`/doctors/${doctor.id}`}
         className="btn flex-1 btn-outline border-[#BDC2B3] text-[#403D27] hover:bg-[#E2E8D7] 
              hover:border-[#B7B687]">

                  View Profile
                </Link>
                    <button className="btn flex-1 bg-linear-to-r from-[#403D27] to-[#6d7571] text-white border-none hover:opacity-90">
                        Consult Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard