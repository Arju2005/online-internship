import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-950">
      <h1 className="text-2xl font-bold">FloraVision</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-green-300">Home</a></li>
        <li><a href="#" className="hover:text-green-300">Plants & Tips</a></li>
        <li><a href="#" className="hover:text-green-300">Store</a></li>
        <li><a href="#" className="hover:text-green-300">Contact</a></li>
      </ul>
      <FaSearch className="text-white cursor-pointer hover:text-green-300" />
    </nav>
  );
}

export default Navbar;
