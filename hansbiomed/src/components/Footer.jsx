import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import whatsappImg from "../assets/whatsapp.png"; // Ensure the path is correct
import instaImg from "../assets/instagram.png"; // Ensure the path is correct
import linkedinImg from "../assets/linkedin.png"; // Ensure the path is correct

export default function Footer() {
  useEffect(() => {
    const whatsappButton = document.getElementById("whatsappButton");

    if (whatsappButton) {
      whatsappButton.addEventListener("click", function () {
        const phoneNumber = "7982327629"; // Replace with the target phone number in international format without '+' sign
        const message = "Hello, I have an enquiry for order."; // Replace with your message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
      });
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (whatsappButton) {
        whatsappButton.removeEventListener("click", function () {
          const phoneNumber = "7982327629";
          const message = "Hello, I have an enquiry for order.";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`;
          window.open(whatsappUrl, "_blank");
        });
      }
    };
  }, []);

  return (
    <div className="bg-gray-50 py-10 mt-32 shadow-top">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Company</h2>
          <ul className="space-y-2">
            <li>
              <NavLink className="text-gray-600 hover:text-gray-800" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-600 hover:text-gray-800"
                to="/Biologics"
              >
                Biologics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-600 hover:text-gray-800"
                to="/Devices"
              >
                Medical Devices
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-600 hover:text-gray-800"
                to="/Equipments"
              >
                Equipments
              </NavLink>
            </li>
            <li>
              <NavLink className="text-gray-600 hover:text-gray-800" to="/PR">
                PR
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-600 hover:text-gray-800"
                to="/#scrollSection"
              >
                About Us
              </NavLink>
            </li>
          </ul>
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
          <div className="flex flex-col">
            <p className="text=gray-800 font-semibold py-4">Contact Us :</p>
            <ul className="footer-logo flex space-x-4 justify-between w-52">
              {/* WhatsApp Button */}
              <li>
                <a
                  id="whatsappButton"
                  target="_blank"
                  className="text-gray-700 hover:text-green-500"
                  rel="noopener noreferrer"
                >
                  <img src={whatsappImg} alt="WhatsApp" className="w-8 h-8" />
                </a>
              </li>

              {/* Instagram Link */}
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/anjalimedicaltradingllc/"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-500"
                >
                  <img src={instaImg} alt="Instagram" className="w-8 h-8" />
                </a>
              </li>

              {/* LinkedIn Link */}
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-500"
                >
                  <img src={linkedinImg} alt="LinkedIn" className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
