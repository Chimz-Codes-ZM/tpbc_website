import React from "react";
import Image from "next/image";
import Link from "next/link";
import { events } from "@/pages/data";

const Events = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center p-20 text-secondary">
      <div>
        <h3 className="text-xl ">WHERE TO FIND US</h3>
        <span></span>
      </div>

      <h1 className="text-4xl font-semibold">Our Events</h1>

      <div className="flex flex-col gap-10 p-8 items-center ">
        {events.map((event) => (
          <div className="flex items-center gap-10 p-10 event-card" key={event.id}>
            
              <h1 className="text-4xl">{event.date}</h1>

              <span className="h-64 w-64 relative">
                <Image
                  src={event.image}
                  alt="beliefs image"
                  layout="fill"
                  objectFit="cover"
                  className=" transition-opacity opacity-0 duration-[1.2s]"
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />
              </span>
              <div className="flex flex-col justify-between sm:min-h-44 text-4xl w-64 text-wrap">
                <h1>{event.title}</h1>

                <span className="flex gap-2 text-2xl">
                  <h3>{event.start_time} </h3> to <h3>{event.end_time}</h3>
                </span>
              </div>

              <Link
                className="inline-flex items-center gap-2 bg-[#443353] px-8 py-3 text-white hover:bg-white transition-colors duration-100 delay-75 hover:text-[#443353] focus:outline-none focus:ring active:text-[#443353] w-fit h-fit"
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
                <span className="text-md font-medium">More Details</span>
              </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
