import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Inventory & Tagging",
      desc: "Every item is digitally cataloged and RFID-tagged, ensuring 100% traceability from pickup to delivery.",
      image: "https://images.pexels.com/photos/4805484/pexels-photo-4805484.jpeg",
      label: "PRECISION"
    },
    {
      id: "02",
      title: "Smart Classification",
      desc: "Our AI analysis determines the exact pH balance and temperature required for your specific fabric type.",
      image: "https://images.pexels.com/photos/8485587/pexels-photo-8485587.jpeg",
      label: "ANALYSIS"
    },
    {
      id: "03",
      title: "Eco-Sonic Wash",
      desc: "Using bio-based detergents and soft-water technology to remove stains without damaging fiber integrity.",
      image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
      label: "HYGIENE"
    },
    {
      id: "04",
      title: "Aero-Dry Finish",
      desc: "Gentle air-flow drying at optimized humidity levels to maintain the original fit and feel of your clothes.",
      image: "https://images.pexels.com/photos/4495906/pexels-photo-4495906.jpeg",
      label: "FINISHING"
    },
  ];

  return (
    <section id="process" className="bg-white py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - The "Modern" Look */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-indigo-600"></span>
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.4em]">
                The Methodology
              </span>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-[-0.04em] text-slate-950 leading-[0.95]">
              Clean code. <br />
              <span className="font-serif italic text-slate-400">Cleaner clothes.</span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              We’ve redesigned laundry from the ground up. Science-led cleaning for the modern wardrobe.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[16/11] mb-10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute bottom-6 left-6 bg-white px-4 py-1.5 rounded-full shadow-sm">
                   <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase">
                     {step.label}
                   </span>
                </div>
              </div>

              <div className="flex gap-8">
                <span className="text-5xl font-serif italic text-slate-200">{step.id}</span>
                <div>
                  <h3 className="text-3xl font-light tracking-tight text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed text-lg max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Minimalist CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 border-t border-slate-100 pt-20 flex flex-col items-center text-center"
        >
          <div className="bg-indigo-50 text-indigo-600 p-4 rounded-full mb-8">
            <Sparkles size={24} />
          </div>
          <h3 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 mb-10">
            Ready for a <span className="font-serif italic">divine</span> experience?
          </h3>
          <button className="group flex items-center gap-8 text-slate-900 text-sm font-bold uppercase tracking-[0.3em] hover:text-indigo-600 transition-colors">
            Schedule Pickup
            <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-indigo-600 transition-all">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;