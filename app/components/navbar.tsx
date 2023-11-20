// Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
return (
    <nav className="p-4 fixed top-0 w-full z-10">
    <div className="container mx-auto">
        <div className="flex items-center justify-between">
        {/* <div className="text-white font-bold text-lg">Skaalevik</div> */}
        <div className="space-x-4">
            {/* <a href="#" className="text-white hover:text-gray-600 transition duration-300 ease-in-out">Home</a>
            <a href="#" className="text-white hover:text-gray-600 transition duration-300 ease-in-out">Om meg</a> */}
        </div>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
