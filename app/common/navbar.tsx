import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo / Title */}
          <div className="flex items-center shrink-0">
            <div className="flex items-center shrink-0 ml-2 md:ml-4">
              {/* Circle icon */}
              <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center mr-2 md:mr-3">
                <span className="text-black font-extrabold text-lg md:text-xl tracking-wide">
                  F
                </span>
              </div>
            </div>

            {/* Firestick 4K text */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-normal uppercase">
              Firestick 4K
            </h2>
          </div>

          {/* Middle: Menu Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center text-lg font-semibold">
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
            <Link href="/channels" className="hover:text-yellow-300 transition-colors">
              Channels
            </Link>
            <Link href="/pricing" className="hover:text-yellow-300 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">
              Features
            </Link>

          </div>

          {/* Right: Contact Us Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-5 py-2 rounded-full transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg
                className="h-8 w-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pt-4 pb-4 space-y-3 text-lg font-semibold"
          style={{ background: "rgba(0, 0, 0, 0.98)" }}
        >
          <Link href="/" className="block hover:text-yellow-300">
            Home
          </Link>
          <Link href="/channels" className="block hover:text-yellow-300">
            Channels
          </Link>
            <Link href="/pricing" className="hover:text-yellow-300 transition-colors">
              Pricing
            </Link>
          <Link href="/about" className="block hover:text-yellow-300">
            Features
          </Link>

          {/* Centered Contact Us Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-5 py-2 rounded-full text-center transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
