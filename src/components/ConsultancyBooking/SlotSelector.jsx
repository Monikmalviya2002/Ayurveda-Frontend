import React from 'react'

const SlotSelector = ({ slots, selectedDate, selectedTime, onDateSelect, onTimeSelect }) => {
  const dates = Object.keys(slots);
  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isSlotAvailable = (slotTime, slotDate) => {
    const today = new Date();
    const slotDateObj = new Date(slotDate);
    
    // If the slot is not for today, it's available
    if (slotDateObj.toDateString() !== today.toDateString()) {
      return true;
    }
    
    // Parse slot time (e.g., "10:00 AM" or "2:30 PM")
    const [time, period] = slotTime.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    let slotHours = hours;
    if (period === 'PM' && hours !== 12) {
      slotHours += 12;
    } else if (period === 'AM' && hours === 12) {
      slotHours = 0;
    }
    
    // Create a date object for the slot time
    const slotDateTime = new Date(slotDateObj);
    slotDateTime.setHours(slotHours, minutes, 0, 0);
    
    // Calculate 30 minutes from now
    const minimumTime = new Date(today.getTime() + 30 * 60 * 1000);
    
    // Slot is available if it's at least 30 minutes from now
    return slotDateTime > minimumTime;
  };

  return (
    <div className="bg-white border border-[#BDC2B3] rounded-xl p-6 shadow-sm mb-6">
      <h2 className="font-['Playfair_Display'] font-bold text-xl text-[#403D27] mb-4">
        Select Time Slot
      </h2>
      
      {/* Date Selector */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex gap-3 min-w-max">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => onDateSelect(date)}
              className={`px-4 py-2 rounded-full font-['Inter'] font-medium transition-all whitespace-nowrap ${
                selectedDate === date
                  ? 'bg-[#403D27] text-white'
                  : 'bg-white border-2 border-[#BDC2B3] text-[#403D27] hover:border-[#B7B687]'
              }`}
            >
              {formatDate(date)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Time Slots Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {slots[selectedDate]?.map((time) => {
          const available = isSlotAvailable(time, selectedDate);
          return (
            <button
              key={time}
              onClick={() => available && onTimeSelect(time)}
              disabled={!available}
              className={`p-3 rounded-lg border-2 font-['Inter'] font-medium transition-all ${
                !available
                  ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
                  : selectedTime === time
                  ? 'bg-[#403D27] text-white border-[#403D27]'
                  : 'bg-white border-[#BDC2B3] text-[#403D27] hover:border-[#B7B687] cursor-pointer'
              }`}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
};


export default SlotSelector