import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState('login');

  const openLogin = () => {
    setMode('login');
    setIsModalOpen(true);
  };

  const openSignup = () => {
    setMode('signup');
    setIsModalOpen(true);
  };

  const doctors = [
    {
      id: 1,
      name: 'Dr. R. Sharma',
      title: 'MD (Ayurveda)',
      clinic: 'Sushain Clinic',
      bio: '20+ years experience in Panchakarma & chronic care.',
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
    },
    {
      id: 2,
      name: 'Dr. Meera Gupta',
      title: 'BAMS, Ayurveda Specialist',
      clinic: 'Sushain Clinic',
      bio: 'Focus on digestive health and personalized prakriti plans.',
      avatar: 'https://www.shutterstock.com/image-photo/happy-female-doctor-stethoscope-on-600nw-2527451925.jpg',
    },
    {
      id: 3,
      name: 'Dr. Anil Rao',
      title: 'BAMS, Wellness Consultant',
      clinic: 'Sushain Clinic',
      bio: 'Yoga-therapy integrated with classical Ayurvedic protocols.',
      avatar: 'https://cdn.prod.website-files.com/62d4f06f9c1357a606c3b7ef/65ddf3cdf19abaf5688af2f8_shutterstock_1933145801%20(1).jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-base-200">
      <header className="sticky top-0 z-50">
        <Navbar onLoginClick={openLogin} onSignupClick={openSignup} />
      </header>

      <section className="container mx-auto">
        <HeroSection
          onFindDoctor={openLogin}
          onExploreWisdom={openSignup}
        />
      </section>

    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white-900 leading-tight">
          The Ayurvedic Way of Living
        </h2>

        <p className="mt-5 text-white-700 text-lg md:text-xl leading-relaxed">
          Ayurveda is a time-tested system of natural healing that emphasizes balance — of body, mind, and environment.
          At <span className="font-semibold text-green-500">AYURCONNECT</span> we celebrate daily habits, nourishing food choices,
          and gentle therapies that support long-term vitality.
        </p>

        <div className="mt-8 text-left prose prose-lg mx-auto">
          <h3 className="text-2xl font-semibold text-green-500">Why balance matters</h3>
          <p className="text-white-700">
            Balance is the foundation of health in Ayurveda. When your doshas (bio-energies) are in harmony,
            digestion, sleep, immunity and mental clarity improve naturally. Our platform connects you with certified
            practitioners who combine classical wisdom with modern diagnostics to restore and maintain balance.
          </p>

          <h3 className="text-2xl font-semibold text-green-500 mt-6">Holistic health — beyond symptoms</h3>
          <p className="text-white-700">
            We focus on root causes, not only symptom relief. Personalized lifestyle guidance, herbal therapeutics,
            dietary adjustments and targeted therapies form a complete, long-term plan for wellbeing.
          </p>
        </div>
      </div>
    </section>


      <section className="bg-gradient-to-b from-white to-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-green-900">
                Certified Doctors — Trusted Contributions
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Consistent care from verified professionals (Sushain Clinic partners).
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span className="text-sm text-gray-600">Verified</span>
              <div className="badge badge-success badge-outline">Sushain Clinic</div>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doc) => (
              <article
                key={doc.id}
                className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-green-200"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-16 h-16 rounded-full object-cover shadow"
                    onError={(e) => { e.currentTarget.src = '/src/assets/default-doc.jpg'; }}
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-semibold text-green-800">{doc.name}</h4>
                        <p className="text-sm text-gray-600">{doc.title} • <span className="font-medium">{doc.clinic}</span></p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Experience</div>
                        <div className="font-medium text-green-700">20+ yrs</div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-gray-700">{doc.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-3 items-center">
                      <button
                        onClick={openLogin}
                        className="btn btn-sm bg-amber-300 text-green-900 font-semibold rounded-full border-none hover:bg-amber-400"
                      >
                        Book Consultation
                      </button>

                      <button
                        className="btn btn-ghost btn-sm text-gray-700"
                        onClick={() => alert(`Viewing Dr. ${doc.name}'s profile — implement route.`)}
                      >
                        View Profile
                      </button>

                      <span className="ml-auto hidden sm:inline-flex items-center gap-2 text-xs text-gray-500">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                          <path d="M10 15l-5.878 3.09L5.5 11.18 1 7.09l6.06-.88L10 1l2.94 5.21L19 7.09l-4.5 4.09 1.378 6.91z" />
                        </svg>
                        Trusted
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto ">
        <div className=" bg-gradient-to-r from-amber-50 to-amber-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-green-900">Ready to start your wellness journey?</h4>
            <p className="text-gray-700">Connect with certified Ayurvedic doctors and begin a personalized plan.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={openLogin} className="btn btn-outline bg-green-600 text-white rounded-full px-6 py-3 shadow-md hover:bg-green-700">
              Find a Doctor
            </button>
            <button onClick={openSignup} className="btn btn-outline bg-green-600 rounded-full px-6 py-3">
              Join AYURCONNECT
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
