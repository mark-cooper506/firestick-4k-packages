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
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-yellow-400 mb-3">
               FIRESTICK 4K & 8K PACKAGES
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
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
                <Globe size={16} /> https://firestick-4k-packages-eight.vercel.app/
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
