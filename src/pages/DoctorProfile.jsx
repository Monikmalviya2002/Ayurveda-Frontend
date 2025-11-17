import { useParams, Link } from "react-router-dom";
import doctors from "../components/Doctor/Data";
import Navbar from "../components/NavBar.jsx";

const DoctorProfile = () => {
  const { id } = useParams();

  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return (
      <div className="p-10 text-red-600 text-center text-xl">
        Doctor not found
      </div>
    );
  }

  return (
     
    <div className="min-h-screen bg-[#E2E8D7] font-body"> 
              <Navbar/>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md flex gap-6 my-4">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="w-40 h-40 rounded-xl object-cover border"
          />

          <div>
            <h1 className="text-3xl font-bold text-[#403D27]">{doctor.name}</h1>
            <p className="text-[#6d7571]">{doctor.qualification}</p>

            <p className="text-[#403D27] font-semibold mt-3">
              {doctor.experience}
            </p>

            <p className="text-yellow-600 mt-1 font-medium">
              ⭐ {doctor.rating} ({doctor.totalReviews} reviews)
            </p>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-semibold text-[#403D27]">Specializations</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {doctor.specialization.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 bg-[#B7B687] text-white rounded-lg text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-semibold text-[#403D27] mb-2">
            Consultation Modes
          </h2>

          <div className="flex gap-3">
            {doctor.consultationModes.map((mode) => (
              <span
                key={mode}
                className="px-3 py-1 bg-[#F4F7EF] border rounded-lg text-sm text-[#403D27]"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-semibold text-[#403D27]">Consultation Fee</h2>
          <p className="text-3xl font-bold mt-2 text-black">₹{doctor.fee}</p>
        </div>

       
        <div className="bg-white p-6 rounded-xl shadow-md mt-6 ">
          <h2 className="text-xl font-semibold text-[#403D27]">Reviews</h2>
          <p className="text-[#6d7571] mt-1">
             ⭐⭐⭐⭐⭐
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
