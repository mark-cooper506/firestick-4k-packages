"use client";

import { CreditCard, Smartphone, Bitcoin, Shield, Phone } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "15",
      period: "/month",
      desc: "Perfect for getting started",
      features: [
        "10,000+ Live Channels",
        "HD Quality Streaming",
        "5,000+ VOD Movies & Series",
        "Multi-Device Support",
        "Electronic Program Guide (EPG)",
        "24/7 Customer Support",
        "Instant Activation",
      ],
      link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20IPTV%201%20Month%20Plan",
      popular: false,
    },
    {
      title: "Premium",
      price: "25",
      period: "/3 months",
      desc: "Save 22% with quarterly billing",
      features: [
        "Everything in Basic",
        "4K Ultra HD Quality",
        "15,000+ VOD Movies & Series",
        "Premium Sports Channels",
        "Priority Customer Support",
        "Anti-Freezing Technology",
        "Catch-up TV (7 Days)",
        "Multi-Room Access",
      ],
      link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20IPTV%203%20Months%20Plan",
      popular: false,
    },
    {
      title: "6 Months",
      price: "40",
      period: "/6 months",
      desc: "Save 50% with semi-annual billing",
      features: [
        "Everything in Premium",
        "20,000+ VOD Movies & Series",
        "All Premium Channels",
        "VIP Customer Support",
        "Catch-up TV (30 Days)",
        "Cloud DVR (50 Hours)",
        "5 Simultaneous Connections",
        "Exclusive Content Access",
        "2 Months Free",
      ],
      link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20IPTV%206%20Months%20Plan",
      popular: true,
    },
    {
      title: "Annual",
      price: "65",
      period: "/year",
      desc: "Best value - Save 58%",
      features: [
        "Everything in Premium",
        "25,000+ VOD Movies & Series",
        "All Premium Channels",
        "VIP Customer Support",
        "Catch-up TV (60 Days)",
        "Cloud DVR (100 Hours)",
        "10 Simultaneous Connections",
        "Exclusive Content Access",
        "4 Months Free",
      ],
      link: "https://wa.me/+447857099949?text=I%20want%20to%20order%20Subscription%20IPTV%201%20Year%20Plan",
      popular: false,
      affordable: true,
    },
  ];

  const payments = [
    // { icon: <CreditCard size={32} />, title: "Credit/Debit Cards", desc: "Visa, Mastercard, American Express" },
    { icon: <Smartphone size={32} />, title: "Digital Wallets", desc: "PayPal, Apple Pay, Google Pay" },
    // { icon: <Bitcoin size={32} />, title: "Cryptocurrency", desc: "Bitcoin, Ethereum, USDT" },
    { icon: <Phone size={32} />, title: "Bank Transfer", desc: "Direct Mobile transfers available" },
  ];

  const guaranteeFeatures = ["No Risk Trial", "Instant Refund", "24/7 Support"];

  return (
    <>
 
      <section className="bg-[rgba(0,0,0,0.95)] text-center py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Affordable pricing for premium IPTV service with no hidden fees
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, idx) => (
             <div
  key={idx}
  className={`bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center relative hover:scale-105 transition-transform ${
    plan.popular || plan.affordable ? "border-4 border-yellow-500" : ""
  }`}
>
  {plan.popular && (
    <div className="absolute -top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm shadow-lg">
      Most Popular
    </div>
  )}
  {plan.affordable && (
    <div className="absolute -top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm shadow-lg">
      Most Affordable
    </div>
  )}
  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{plan.title}</h3>
  <div className="text-3xl font-extrabold mb-2">
    <span className="text-lg align-top text-white">£</span>
    <span className="text-white">{plan.price}</span>
    <span className="text-sm text-gray-300 font-medium ml-1">{plan.period}</span>
  </div>
  <p className="text-gray-300 mb-4">{plan.desc}</p>
  <ul className="text-gray-300 text-left mb-6 space-y-1">
    {plan.features.map((f, i) => (
      <li key={i}>✓ {f}</li>
    ))}
  </ul>
  <a
    href={plan.link}
    target="_blank"
    className={`px-6 py-3 rounded-full font-bold transition-all ${
      plan.popular
        ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
        : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
    }`}
  >
    Order on WhatsApp
  </a>
</div>

            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-10 bg-[rgba(0,0,0,0.95)] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">Secure Payment Methods</h2>
          <p className="text-gray-300 mb-8">We accept various payment options for your convenience</p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {payments.map((p, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
                <div className="mb-2 text-yellow-400">{p.icon}</div>
                <h4 className="text-yellow-400 font-bold mb-1">{p.title}</h4>
                <p className="text-gray-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-10 bg-yellow-500 text-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <Shield size={48} className="mb-4 text-gray-900" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">30-Day Money-Back Guarantee</h2>
            <p className="mb-6">
              Not satisfied with our service? Get a full refund within 30 days of purchase. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {guaranteeFeatures.map((g, i) => (
                <div key={i} className="bg-gray-900 text-yellow-400 px-4 py-2 rounded-full font-bold">
                  ✓ {g}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
