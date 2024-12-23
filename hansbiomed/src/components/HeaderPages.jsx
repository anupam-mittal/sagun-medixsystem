import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeaderPages() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`flex justify-between items-center w-full fixed h-16 top-0 left-0 z-50 bg-white border-b-2 border-b-gray-400`}
    >
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center h-full pl-6">
        <img src={logo} alt="Logo" className="h-full" />
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row w-10/12 justify-between items-center py-6 pr-6">
        <NavLink
          to="/Biologics"
          className="relative hover:text-[#4CAF50] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#4CAF50] hover:before:w-full transition-all duration-1000"
        >
          Biologics
        </NavLink>

        <NavLink
          to="/Devices"
          className="relative hover:text-[#4CAF50] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#4CAF50] hover:before:w-full transition-all duration-1000"
        >
          Medical Devices
        </NavLink>

        <NavLink
          to="/Equipments"
          className="relative hover:text-[#4CAF50] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#4CAF50] hover:before:w-full transition-all duration-1000"
        >
          Equipments
        </NavLink>

        <NavLink
          to="/PR"
          className="relative hover:text-[#4CAF50] before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-[#4CAF50] hover:before:w-full transition-all duration-1000"
        >
          PR
        </NavLink>
        <Link
          to="/#scrollSection"
          className="hover:text-[black] hover:bg-[white] bg-black text-white px-4 py-2 rounded-full transition-all duration-1000"
        >
          About Us
        </Link>
      </div>

      {/* Burger Menu Icon */}
      <div
        className="md:hidden pr-6 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-8 h-8 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 shadow-lg md:hidden">
          <NavLink
            to="/Biologics"
            className="py-2 hover:text-[#C4F1BE]"
            onClick={() => setMenuOpen(false)}
          >
            Biologics
          </NavLink>
          <NavLink
            to="/Devices"
            className="py-2 hover:text-[#C4F1BE]"
            onClick={() => setMenuOpen(false)}
          >
            Medical Devices
          </NavLink>
          <NavLink
            to="/Equipments"
            className="py-2 hover:text-[#C4F1BE]"
            onClick={() => setMenuOpen(false)}
          >
            Equipments
          </NavLink>
          <NavLink
            to="/PR"
            className="py-2 hover:text-[#C4F1BE]"
            onClick={() => setMenuOpen(false)}
          >
            PR
          </NavLink>
          <Link
            to="/#scrollSection"
            className="py-2 hover:text-[#C4F1BE]"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </div>
  );
}
