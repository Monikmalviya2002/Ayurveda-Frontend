import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, MessageSquare, Phone, Video, Upload, CheckCircle, Clock, Star, Award } from 'lucide-react';
import DoctorSummaryCard from '../components/ConsultancyBooking/DoctorSummaryCard.jsx';
import ConsultationModeCard from '../components/ConsultancyBooking/ConsultationModeCard.jsx';
import SlotSelector from '../components/ConsultancyBooking/SlotSelector.jsx';
import BasicInfoForm from '../components/ConsultancyBooking/BasicInfoForm.jsx';
import PriceSummary from '../components/ConsultancyBooking/PriceSummary.jsx';

// Mock doctor data
const doctorData = {
  id: "d1",
  name: "Dr. Meera Sharma",
  avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  qualification: "BAMS, MD Ayurveda",
  specialization: ["PCOD", "Thyroid", "Women's Health"],
  experience: "12 years",
  rating: 4.9,
  reviews: 342,
  fee: {
    chat: 299,
    voice: 399,
    video: 599
  },
  slots: {
    "2025-11-19": ["10:00 AM", "10:30 AM", "11:00 AM", "12:00 PM", "2:00 PM","3:00PM","4:00 PM","10:00 PM"],
    "2025-11-20": ["1:00 PM", "1:30 PM", "3:00 PM", "4:00 PM"],
    "2025-11-21": ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:30 PM"],
    "2025-11-22": ["9:00 AM", "10:30 AM", "12:00 PM", "2:30 PM"],
    "2025-11-23": ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM"]
  }
};


const ConsultationBookingPage = () => {
  const [selectedMode, setSelectedMode] = useState('chat');
  const [selectedDate, setSelectedDate] = useState(Object.keys(doctorData.slots)[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: '',
      age: '',
      gender: '',
      phone: '',
      description: '',
    }
  });

  const consultationModes = [
    {
      mode: 'chat',
      icon: MessageSquare,
      title: 'Chat Consultation',
      price: doctorData.fee.chat,
      info: 'Text-based consultation with the doctor'
    },
    {
      mode: 'voice',
      icon: Phone,
      title: 'Voice Call',
      price: doctorData.fee.voice,
      info: 'Audio call consultation with the doctor'
    },
    {
      mode: 'video',
      icon: Video,
      title: 'Video Call',
      price: doctorData.fee.video,
      info: 'Face-to-face video consultation'
    }
  ];

  const onSubmit = (data) => {
    if (!selectedTime) {
      alert('Please select a time slot');
      return;
    }
    const bookingData = {
      ...data,
      consultationType: selectedMode,
      date: selectedDate,
      time: selectedTime,
      doctorId: doctorData.id,
      totalAmount: doctorData.fee[selectedMode] + Math.round(doctorData.fee[selectedMode] * 0.1)
    };
    
    console.log('Booking Data:', bookingData);
    alert('Proceeding to payment...');
  };

  return (
    <div className="min-h-screen bg-[#E2E8D7] ">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DoctorSummaryCard doctor={doctorData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Consultation Mode Selection */}
            <div className="mb-6">
              <h2 className="font-['Playfair_Display'] font-bold text-xl text-[#403D27] mb-4">
                Select Consultation Mode
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {consultationModes.map((mode) => (
                  <ConsultationModeCard
                    key={mode.mode}
                    {...mode}
                    selected={selectedMode === mode.mode}
                    onSelect={() => setSelectedMode(mode.mode)}
                  />
                ))}
              </div>
            </div>
            
            {/* Slot Selector */}
            <SlotSelector
              slots={doctorData.slots}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onDateSelect={setSelectedDate}
              onTimeSelect={setSelectedTime}
            />
            
            {/* Basic Info Form */}
            <BasicInfoForm register={register} errors={errors} watch={watch} />
          </div>
          
          {/* Price Summary - Desktop */}
          <div className="hidden lg:block">
            <PriceSummary
              consultationType={consultationModes.find(m => m.mode === selectedMode)?.title}
              baseFee={doctorData.fee[selectedMode]}
              onPayNow={handleSubmit(onSubmit)}
            />
          </div>
        </div>
        
        {/* Price Summary - Mobile (Sticky Bottom) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#BDC2B3] p-4 shadow-lg z-50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs text-[#6d7571] font-['Inter']">Total Amount</p>
                <p className="text-2xl font-bold text-[#403D27] font-['Inter']">
                  ₹{doctorData.fee[selectedMode] + Math.round(doctorData.fee[selectedMode] * 0.1)}
                </p>
              </div>
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-gradient-to-r from-[#403D27] to-[#6d7571] text-white font-semibold rounded-lg shadow-md px-8 py-3 font-['Inter']"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Spacer for mobile sticky footer */}
        <div className="lg:hidden h-24"></div>
      </div>
    </div>
  );
};

export default ConsultationBookingPage;