
import React from "react";
import { useNavigate } from "react-router-dom";

import { productTypeToPageMapping } from "../assets/constants/constant.js";

export default function ProductsPage({ productType }) {
  const pageTitle = productTypeToPageMapping[productType][0];
  const pageProductList = productTypeToPageMapping[productType][2];
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
    <div className="container mx-auto px-4">
      <div className="mt-28"></div>
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mt-8 mb-6">{pageTitle}</h1>

      {/* Product List */}
      <div className="grid px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-28 md:px-8 ">
        {productComp}
      </div>
    </div>
  );
}
