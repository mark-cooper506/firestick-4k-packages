"use client";

import { useState } from "react";
import { Film, Activity, Globe, Smile, Newspaper, Phone, Link } from "lucide-react";
// import Navbar from "./common/navbar";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Channels data with icons
  const channels = [
    // Sports
    { title: "ESPN", desc: "Sports • HD", category: "sports", icon: <Activity size={32} className="text-yellow-400" /> },
    { title: "Fox Sports", desc: "Sports • HD", category: "sports", icon: <Activity size={32} className="text-yellow-400" /> },
    { title: "NBA TV", desc: "Sports • HD", category: "sports", icon: <Activity size={32} className="text-yellow-400" /> },
    // Movies
    { title: "HBO", desc: "Movies • HD", category: "movies", icon: <Film size={32} className="text-yellow-400" /> },
    { title: "Showtime", desc: "Movies • HD", category: "movies", icon: <Film size={32} className="text-yellow-400" /> },
    { title: "Starz", desc: "Movies • HD", category: "movies", icon: <Film size={32} className="text-yellow-400" /> },
    // News
    { title: "CNN", desc: "News • HD", category: "news", icon: <Newspaper size={32} className="text-yellow-400" /> },
    { title: "BBC News", desc: "News • HD", category: "news", icon: <Newspaper size={32} className="text-yellow-400" /> },
    { title: "Fox News", desc: "News • HD", category: "news", icon: <Newspaper size={32} className="text-yellow-400" /> },
    // Entertainment
    { title: "Netflix", desc: "Entertainment • 4K", category: "entertainment", icon: <Phone size={32} className="text-yellow-400" /> },
    { title: "Disney+", desc: "Entertainment • 4K", category: "entertainment", icon: <Phone size={32} className="text-yellow-400" /> },
    { title: "Hulu", desc: "Entertainment • HD", category: "entertainment", icon: <Phone size={32} className="text-yellow-400" /> },
    // International
    { title: "RTÉ One", desc: "International • HD", category: "international", icon: <Globe size={32} className="text-yellow-400" /> },
    { title: "Sky UK", desc: "International • HD", category: "international", icon: <Globe size={32} className="text-yellow-400" /> },
    { title: "CTV", desc: "International • HD", category: "international", icon: <Globe size={32} className="text-yellow-400" /> },
    // Kids
    { title: "Cartoon Network", desc: "Kids • HD", category: "kids", icon: <Smile size={32} className="text-yellow-400" /> },
    { title: "Disney Channel", desc: "Kids • HD", category: "kids", icon: <Smile size={32} className="text-yellow-400" /> },
    { title: "Nickelodeon", desc: "Kids • HD", category: "kids", icon: <Smile size={32} className="text-yellow-400" /> },
  ];

  const categories = ["all", "sports", "movies", "news", "entertainment", "international", "kids"];

  return (
    <>
      {/* <Navbar /> */}

      {/* Page Header */}
      <section className="bg-[rgba(0,0,0,0.95)] text-center py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            10,000+ Premium Channels
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Access the world's best entertainment with our extensive channel lineup
          </p>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-6 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-yellow-400 hover:text-gray-900"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-10 bg-[rgba(0,0,0,0.95)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {channels
              .filter((c) => activeCategory === "all" || c.category === activeCategory)
              .map((c, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center relative hover:scale-105 transition-transform"
                >
                  <div className="mb-2">{c.icon}</div>
                  <h4 className="font-bold text-lg mb-1 text-yellow-400">{c.title}</h4>
                  <p className="text-gray-300 text-sm">{c.desc}</p>
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    LIVE
                  </span>
                </div>
              ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-gray-700 hover:bg-yellow-500 text-gray-300 hover:text-gray-900 px-6 py-2 rounded-full font-bold transition-all">
              Load More Channels
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Start Watching?</h2>
          <p className="text-lg md:text-xl mb-8">
            Get instant access to 10,000+ channels with our premium IPTV service
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/pricing"
              className="bg-gray-900 text-yellow-400 font-bold px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition-all"
            >
              View Plans
            </a>
            <a
            href="https://wa.me/+447857099949?text=I%20want%20to%20get%20free%20Trial"
              className="bg-gray-800 text-yellow-400 font-bold px-6 py-3 rounded-full text-lg hover:bg-gray-900 transition-all"
            >
            Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
