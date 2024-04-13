import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row relative justify-center items-center px-10 sm:px-28 text-secondary mb-10">
      <div className="w-full sm:w-1/2 p-10 h-full flex flex-col gap-6">
        <div>
          <h3 className="text-xl">A PLACE TO CALL HOME</h3>
          <span></span>
        </div>

        <h1 className="text-7xl">Twin Palm Baptist Church</h1>
        <p>
          We’re a group of people from all ages, backgrounds, and cultures who
          believe there’s more to life than what the world says. , love people,
          and change the world.
        </p>
        <Link
          className="inline-flex items-center gap-2 bg-[#443353] px-8 py-3 text-white hover:bg-white transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353] w-fit"
          href="/contact"
        >
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <span className="h-10 border-[#4D3C5B] border"></span>
          <span className="text-md font-medium"> Join Now </span>
        </Link>
      </div>
      <div className="w-full sm:w-1/2"></div>
    </div>
  );
};

export default Hero;
