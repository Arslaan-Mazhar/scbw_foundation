"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const RouteToHomePage: React.FC = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // This ensures the component is only mounted on the client
  }, []);

  const navigateToHome = () => {
    if (mounted) {
      router.push('/');  // Push to the homepage
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/welcome.png')" }}></div>

      {/* Content Section */}
      <div className="relative z-10 p-10 bg-white bg-opacity-30 rounded-lg shadow-lg max-w-2xl text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-pulse">
          Welcome to Special Campaign for Blind Welfare (SCBW) Foundation
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Empowering the visually impaired community through our various initiatives. Join us to make a difference!
        </p>
        <button
          onClick={navigateToHome}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transform hover:scale-105 transition-all duration-300"
        >
          Click here to go to Website Homepage
        </button>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-floating"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-floating"></div>
    </div>
  );
};

export default RouteToHomePage;
