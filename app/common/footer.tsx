"use client";

import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Send,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/95 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand with Logo */}
          <div>
            {/* Logo and Text in Rounded Border */}
            <div className="inline-flex items-center bg-linear-to-r from-gray-800 to-gray-900 border-2 border-yellow-400 rounded-full px-4 py-2 shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 mb-4">
              {/* SVG Logo */}
              <div className="mr-3">
                <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:"#FCD34D", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#F59E0B", stopOpacity:1}} />
                    </linearGradient>
                    <linearGradient id="footerGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:"#EF4444", stopOpacity:1}} />
                      <stop offset="50%" style={{stopColor:"#F97316", stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:"#FCD34D", stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="23" fill="url(#footerGrad1)"/>
                  <circle cx="24" cy="24" r="20" fill="#1F2937"/>
                  <path d="M18 14L32 24L18 34V14Z" fill="url(#footerGrad2)"/>
                  <text x="24" y="42" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#FCD34D" textAnchor="middle">4K</text>
                  <path d="M38 20C38 18 37 16 35 15" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M40 18C40 15 38.5 12 36 10" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M10 20C10 18 11 16 13 15" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M8 18C8 15 9.5 12 12 10" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>

              {/* Firestick 4K text */}
              <h3 className="text-lg font-extrabold text-yellow-400 tracking-wide uppercase">
                Firestick 4K
              </h3>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-400 mt-3">
              Premium IPTV streaming service with 10,000+ channels and VOD
              content. Watch anywhere, anytime.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="WhatsApp">
                <MessageCircle className="hover:text-yellow-400 transition" />
              </a>
              <a href="#" aria-label="Email">
                <Mail className="hover:text-yellow-400 transition" />
              </a>
              <a href="#" aria-label="Telegram">
                <Send className="hover:text-yellow-400 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/channels" className="hover:text-yellow-400">Channels</Link></li>
              <li><Link href="/pricing" className="hover:text-yellow-400">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400">Features</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-yellow-400">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
              <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-3">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-center">
                <Mail size={16} /> joonk9637@gmail.com
              </li>
              <li className="flex gap-2 items-center">
                <MessageCircle size={16} /> WhatsApp: +44 7857 099949
              </li>
              <li className="flex gap-2 items-center">
                <Globe size={16} />
                <a href="https://firestick-4k-packages.vercel.app/" >
                visit our site now
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Firestick 4k IPTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}