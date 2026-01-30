"use client";

import {
  Mail,
  MessageCircle,
  Send,
  Headphones,
  CreditCard,
  User,
  Handshake,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* PAGE HEADER */}
      <section className="py-20 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-400">
          Get in touch with our support team 24/7
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* FORM */}
          {/* <div className="bg-[rgba(0,0,0,0.98)] border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
            <p className="text-gray-400 mb-6">
              We usually respond within 24 hours
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <select
                className="w-full bg-black border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>Account Issue</option>
                <option>Partnership</option>
              </select>

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-black border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-full flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div> */}

          {/* CONTACT INFO */}
          <div className="space-y-8">
            {[
  {
    icon: <MessageCircle />,
    title: "WhatsApp Support",
    text: "Fastest response time",
    value: "+44 7857 099949",
  },
  {
    icon: <Mail />,
    title: "Email Support",
    text: "Reply within 24 hours",
    value: "joonk9637@gmail.com",
  },
].map((item, i) => (
  <div
    key={i}
    className="flex gap-4 items-start 
               border-2 border-yellow-400/60 
               rounded-xl p-6 
               hover:border-yellow-400 
               hover:bg-yellow-400/5 
               transition-all duration-300"
  >
    <div className="text-yellow-400 mt-1">
      {item.icon}
    </div>

    <div>
      <h4 className="font-bold text-lg">{item.title}</h4>
      <p className="text-gray-400 text-sm">{item.text}</p>
      <p className="text-yellow-400 mt-1 font-semibold">
        {item.value}
      </p>
    </div>
  </div>
))}


            {/* HOURS */}
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-3">Business Hours</h3>
              <p className="text-gray-400">Support Available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CATEGORIES */}
      <section className="py-20 bg-[rgba(0,0,0,0.98)]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-yellow-400">
            How Can We Help You?
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: <Headphones />, title: "Technical Support" },
              { icon: <CreditCard />, title: "Billing & Payments" },
              { icon: <User />, title: "Account Issues" },
              { icon: <Handshake />, title: "Partnerships" },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 hover:border-yellow-400 transition"
              >
                <div className="flex justify-center text-yellow-400 mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-extrabold text-yellow-400">
          Ready to Start Watching?
        </h2>
        <p className="text-gray-400 mt-3">
          Join thousands enjoying premium IPTV service
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full"
            href="https://wa.me/+447857099949?text=I%20want%20to%20get%20free%20Trial">
            Start Free Trial
          </a>
          <a className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
            href="/pricing">
            View Plans
          </a>
        </div>
      </section>
    </main>
  );
}
