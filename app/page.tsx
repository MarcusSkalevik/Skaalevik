import React from 'react';
import Navbar from '../app/components/navbar'; 
import FrontPage from '../app/components/frontpage';
import About from '../app/components/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-lightbrown text-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        {/* Front Page */}
        <FrontPage />

        {/* About */}
        <div className="mt-64"> {/* Adjust the spacing using mt (margin-top) */}
          <About />
        </div>
      </div>
    </div>
  );
}
