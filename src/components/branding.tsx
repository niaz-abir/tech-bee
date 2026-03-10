import Link from "next/link";
import React from "react";

export function Branding() {
  const stats = [
    { label: "PROJECTS DONE", value: "18K+" },
    { label: "HAPPY CUSTOMERS", value: "7K+" },
    { label: "CUSTOMER RATING", value: "4.7" },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-[#1f1245] via-[#150c2e] to-[#0a0617] overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Heading Area */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let us build the bridge between your{" "}
          <br className="hidden md:block" />
          brand and customer
        </h2>

        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
          We have helped thousands of companies scale their business. Join the
          fastest <br className="hidden md:block" />
          growing digital agency network today.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 mb-4">
                {stat.value}
              </h3>
              <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <Link href="/contact-us">
          <button className="text-white font-semibold text-lg border-b-2 border-purple-500 pb-1 hover:text-purple-400 hover:border-white transition-all">
            Start Your Project
          </button>
        </Link>
      </div>

      {/* Decorative Vector (Bottom Right Corner) */}
      <div className="absolute bottom-[-50px] right-[-50px] opacity-20 pointer-events-none">
        <svg
          width="300"
          height="300"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="2" />
          <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
