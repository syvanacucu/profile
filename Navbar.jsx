import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">Kuymotorin</a>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/rent-car"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Rent Motor
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/add-cars"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Add Motor
            </a>
          </li>
        </ul>

        {/* Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 p-4">
            <li>
              <a
                href="/"
                className="block text-gray-600 hover:text-gray-900 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/rent-car"
                className="block text-gray-600 hover:text-gray-900 transition"
              >
                Rent Motor
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-gray-600 hover:text-gray-900 transition"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;