import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Threshold to change style (you can adjust it)
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex flex-row justify-between items-center w-full fixed h-16 top-0 left-0 z-50 ${
        scrolled ? "bg-white border-b-2 border-b-gray-400" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <NavLink to="/" className="h-full w-1/10 pl-6">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row w-10/12 justify-between py-6 pr-6">
        <NavLink to="/Biologics" className="hover:text-[#C4F1BE]">
          Biologics
        </NavLink>
        <NavLink to="/Devices" className="hover:text-[#C4F1BE]">
          Medical Devices
        </NavLink>
        <NavLink to="/Equipments" className="hover:text-[#C4F1BE]">
          Equipments
        </NavLink>
        <NavLink to="/PR" className="hover:text-[#C4F1BE]">
          PR
        </NavLink>
        <Link to="/#scrollSection" className="hover:text-[#C4F1BE] ">
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
