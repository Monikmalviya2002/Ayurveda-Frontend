import React from "react";
import { Video, BookOpen, Apple, Heart } from "lucide-react";
import Navbar from "./NavBar";

export default function VideoDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Navbar/>
     
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ayurveda Wellness Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Expert-curated explainers & lifestyle videos on yoga, diet, home remedies, and seasonal wellness.
        </p>
      </header>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

       
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Video className="w-10 h-10 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900 mt-3">Videos</h2>
          <p className="text-gray-600 text-sm mt-2">
         Yoga
            
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
            Explore Videos
          </button>
        </div>

       
       <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Video className="w-10 h-10 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900 mt-3">Videos</h2>
          <p className="text-gray-600 text-sm mt-2">
             Diet
            
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
           Explore Video
          </button>
        </div>

        {/* DIET GUIDE CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Video className="w-10 h-10 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900 mt-3">Videos</h2>
          <p className="text-gray-600 text-sm mt-2">
            Home Remedies
            
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
           Explore Video
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Video className="w-10 h-10 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900 mt-3">Videos</h2>
          <p className="text-gray-600 text-sm mt-2">
           Seasonal Wellness
            
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
           Explore Video
          </button>
        </div>

      </div>
    </div>
  );
}
