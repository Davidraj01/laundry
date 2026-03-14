import React from "react";
import {
  ShieldCheck,
  Zap,
  Smile,
  IndianRupee,
  Layers,
  Leaf,
  ArrowRight
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      title: "Separate Wash",
      desc: "Your clothes are never mixed with others. Hygiene is our priority.",
      icon: Layers,
      className: "md:col-span-2 bg-gradient-to-br from-violet-50 to-white",
      iconBg: "bg-violet-500",
    },
    {
      title: "Express",
      desc: "24h Turnaround.",
      icon: Zap,
      className: "col-span-1 bg-amber-50/50",
      iconBg: "bg-amber-500",
    },
    {
      title: "Eco-Friendly",
      desc: "Gentle detergents that love your skin and the planet.",
      icon: Leaf,
      className: "col-span-1 bg-emerald-50/50",
      iconBg: "bg-emerald-500",
    },
    {
      title: "Expert Handling",
      desc: "From silk to wool, we treat every fiber with professional precision.",
      icon: ShieldCheck,
      className: "md:col-span-2 bg-gradient-to-tr from-blue-50 to-white",
      iconBg: "bg-blue-500",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#fafafa] py-24 px-6 lg:px-24">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-purple-600 font-bold mb-4">
              Premium Laundry Service
            </h2>
            <h3 className="text-5xl md:text-7xl font-light text-slate-900 leading-tight">
              We take the <span className="font-serif italic text-purple-700">load</span> off your hands.
            </h3>
          </div>
          <p className="max-w-xs text-slate-500 text-lg leading-relaxed border-l-2 border-purple-200 pl-6">
            Providing Chennai with professional garment care since 2019.
            Freshness, delivered to your door.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${f.className}`}
            >
              <div className={`w-14 h-14 ${f.iconBg} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                <f.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* INTERACTIVE STATS BAR */}
        <div className="bg-white/60 backdrop-blur-md rounded-[3rem] border border-white p-12 shadow-2xl flex flex-wrap justify-around items-center gap-12">
          <StatBlock number="10k+" label="Clothes Cleaned" />
          <div className="hidden md:block h-12 w-[1px] bg-slate-200" />
          <StatBlock number="1k+" label="Happy Clients" />
          <div className="hidden md:block h-12 w-[1px] bg-slate-200" />
          <StatBlock number="4.9" label="Avg Rating" isStar />

          <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-purple-800 transition-all hover:shadow-lg hover:px-10">
            Book a Wash <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ number, label, isStar }) => (
  <div className="text-center">
    <div className="text-4xl font-black text-slate-900 flex items-center justify-center">
      {number}{isStar && <span className="text-amber-400 text-2xl ml-1">★</span>}
    </div>
    <div className="text-slate-500 text-xs uppercase tracking-widest mt-2 font-semibold">
      {label}
    </div>
  </div>
);

export default AboutSection;