import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaPhoneAlt, FaTruck, FaUndoAlt, FaLock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      {/* Top Icons Section */}
      <div className="container mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <FaTruck className="text-2xl text-gray-700" />
          <span className="text-sm font-medium">Free Shipping</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaUndoAlt className="text-2xl text-gray-700" />
          <span className="text-sm font-medium">45 Days Return</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaLock className="text-2xl text-gray-700" />
          <span className="text-sm font-medium">Secure Checkout</span>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-4">
            Be the first to hear about new products and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            />
            <button className="bg-black text-white px-4 rounded-r-lg hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2">
            <li>Men's Top Wear</li>
            <li>Women's Top Wear</li>
            <li>Men's Bottom Wear</li>
            <li>Women's Bottom Wear</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-3">
            <FaInstagram className="text-xl hover:text-gray-900 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-gray-900 cursor-pointer" />
            <FaFacebook className="text-xl hover:text-gray-900 cursor-pointer" />
          </div>
          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt /> 0123-456-789
          </p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-200 text-sm">
        © 2025, CompileTab. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
