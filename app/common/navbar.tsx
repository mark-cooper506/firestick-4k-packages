"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render after client mount to prevent SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid rendering on server

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo / Title */}
          <div className="flex items-center shrink-0">
            <div
              className="flex items-center border-2 border-yellow-400 rounded-full px-2 sm:px-4 py-1 sm:py-2 shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
              style={{
                background: "linear-gradient(to right, rgb(31, 41, 55), rgb(17, 24, 39))",
              }}
            >
              <div className="mr-2 sm:mr-3">
                {/* SVG Logo */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FCD34D", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#F59E0B", stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: "#EF4444", stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#FCD34D", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="23" fill="url(#grad1)" />
                  <circle cx="24" cy="24" r="20" fill="#1F2937" />
                  <path d="M18 14L32 24L18 34V14Z" fill="url(#grad2)" />
                  <text
                    x="24"
                    y="42"
                    fontFamily="Arial, sans-serif"
                    fontSize="8"
                    fontWeight="bold"
                    fill="#FCD34D"
                    textAnchor="middle"
                  >
                    4K
                  </text>
                  <path
                    d="M38 20C38 18 37 16 35 15"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M40 18C40 15 38.5 12 36 10"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M10 20C10 18 11 16 13 15"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M8 18C8 15 9.5 12 12 10"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              <h2 className="text-sm sm:text-lg md:text-lg lg:text-lg font-extrabold text-yellow-400 tracking-wide uppercase">
                Firestick 4K
              </h2>
            </div>
          </div>

          {/* Desktop Menu */}
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

          {/* Desktop Contact Button */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pt-4 pb-4 space-y-3 text-lg font-semibold transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{ background: "rgba(0, 0, 0, 0.98)" }}
      >
        <Link href="/" className="block hover:text-yellow-300">
          Home
        </Link>
        <Link href="/channels" className="block hover:text-yellow-300">
          Channels
        </Link>
        <Link href="/pricing" className="block hover:text-yellow-300 transition-colors">
          Pricing
        </Link>
        <Link href="/about" className="block hover:text-yellow-300">
          Features
        </Link>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-5 py-2 rounded-full text-center transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
