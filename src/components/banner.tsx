import Image from "next/image";
import { HiStar, HiPlayCircle } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";
import heroImage from "../../public/images/hero.jpg";

export function Banner() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#1f1245] via-[#150c2e] to-[#0a0617] text-white overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Grid Background Effect */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-slate-300 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            #1 Digital Marketing Agency
          </div>

          <h1 className="text-[clamp(2.5rem,_5vw,_4.5rem)] font-bold leading-[1.1] tracking-tight mb-6">
            Grow your brand <br />
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              viral content.
            </span>
          </h1>

          <p className="max-w-[28rem] text-lg leading-relaxed text-slate-400 mb-10">
            Unlock your business potential with data-driven strategies and
            stunning design. We turn visitors into loyal customers.
          </p>

          <div className="flex flex-wrap items-center gap-8 mb-12">
            <button className="bg-[#5e36d0] hover:bg-[#4b29b0] hover:scale-105 shadow-[0_0_25px_rgba(94,54,208,0.4)] transition-all py-4 px-10 rounded-full font-bold text-lg">
              Get Started Now
            </button>
            <button className="flex items-center gap-3 group text-slate-200 hover:text-white transition-colors">
              <HiPlayCircle className="text-5xl opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="font-semibold border-b border-transparent group-hover:border-white">
                View Showreel
              </span>
            </button>
          </div>

          {/* Social Proof Group */}
          <div className="flex items-center gap-5 p-3 pr-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-[3px] border-[#020410] bg-slate-800 flex items-center justify-center overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-lg" />
                ))}
              </div>
              <p className="text-[13px] text-slate-400 font-semibold tracking-wide uppercase">
                Trusted by 2,000+ brands
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section with Absolute Stat Overlays */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* Glow Effect behind image */}
            <div className="absolute -inset-4 bg-purple-600/20 blur-[60px] rounded-full"></div>

            {/* Main Hero Image */}
            <Image
              src={heroImage}
              alt="Hero"
              className="relative z-10 rounded-[48px] object-cover border-[6px] border-white/5 shadow-2xl"
              height={600}
              width={600}
              priority
            />

            {/* Top-Left Stat Card: Revenue */}
            <div className="absolute top-[12%] -left-12 z-20 bg-[#151921]/95 backdrop-blur-xl border border-white/10 p-5 rounded-[24px] shadow-2xl min-w-[180px] hidden xl:block">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400">
                  <HiStar size={24} />
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">
                    Revenue
                  </p>
                  <p className="text-2xl font-black">$48.2k</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[72%] rounded-full shadow-[0_0_10px_#10b981]" />
                </div>
                <p className="text-[11px] font-bold text-emerald-400">
                  +12% vs last month
                </p>
              </div>
            </div>

            {/* Bottom-Right Stat Card: Satisfaction */}
            <div className="absolute bottom-[15%] -right-8 z-20 bg-[#151921]/95 backdrop-blur-xl border border-white/10 p-5 rounded-[24px] shadow-2xl hidden xl:block">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400">
                  <FaUsers size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-2xl font-black">4.9</span>
                    <HiStar size={20} className="text-yellow-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text snippet from image */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          Join our 30,000+ happy customers
        </p>
      </div>
    </section>
  );
}
