// frontpage.tsx
import Image from "next/image";
import React from 'react';
import meg from "../../public/images/meg.jpg";

const FrontPage: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1 pr-8">
        <div className="text-center">
          <h1 className="text-4xl font-mono">Marcus Skålevik</h1>
          <p className="py-4 text-lg text-customBlue">IT-Developer</p>
          <p>19-year-old coding enthusiast who prefers front-end development.</p>
          <p>I love creating visually appealing and user-friendly interfaces.</p>
          <div className="mt-4"> {/* Added margin-top for space above the button */}
            <button className="bg-customBlue text-white py-2 px-4 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:border-blue-300">
              About Me
            </button>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Image src={meg} alt="Marcus Skålevik" width={200} height={200} />
      </div>
    </div>
  );
};

export default FrontPage;
