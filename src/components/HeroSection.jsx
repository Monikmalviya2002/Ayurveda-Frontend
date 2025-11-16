import React from "react";

export default function HeroSection({ onFindDoctor, onExploreWisdom }) {
  return (
    <section className="relative h-screen max-h-96 md:max-h-screen bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="text-green-900 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-pretty">
                AYURCONNECT: Your Path to Holistic Well-being
              </h1>

              <p className="text-lg md:text-xl opacity-90 text-pretty">
                Discover ancient wisdom of Ayurveda for a balanced and healthy life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onFindDoctor}
                  className="btn bg-amber-300 text-green-900 font-bold border-none hover:bg-amber-400 rounded-full"
                >
                  FIND A CERTIFIED DOCTOR
                </button>

                <button
                  onClick={onExploreWisdom}
                  className="btn btn-outline border-amber-300 text-green-900 hover:bg-green-100 rounded-full"
                >
                  EXPLORE AYURVEDA WISDOM
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative h-full">
                <img
                  src="https://media.istockphoto.com/id/612650676/photo/young-man-exercising-yoga.jpg?s=612x612&w=0&k=20&c=2etPhlHi_6hYN7xkrdRlpPx2scZpBIj3PM_kO4v9-zU="
                  alt="Ayurveda Wellness"
                  className="w-full h-full object-cover rounded-2xl shadow-xl opacity-95"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
