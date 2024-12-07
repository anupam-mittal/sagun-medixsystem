import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
// import slider1 from "../assets/slider1.png";
// import slider2 from "../assets/slider2.png";
// import slider3 from "../assets/slider3.png";
// import slider4 from "../assets/slider4.png";
import bestMain from "../assets/bestMain.png";
import trustMain from "../assets/trustMain.png";
import growthMain from "../assets/growthMain.png";

import slider1 from "../assets/images/carousel/1og.png";
import slider2 from "../assets/images/carousel/2og.png";
import slider3 from "../assets/images/carousel/3og.png";
import slider4 from "../assets/images/carousel/4og.png";

import { useLocation } from "react-router-dom";

const section1Items = [
  {
    img: bestMain,
    title: "Best",
    desc: "Delivers products with optimal quality for customer satisfaction",
  },
  {
    img: trustMain,
    title: "Easy Payment Modes",
    desc: "Supports almost all the payment options available and ensures security between transactions",
  },
  {
    img: growthMain,
    title: "Delivery Network",
    desc: "Large delivery network with a constant growth",
  },
];

const section2Items = [
  {
    preHeading: "",
    heading: "3.9",
    postHeading: "/5",
    desc: "Achieved a high rating from past and current customers.",
    details: "(Customer reviews and ratings)",
  },
  {
    preHeading: "",
    heading: "100",
    postHeading: "% authenticity",
    desc: "No drug is sold without a valid prescription",
    details:
      "(Keeps the product usage safe and authentic)",
  },
  {
    preHeading: "",
    heading: "1.5",
    postHeading: "Crores",
    desc: "Achieved an approx annual turnover of 40L-1.5Cr",
    details: "(growth rate gradually increasing)",
  },
];

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    { id: 1, src: slider1, caption: "Enhancing Beauty, Inspiring Confidence" },
    { id: 2, src: slider2, caption: "Your Trusted Partner in Aesthetic Solutions" },
    { id: 3, src: slider3, caption: "Where Innovation Meets Elegance" },
    { id: 4, src: slider4, caption: "Elevating Your Beauty, One Product at a Time" },
  ];
  const nextSlide = () => {
    setSlideIndex((prev) => (prev === slides.length ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 1 ? slides.length : prev - 1));
  };

  const setCurrentSlide = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full  mx-auto bg-black h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${
            slideIndex === index + 1 ? "block" : "hidden"
          } transition-opacity duration-1000 ease-in-out`}
        >
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-36 left-16 bg-opacity-50  p-4 w-96 text-huge font-extrabold font-caveat text-black ">
            {slide.caption}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-2xl font-bold p-4 hover:bg-black bg-opacity-50 rounded-r hover:bg-opacity-70"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-2xl font-bold p-4 hover:bg-black bg-opacity-50 rounded-l hover:bg-opacity-70"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              slideIndex === index + 1 ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    // Wait for the page to load, then scroll to the section
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }, [location]);

  const section1Comp = section1Items.map((ele, index) => {
    return (
      <div
        key={index}
        className="flex flex-col text-center items-center w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-6 space-y-4"
      >
        <img
          src={ele.img}
          alt="img"
          className="h-20 w-20 sm:h-28 sm:w-28 object-contain"
        />
        <h1 className="text-lg sm:text-xl font-semibold">{ele.title}</h1>
        <p className="text-sm sm:text-base text-gray-600">{ele.desc}</p>
      </div>
    );
  });
  const section2Comp = section2Items.map((ele, index) => {
    return (
      <div
        key={index}
        className="flex flex-col text-center items-center w-full sm:w-1/2 lg:w-1/3 h-auto p-6 space-y-4"
      >
        <h1 className="lg:text-3xl sm:text-xl font-bold">{ele.heading}</h1>
        <h1 className="lg:text-sm sm:text-xl font-medium text-gray-700">
          {ele.postHeading}
        </h1>
        <p className="lg:text-md sm:text-base text-gray-600">{ele.desc}</p>
        <p className="lg:text-md sm:text-base text-gray-500">{ele.details}</p>
      </div>
    );
  });

  return (
    <>
      <Carousel />
      <div
        id="scrollSection"
        className="flex flex-col-reverse lg:flex-row mt-40 text-center items-center lg:h-28 justify-center px-10 py-20 lg:p-40"
      >
        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-4">
          <p className=" text-lg sm:text-xl lg:text-2xl font-light text-left">
            Established in the year 2011, We, Sagun Medixsystem OPC Pvt. Ltd.
            are most trader and supplier of wide series of Surgical Products. We
            are the offering to our customers a best and flawlessly designed
            collection of Nasal Implant, Tissue Expander, Surgical Products and
            Beauty Cosmetic Products.
          </p>
        </div>

        {/* Heading Section */}
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
          <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl font-medium">
            About Sagun Medixsystem
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-36">
        <div
          className="flex flex-col lg:flex-row md:flex-row justify-between text-center items-center w-full max-w-screen-xl 
        p-20 lg:px-48 h-auto lg:h-96 bg-[#C4F1BE] space-y-6 lg:space-y-0 rounded-2xl lg:border lg:border-white lg:shadow-neutral-400 lg:shadow-2xl"
        >
          {section1Comp}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-40 text-center items-center h-auto lg:h-28 justify-center px-10 py-20 lg:px-40 lg:py-28 space-y-6 lg:space-y-0">
        {/* Heading Section */}
        <div className="w-full lg:w-1/2 px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium">
            Why US ?
          </h1>
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2 px-4">
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-left">
            Sagun Medixsystem OPC Pvt. Ltd. is a Delhi based company, betrothed
            in providing a widespread series of Surgical Products. These
            products are extremely used by patrons for their longer life,
            optimum quality and economical prices.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-36">
        <div
          className="flex flex-wrap justify-center lg:justify-between text-center items-center w-full lg:max-w-screen-xl px-6 lg:px-48 
  lg:h-80 space-y-6 bg-[#C4F1BE] lg:space-y-0 rounded-2xl lg:border lg:border-white lg:shadow-neutral-400 lg:shadow-2xl"
        >
          {section2Comp}
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center lg:justify-between text-center items-center w-full px-6 lg:px-48 mt-36 h-auto space-y-6 bg-yellow-500 lg:space-y-0">
        {section2Comp}
      </div> */}
    </>
  );
}
