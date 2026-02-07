"use client";

import Image from "next/image";
import Link from "next/link";
import { Tv, Cpu, Apple, Box, Phone, Laptop2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

   const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "FireStick 4k & 8k packages is absolutely incredible! The streaming quality is unmatched with true 4K and 8K support. I can watch all my favorite sports events and movies without any lag or buffering. The setup was super easy and customer support responded within minutes. This is hands down the best !pt¥ service I've tried!",
      name: "Michael Johnson",
      initials: "MJ"
    },
    {
      id: 2,
      rating: 5,
      text: "I've been using FireStick 4k & 8k packages for 6 months now and I'm blown away by the quality and reliability. Every channel loads instantly, the picture is crystal clear, and I have access to thousands of channels from around the world. The VOD library is massive with all the latest movies. Worth every penny!",
      name: "Sarah Williams",
      initials: "SW"
    },
    {
      id: 3,
      rating: 5,
      text: "FireStick 4k & 8k packages transformed my streaming experience! The channel variety is incredible - from live sports to international channels to premium movies. The 99.9% uptime is no joke, I've had zero issues. Customer service is responsive and helpful. I've already recommended this to all my friends and family!",
      name: "David Martinez",
      initials: "DM"
    },
    {
      id: 4,
      rating: 5,
      text: "Best decision I made this year was switching to FireStick 4k & 8k packages! The 4K quality is stunning on my smart TV, and I love that I can use it on multiple devices. No more missing my favorite shows or sports games. The price is unbeatable for what you get. Extremely satisfied customer here!",
      name: "Emily Thompson",
      initials: "ET"
    },
    {
      id: 5,
      rating: 5,
      text: "FireStick 4k & 8k packages exceeded all my expectations! I was skeptical at first, but the service is flawless. Every channel works perfectly, the interface is user-friendly, and the streaming quality is phenomenal. I can finally watch all the sports channels I want without paying ridiculous cable prices. Highly recommend to everyone!",
      name: "James Anderson",
      initials: "JA"
    },
     {
      id: 6,
      rating: 5,
      text: "FireStick 4k & 8k packages is simply the best! I've tried many !pt¥ services before, but none come close to this quality. The streaming is buttery smooth in 4K, all my favorite channels are available, and the customer support team is always ready to help. Installation took just a few minutes. I'm a customer for life!",
      name: "John Daniel",
      initials: "JD"
    }
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];
    const devices = [
    { icon: <Phone size={48} className="text-yellow-400" />, title: "Android", desc: "Phones, Tablets & TV" },
    { icon: <Tv size={48} className="text-yellow-400" />, title: "Smart TV", desc: "Samsung, LG & More" },
    { icon: <Cpu size={48} className="text-yellow-400" />, title: "Firestick", desc: "Amazon Fire TV" },
    { icon: <Apple size={48} className="text-yellow-400" />, title: "iOS", desc: "iPhone & iPad" },
    { icon: <Laptop2 size={48} className="text-yellow-400" />, title: "Windows", desc: "PC & Laptop" },
    { icon: <Box size={48} className="text-yellow-400" />, title: "MAG Box", desc: "Set-Top Boxes" },
  ];
const features = [
    {
      icon: "📺",
      title: "HD, 4K & 8K Streaming",
      desc: "Crystal clear picture quality with support for HD, 4K and 8K content on all your favorite channels.",
    },
    {
      icon: "⚡",
      title: "99.9% Uptime",
      desc: "Reliable streaming with guaranteed uptime ensuring you never miss your favorite shows.",
    },
    {
      icon: "🏈",
      title: "All Sports & Movies",
      desc: "Access to all major sports events, latest movies, and TV shows from around the world.",
    },
    {
      icon: "📱",
      title: "Multi-Device Support",
      desc: "Watch on any device - Smart TV, Android, iOS, Firestick, Windows, and more.",
    },
  ];
  return (
    <main className="bg-gray-900 text-white mt-15">

      {/* Hero Section */}
      <section className="hero bg-[rgba(0,0,0,0.98)] shadow-[0_2px_20px_rgba(0,0,0,0.3)] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4">
              Premium !pt¥ Streaming 10,000+ Channels & VOD
            </h1>
            <p className="text-gray-200 mb-6">
              Experience the ultimate entertainment with HD, 4K & 8k quality streaming, 99.9% uptime, and access to all sports, movies, and TV shows.
            </p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <Link
                href="https://wa.me/+447857099949?text=I%20want%20to%20get%20free%20Trial"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-full transition-all text-center"
              >
                Get Free Trial
              </Link>
              <Link
                href="#pricing"
                className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold px-6 py-3 rounded-full transition-all text-center"
              >
                View Plans
              </Link>
            </div>
          </div>

          {/* Right Hero Card */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-gray-800 rounded-xl py-4 p-4 w-88 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold">LIVE</span>
                </div>
                <span className="text-xs font-semibold bg-yellow-400 text-black px-2 py-0.5 rounded">4K & 8K</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎬</div>
                <div>
                  <h4 className="font-bold text-lg">Get Free Trial Now</h4>
                  <p className="text-xs text-gray-300">Fire STick 4k & 8k Packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
       <section className="features py-16 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">
            Why Choose Firestick 4K Packages?
          </h2>
          <p className="text-gray-300">
            Experience the best !pt¥ service with premium features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ x: 200, opacity: 0 }}          // right se start
              whileInView={{ x: 0, opacity: 1 }}       // apni jagah
              transition={{
                duration: 1.2,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              viewport={{
                once: true,     // sirf ek dafa animate
                amount: 0.3,    // 30% visible ho tab trigger
              }}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Supported Devices */}
   <section className="devices py-16 bg-[rgba(0,0,0,0.95)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">Watch on Any Device</h2>
          <p className="text-gray-300">Compatible with all your favorite streaming devices</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {devices.map((d, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center hover:scale-110 transition-transform">
              {d.icon}
              <h4 className="font-bold text-sm mt-2 mb-1">{d.title}</h4>
              <p className="text-gray-300 text-xs">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Pricing Section */}
     <section id="pricing" className="pricing-preview py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">Choose Your Plan</h2>
      <p className="text-gray-300">Affordable pricing for premium !pt¥ service</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "1 Month", price: "15", period: "/month", features: ["10,000+ Channels","HD, 4K & 8k Quality","VOD Library","Multi-Device","24/7 Support","Priority Support"], link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20!pt¥%201%20Month%20Plan", popular: false, affordable: false },
        { title: "3 Months", price: "25", period: "/3 months", features: ["10,000+ Channels","HD, 4K & 8k Quality","VOD Library","Multi-Device","24/7 Support","Priority Support"], link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20!pt¥%203%20Months%20Plan", popular: false, affordable: false },
        { title: "6 Months", price: "40", period: "/6 months", features: ["10,000+ Channels","HD, 4K & 8k Quality","VOD Library","Multi-Device","24/7 Support","2 Months Free"], link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20!pt¥%206%20Months%20Plan", popular: true, affordable: false },
        { title: "1 Year", price: "65", period: "/year", features: ["10,000+ Channels","HD, 4K & 8k Quality","VOD Library","Multi-Device","24/7 Support","4 Months Free"], link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20!pt¥%201%20Year%20Plan", popular: false, affordable: true },
      ].map((p, i) => (
        <div key={i} className={`bg-gray-800 rounded-lg p-6 text-center hover:scale-105 transition-transform ${p.popular || p.affordable ? "border-2 border-yellow-500" : ""}`}>
          {/* Badges */}
          <div className="mb-2">
            {p.popular && (
              <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded-full inline-block text-sm mr-1">
                Most Popular
              </span>
            )}
            {p.affordable && (
              <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded-full inline-block text-sm">
                Most Affordable
              </span>
            )}
          </div>

          {/* Title & Price */}
          <h3 className="font-bold text-xl mb-2">{p.title}</h3>
          <div className="text-2xl font-extrabold mb-4">
            <span className="text-sm align-top">£</span>{p.price}<span className="text-sm text-gray-300"> {p.period}</span>
          </div>

          {/* Features */}
          <ul className="text-left text-sm mb-4 space-y-1">
            {p.features.map((f, idx) => <li key={idx}>✓ {f}</li>)}
          </ul>

          {/* Order Button */}
          <Link
            href={p.link}
            target="_blank"
            className={`font-bold px-4 py-2 rounded-full transition-all ${
              p.popular || p.affordable
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            Order on WhatsApp
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials */}
     <section className="testimonials py-16 bg-[rgba(0,0,0,0.95)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-2">What Our Customers Say</h2>
          <p className="text-gray-300">Join thousands of satisfied customers</p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-gray-800 rounded-lg p-8 md:p-10 text-center shadow-xl transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full absolute inset-0"
                    : "opacity-0 translate-x-full absolute inset-0"
                }`}
              >
                <div className="text-yellow-400 text-2xl mb-4">
                  {"⭐".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-yellow-500 text-black font-bold w-14 h-14 rounded-full flex items-center justify-center text-lg">
                    {testimonial.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-yellow-400 w-8" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}