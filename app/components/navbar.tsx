import logo from "../../public/images/logo.png";
import React from 'react';
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="p-0 w-full z-10 fixed top-0 ml-16"> {/* Increase the left margin to move the entire Navbar more to the right */}
      <div className="container mx-auto h-20 flex items-center justify-center"> {/* Center the content */}
        <div className="text-white font-bold text-lg">
          <a href="#">
            <Image src={logo} alt="Marcus Skålevik" width={200} height={200} />
          </a>
        </div>
        <div className="flex ml-4 space-x-4"> {/* Add ml-4 to create space between logo and subpages */}
          {/* <a href="#" className="text-education hover:text-black">About</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
