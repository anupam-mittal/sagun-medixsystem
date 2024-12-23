import React from "react";
import { useNavigate } from "react-router-dom";

import { productTypeToPageMapping } from "../assets/constants/constant.js";
import HeaderPages from "./HeaderPages.jsx";

export default function ProductsPage({ productType }) {
  const pageTitle = productTypeToPageMapping[productType][0];
  const pageProductList = productTypeToPageMapping[productType][2];
  const pageBanner = productTypeToPageMapping[productType][1];
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    const path = `/product/${productType} ${id}`;
    navigate(path);
  };

  // Map through the product list and create product components
  const productComp = pageProductList.map((prod) => {
    return (
      <div
        key={prod.id}
        onClick={() => handleProductClick(prod.id)}
        className="flex flex-col items-center text-center justify-between bg-white shadow-lg hover:shadow-2xl rounded-lg p-4 cursor-pointer h-96"
      >
        <img src={prod.img} alt={prod.title} className="w-full h-60 object-contain" />
        <p className="mt-2 font-semibold text-lg">{prod.title}</p>
      </div>
    );
  });

  return (
    <>
      <HeaderPages />
      <div className="">
        {/* Image Banner */} 
        <div className="relative w-full">
          <img
            src={pageBanner} 
            alt="Banner"
            className="w-full h-56 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 text-center">
            <h1 className="inline-block px-6 py-2 font-bannerHeading lg:text-8xl md:text-7xl text-5xl text-black font-extrabold">
              {pageTitle}
            </h1>
          </div>
        </div>

        {/* Product List */}
        <div className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-28 md:px-8 mt-28">
          {productComp}
        </div>
      </div>
    </>
  );
}

