import React from "react";
import { PREvents } from "../assets/constants/constant.js";
import HeaderPages from "./HeaderPages.jsx";
import { PRBanner } from "../assets/images/PageBanners/import.js";

export default function PR({ productType = "Biologics" }) {
  const pageTitle = "Events and Exhibition Attended";

  // Map through the product list and create product components
  const productComp = PREvents.map((event, idx) => {
    return (
      <div
        key={idx}
        className="flex flex-col items-center justify-between bg-white shadow-lg hover:shadow-2xl border border-gray-300 rounded-2xl p-6 sm:p-8 cursor-pointer transform hover:scale-105 transition-transform duration-300
        lg:mt-10 md:mt-8 mt-6"
      >
        {/* Event Image */}
        <img
          src={event.Image}
          alt={event.Title}
          className="w-full h-40 sm:h-44 object-cover rounded-lg mb-4"
        />

        {/* Event Title */}
        <h2 className="font-bold text-xl sm:text-2xl text-gray-800 mb-2 text-center">
          {event.Title}
        </h2>

        {/* Event Details */}
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">{event.Location}</p>
          <p className="text-sm text-gray-500 mt-1">{event.Dates}</p>
        </div>
      </div>
    );
  });

  return (
    <>
    <HeaderPages/>
    <div className="">
        {/* Image Banner */} 
        <div className="relative w-full">
          <img
            src={PRBanner} 
            alt="Banner"
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 text-center">
            <h1 className="inline-block px-6 py-2 font-bannerHeading lg:text-8xl md:text-7xl text-4xl text-black font-extrabold">
              {pageTitle}
            </h1>
          </div>
        </div>

        {/* Product List */}
        <div className="grid px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:px-32 md:px-16 mt-20">
        {productComp}
      </div>
      </div>
    </>
  );
}

