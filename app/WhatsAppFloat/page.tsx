"use client";

import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [showText, setShowText] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldBlink, setShouldBlink] = useState(false);

  useEffect(() => {
    const animationCycle = () => {
      // Start blinking after being visible for 4-5 seconds
      setTimeout(() => {
        setShouldBlink(true);
      }, 5000);

      // Stop blinking and hide after 10 seconds total
      setTimeout(() => {
        setShouldBlink(false);
        setIsVisible(false);
        
        // Wait 3 seconds hidden, then show again slowly
        setTimeout(() => {
          setIsVisible(true);
          setShouldBlink(false);
        }, 4000);
      }, 10000);
    };

    // Start first cycle after 2 seconds
    const initialTimer = setTimeout(() => {
      animationCycle();
      
      // Repeat cycle every 16 seconds (10 visible + 3 hidden + 3 transition)
      const interval = setInterval(() => {
        animationCycle();
      }, 16000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(initialTimer);
  }, []);

  const handleMouseEnter = () => {
    // Show text on hover
    setShowText(true);
  };

  const handleMouseLeave = () => {
    // Hide text when hover is removed
    setShowText(false);
  };

  const handleTouchStart = () => {
    // Toggle text on touch for mobile
    setShowText((prev) => !prev);
  };

  return (
    <>
      {/* Custom slow blink animation */}
      <style jsx>{`
        @keyframes slowBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .slow-blink {
          animation: slowBlink 2s ease-in-out infinite;
        }
      `}</style>

      <a
        href="https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20for%204k%20packages%20Plan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        className={`
          fixed bottom-20 z-50
          flex items-center gap-3
          bg-green-500 hover:bg-green-600
          text-white px-4 py-3 rounded-full
          shadow-xl
          transition-all ease-in-out
          ${isVisible ? 'right-6 opacity-100' : '-right-full opacity-0'}
          ${shouldBlink ? 'slow-blink' : ''}
        `}
        style={{
          transitionDuration: '2000ms'
        }}
      >
        {/* WhatsApp Icon SVG */}
        <svg 
          className="w-6 h-6" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Text */}
        <span
          className={`
            font-semibold whitespace-nowrap
            transition-all duration-300
            ${showText ? "opacity-100 max-w-50" : "opacity-0 max-w-0"}
            sm:opacity-100 sm:max-w-full
          `}
        >
          Contact on WhatsApp
        </span>
      </a>
    </>
  );
}