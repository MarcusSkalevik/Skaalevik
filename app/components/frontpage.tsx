import Image from "next/image";
import React from 'react';
import meg from "../../public/images/meg.jpg";

const FrontPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:flex-1 md:pr-8 mt-8 md:mt-64 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-mono">Marcus Skålevik</h1>
        <p className="py-4 text-lg text-education">IT-Developer</p>
        <div className="mt-4 md:mt-0">
          {/* Add your button here */}
        </div>
        <div className="hidden md:block mt-15">
          {/* <p>19-year-old coding enthusiast who prefers front-end development.</p>
          <p>I love creating visually appealing and user-friendly interfaces.</p>
          <p className="mt-20 text-gray">Site is under development</p> */}
        </div>
      </div>
      <div className="flex-shrink-0 order-first md:order-none ">
        <div className="flex justify-center md:justify-start mt-32 ">
          <Image src={meg} alt="Marcus Skålevik" width={200} height={200} className="md:w-auto md:h-auto grayscale" />
        </div>
      </div>
      <div className="text-center md:text-left md:pl-8 mt-4 md:mt-0 order-last md:order-none md:hidden" style={{ marginBottom: "20px" }}>
        {/* <p>19-year-old coding enthusiast who prefers front-end development.</p>
        <p>I love creating visually appealing and user-friendly interfaces.</p>
        <p>Site is under development</p> */}
      </div>
    </div>
  );
};

export default FrontPage;
