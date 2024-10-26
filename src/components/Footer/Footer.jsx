// components/Footer/Footer.js
import React from "react";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-full md:w-auto md:text-center mb-6 md:mb-0">
          <img src={logo} alt="Cricket Logo" className="w-24 mx-auto" />
        </div>

        {/* About Us Section */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex md:flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-md border-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-bold rounded-md hover:from-yellow-600 hover:to-pink-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm text-gray-500 border-t border-gray-800 pt-4">
        &copy; 2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
