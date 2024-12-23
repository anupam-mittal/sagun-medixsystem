// import React, { useState } from "react";
// import { productTypeToPageMapping } from "../assets/constants/constant";
// import { useParams } from "react-router-dom";
// import HeaderPages from "./HeaderPages";

// export default function ProductView() {
//   const { prodID } = useParams();
//   const productArr = prodID.split(" ");
//   const type = productArr[0];
//   const id = parseInt(productArr[1], 10);

//   // Find the product details based on the ID
//   const product = productTypeToPageMapping[type][2].find(
//     (prod) => prod.id === id
//   );
//   const detailsObj = product.details;

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleExpand = (index) => {
//     setExpandedIndex(index === expandedIndex ? null : index);
//   };

//   // Render the accordion items
//   const renderComp = Object.keys(detailsObj).map((key, index) => {
//     const displayDivContent = detailsObj[key];
//     return (
//       <div key={index} className="border-b border-gray-300 w-full">
//         {/* Accordion Header */}
//         <div
//           className="flex justify-between items-center py-4 px-4 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
//           onClick={() => toggleExpand(index)}
//         >
//           <span className="font-semibold text-gray-800 text-lg">{key}</span>
//           <button className="text-xl font-bold text-blue-500">
//             {expandedIndex === index ? "-" : "+"}
//           </button>
//         </div>

//         {/* Accordion Content */}
//         <div
//           className={`overflow-hidden transition-all duration-300 ease-in-out ${
//             expandedIndex === index ? "max-h-screen" : "max-h-0"
//           }`}
//         >
//           <div className="px-4 py-3 text-gray-700">
//             {Array.isArray(displayDivContent) ? (
//               <ul className="list-disc pl-6">
//                 {displayDivContent.map((point, idx) => (
//                   <li key={idx} className="mb-2">
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>{displayDivContent}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <>
//     <HeaderPages/>
//     <div className="max-w-5xl  mx-auto px-4 py-8">
//       <div className="mt-28"></div>
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>

//       {/* Product Image */}
//       <div className=" flex justify-center mb-6">
//         <img
//           src={product.img}
//           alt={product.title}
//           className="w-full max-w-lg object-contain rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Accordion */}
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
//         {renderComp}
//       </div>
//     </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { productTypeToPageMapping } from "../assets/constants/constant";
import { useParams } from "react-router-dom";
import HeaderPages from "./HeaderPages";

export default function ProductView() {
  const { prodID } = useParams();
  const productArr = prodID.split(" ");
  const type = productArr[0];
  const id = parseInt(productArr[1], 10);

  // Find the product details based on the ID
  const product = productTypeToPageMapping[type][2].find(
    (prod) => prod.id === id
  );
  const detailsObj = product.details;

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  // Render the accordion items
  const renderComp = Object.keys(detailsObj).map((key, index) => {
    const displayDivContent = detailsObj[key];
    return (
      <div key={index} className="border-b border-gray-300 w-full">
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center py-4 px-4 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => toggleExpand(index)}
        >
          <span className="font-semibold text-gray-800 text-lg">{key}</span>
          <button className="text-xl font-bold text-blue-500">
            {expandedIndex === index ? "-" : "+"}
          </button>
        </div>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expandedIndex === index ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 text-gray-700">
            {Array.isArray(displayDivContent) ? (
              <ul className="list-disc pl-6">
                {displayDivContent.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{displayDivContent}</p>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <HeaderPages />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mt-28"></div>
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>

        {/* Product Image */}
        <div className="flex justify-center mb-6">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-w-lg object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Accordion */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg mx-auto">
          <div className="w-full">{renderComp}</div>
        </div>
      </div>
    </>
  );
}
