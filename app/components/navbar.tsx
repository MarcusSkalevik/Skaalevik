import logo from "../../public/images/logo.png";
import React from 'react';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="p-0 fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center"> {/* Center the content */}
          <div className="text-white font-bold text-lg ">
            <a href="#">
              <Image src={logo} alt="Marcus Skålevik" width={200} height={200} />
            </a>
          </div>
          {/* Add space-x and links here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
