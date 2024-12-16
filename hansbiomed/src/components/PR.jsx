import React from "react";
import { PREvents } from "../assets/constants/constant.js";

export default function PR({ productType = "Biologics" }) {
  const pageTitle = "Public Relations";

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
    <div className="container mx-auto px-4">
      <div className="mt-28"></div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mt-8 mb-6">{pageTitle}</h1>

      {/* Responsive Product List */}
      <div className="grid px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:px-32 md:px-16">
        {productComp}
      </div>
    </div>
  );
}
