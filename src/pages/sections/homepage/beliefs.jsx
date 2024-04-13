import React from "react";
import Link from "next/link";
import Image from "next/image";

const Beliefs = () => {
  return (
    <div className="flex flex-col w-full text-secondary">
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1">
          <div className="w-full p-16 h-full flex flex-col gap-6">
            <div>
              <h3 className="text-xl ">GET CONNECTED WITH US</h3>
              <span></span>
            </div>

            <h1 className="text-5xl font-bold">What We Believe</h1>
            <p className="text-2xl font-semibold">
              We’re a dynamic spiritual body empowered by the Holy Spirit to
              share Christ with as many people as possible in our church,
              community, and throughout the world.
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-[#443353] px-8 py-3 text-white hover:bg-white transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353] w-fit"
              href="/about"
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
              <span className="text-md font-medium">
                {" "}
                Know More About Twin Palm{" "}
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-1 relative overflow-hidden h-full w-full">
        <Image
          src="/beliefs.jpg"
          alt="beliefs image"
          layout="fill"
          objectFit="cover"
          className=" transition-opacity opacity-0 duration-[1.2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
         
        />
        </div>
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 h-full w-full">
        <div className="col-span-1 relative overflow-hidden h-full w-full">
        <Image
          src="/tpbc_hero.jpeg"
          alt="beliefs image"
          layout="fill"
          objectFit="cover"
          className=" transition-opacity opacity-0 duration-[1.2s]"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
         
        />
        </div>
        </div>
        <div className="col-span-1">
          <div className="w-full p-16 h-full flex flex-col gap-6">
            <div>
              <h3 className="text-xl fon">KNOW MORE ABOUT US</h3>
              <span></span>
            </div>

            <h1 className="text-5xl font-bold">Our Ministries</h1>
            <p className="text-2xl font-semibold">
              We’re a dynamic spiritual body empowered by the Holy Spirit to
              share Christ with as many people as possible in our church,
              community, and throughout the world.
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-[#443353] px-8 py-3 text-white hover:bg-white transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353] w-fit"
              href="/ministries"
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
              <span className="text-md font-medium">
                Learn About Our Ministries
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
