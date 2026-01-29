"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [showText, setShowText] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // sirf small screens par toggle
    if (window.innerWidth < 640) {
      e.preventDefault(); // WhatsApp turant open na ho
      setShowText((prev) => !prev);
    }
  };

  return (
    <a
      href="https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20IPTV%206%20Months%20Plan"
      target="_blank"
      aria-label="WhatsApp Support"
      onClick={handleClick}
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white px-4 py-3 rounded-full
        shadow-xl transition-all duration-300
      "
    >
      <MessageCircle className="w-5 h-5" />

      {/* Text */}
      <span
        className={`
          font-semibold whitespace-nowrap
          transition-all duration-300
          ${showText ? "opacity-100 max-w-200px" : "opacity-0 max-w-0"}
          sm:opacity-100 sm:max-w-full
        `}
      >
        Contact on WhatsApp
      </span>
    </a>
  );
}
