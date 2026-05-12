import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-950 text-center py-8 mt-12">
      <h2 className="text-2xl font-bold mb-2">FloraVision</h2>
      <p className="max-w-md mx-auto mb-4">
        From lush indoor greens to vibrant outdoor blossoms, our plants are crafted to thrive and elevate your living environment.
      </p>

      {/* Subscription Box */}
      <div className="mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l bg-green-800 text-white"
        />
        <button className="px-4 py-2 bg-green-600 rounded-r hover:bg-green-500">
          Subscribe
        </button>
      </div>

      {/* Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#">Home</a>
        <a href="#">Top 20 Plants</a>
        <a href="#">Contact</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4 text-green-300">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
      </div>

      <p className="text-sm">FloraVision © All rights reserved.</p>
    </footer>
  );
}

export default Footer;
