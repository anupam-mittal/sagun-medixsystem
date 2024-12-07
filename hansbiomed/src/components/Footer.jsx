import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-50 py-10 mt-32   shadow-top">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Company</h2>
          <ul className="space-y-2">
            <li>
              <NavLink className="text-gray-600 hover:text-gray-800" to='/'>Home</NavLink>
            </li>
            <li>
            <NavLink className="text-gray-600 hover:text-gray-800" to='/Biologics'>Biologics</NavLink>
            </li>
            <li>
            <NavLink className="text-gray-600 hover:text-gray-800" to='/Devices'>Medical Devices</NavLink>
            </li>
            <li>
            <NavLink className="text-gray-600 hover:text-gray-800" to='/PR'>PR</NavLink>
            </li>
            <li>
            <NavLink className="text-gray-600 hover:text-gray-800" to='/#scrollSection'>About Us</NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-3 mt-4">
            <span className="text-gray-600">Share us via</span>
            <a href="#facebook" className="text-blue-600">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#linkedin" className="text-blue-500">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="#other" className="text-gray-800">
              <i className="fas fa-share"></i> Others
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Reach Us</h2>
          <p className="text-gray-800 font-semibold">
            Sagun Medixsystem OPC Private Limited
          </p>
          <p className="text-gray-600">
            A-83, Flat No. 10, 2nd Floor, Ramgarh Colony, Azadpur, New
            Delhi-110033, Delhi, India
          </p>
          <a href="#directions" className="text-blue-600 underline">
            Get Directions
          </a>
          <div className="text-gray-800">
            <p>Harendra Singh Rana (Director)</p>
            <p className="text-gray-500">52% Call Response Rate</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Send SMS
            </button>
            <button className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-50">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
