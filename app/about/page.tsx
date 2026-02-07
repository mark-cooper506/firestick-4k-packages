"use client";

import {
  Tv,
  Film,
  CalendarDays,
  Zap,
  MonitorPlay,
  Globe,
  ShieldCheck,
  Smartphone,
  Clock,
  Cloud,
  Flame,
  Laptop,
  Cpu,
  Users,
  Headphones,
  Star,
  RefreshCcw,
  Link,
} from "lucide-react";

export default function Features() {
  return (
    <main className="bg-black text-white mt-15">

      {/* PAGE HEADER */}
      <section className="py-20 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
          Premium !pt¥ Features
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Experience the ultimate entertainment with cutting-edge streaming
          technology
        </p>
      </section>

      {/* MAIN FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-16">

          {[
            {
              icon: <Tv size={42} />,
              title: "Live TV Streaming",
              text:
                "Access 10,000+ live channels from around the world with crystal-clear quality.",
              list: [
                "Real-time streaming",
                "50+ countries channels",
                "Regular updates",
              ],
            },
            {
              icon: <Film size={42} />,
              title: "Video on Demand (VOD)",
              text:
                "20,000+ movies & TV series including latest blockbusters.",
              list: [
                "Latest content",
                "Multiple languages",
                "Weekly updates",
              ],
              reverse: true,
            },
            {
              icon: <CalendarDays size={42} />,
              title: "EPG Guide",
              text:
                "Interactive TV guide with schedules & reminders.",
              list: [
                "7-day guide",
                "Detailed info",
                "Smart reminders",
              ],
            },
            {
              icon: <Zap size={42} />,
              title: "Anti-Freezing Tech",
              text:
                "Smooth playback even during peak hours.",
              list: [
                "99.9% uptime",
                "Adaptive bitrate",
                "Multi-server support",
              ],
              reverse: true,
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10`}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black">
                {item.icon}
              </div>

              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4">{item.text}</p>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  {item.list.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL FEATURES */}
      <section className="py-20 bg-[rgba(0,0,0,0.98)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-yellow-400">
            Technical Excellence
          </h2>
          <p className="text-center text-gray-400 mt-2 mb-12">
            Powered by advanced streaming infrastructure
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MonitorPlay />, title: "HD, 4K & 8k Quality" },
              { icon: <Globe />, title: "Global CDN" },
              { icon: <ShieldCheck />, title: "Secure Streaming" },
              { icon: <Smartphone />, title: "Multi-Device Support" },
              { icon: <Clock />, title: "Catch-up TV" },
              { icon: <Cloud />, title: "Cloud DVR" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black border border-white/10 rounded-xl p-8 text-center hover:border-yellow-400 transition"
              >
                <div className="flex justify-center text-yellow-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            Compatible Devices
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <Smartphone />, name: "Android Devices" },
              { icon: <Flame />, name: "Amazon Fire TV" },
              { icon: <Laptop />, name: "Computers" },
              { icon: <Tv />, name: "Smart TVs" },
              { icon: <Cpu />, name: "Set-Top Boxes" },
              { icon: <MonitorPlay />, name: "Apple Devices" },
            ].map((d, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition"
              >
                <div className="text-yellow-400 flex justify-center mb-3">
                  {d.icon}
                </div>
                <h4 className="font-semibold">{d.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            Premium Features
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: <Users />, title: "Multi-Room" },
              { icon: <Headphones />, title: "Priority Support" },
              { icon: <Star />, title: "Exclusive Content" },
              { icon: <RefreshCcw />, title: "Auto Updates" },
            ].map((p, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition"
              >
                <div className="text-yellow-400 flex justify-center mb-3">
                  {p.icon}
                </div>
                <h4 className="font-semibold">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
          Experience Premium !pt¥ Today
        </h2>
        <p className="text-gray-400 mt-4">
          Get instant access to all features with affordable plans
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full"
            href="/pricing">View Plans
          </a>
          <a className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            href="https://wa.me/+447857099949?text=I%20want%20to%20get%20free%20Trial">Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
