import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Login from '../components/Login';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState('login');

  return (
    <main className="min-h-screen bg-base-200">
      {/* Navbar */}
      <header className="bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto">
          <Navbar
            onLoginClick={() => {
              setMode('login');
              setIsModalOpen(true);
            }}
            onSignupClick={() => {
              setMode('signup');
              setIsModalOpen(true);
            }}
          />
        </div>
      </header>

      <section className="container">
        <HeroSection
          onFindDoctor={() => {
            setMode('login');
            setIsModalOpen(true);
          }}
          onExploreWisdom={() => {
            setMode('signup');
            setIsModalOpen(true);
          }}
        />
      </section>     
    </main>
  );
}
