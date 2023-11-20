import React from 'react';
import Navbar from '../app/components/navbar'; 
import FrontPage from "../app/components/frontpage";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black from-gray-700 via-gray-900 to-black text-white">
      <Navbar/>
      <FrontPage />
    </main>
  );
}
