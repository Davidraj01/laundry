import React from "react";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      title: "Laundry",
      price: "120",
      unit: "/ kg",
      subtitle: "Wash, dry & fold",
      features: ["Premium detergents", "Separate wash", "48h delivery"],
      isPopular: false,
    },
    {
      title: "Dry Cleaning",
      price: "200",
      unit: "start",
      subtitle: "Premium care",
      features: ["Suits & Sarees", "Stain removal", "Express option"],
      isPopular: true,
    },
    {
      title: "Steam Ironing",
      price: "12",
      unit: "/ pc",
      subtitle: "Wrinkle-free",
      features: ["Professional press", "Saree pleating", "Same day"],
      isPopular: false,
    },
    {
      title: "Shoe Care",
      price: "250",
      unit: "/ pair",
      subtitle: "Restoration",
      features: ["Deep cleaning", "Deodorizing", "Minor repairs"],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist & High Contrast */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              Pricing
            </span>
            <h2 className="text-6xl sm:text-7xl font-light tracking-tighter text-slate-950 leading-[0.95]">
              Value without <br />
              <span className="font-serif italic text-slate-400">compromise.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg font-light max-w-xs border-l border-slate-100 pl-8 leading-relaxed">
            Transparent rates for professional care. No hidden fees, just pure quality.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-10 rounded-[40px] transition-all duration-500 border ${
                plan.isPopular 
                  ? "bg-slate-950 text-white border-slate-900 shadow-2xl" 
                  : "bg-white text-slate-900 border-slate-100 hover:border-indigo-200"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-6 right-8">
                  <span className="text-[10px] font-black tracking-widest uppercase bg-indigo-600 text-white px-3 py-1 rounded-full">
                    Best Seller
                  </span>
                </div>
              )}

              <div className="mb-12">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-8 ${
                  plan.isPopular ? "text-indigo-400" : "text-indigo-600"
                }`}>
                  {plan.title}
                </h3>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium opacity-60">₹</span>
                  <span className="text-6xl font-light tracking-tighter">{plan.price}</span>
                  <span className="text-xs font-medium opacity-50 ml-1 italic">{plan.unit}</span>
                </div>
                <p className="text-sm font-light mt-2 opacity-60">{plan.subtitle}</p>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <Check size={14} className={plan.isPopular ? "text-indigo-400" : "text-indigo-600"} />
                    <span className="text-sm font-light tracking-tight opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`flex items-center justify-between w-full p-2 pl-6 rounded-full group/btn transition-all duration-300 ${
                  plan.isPopular 
                    ? "bg-white text-slate-950 hover:bg-indigo-50" 
                    : "bg-slate-50 text-slate-900 hover:bg-slate-950 hover:text-white"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest">Book Now</span>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-transform group-hover/btn:rotate-[-45deg] ${
                  plan.isPopular ? "bg-slate-100" : "bg-white shadow-sm"
                }`}>
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Micro-Copy */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
            * Prices may vary based on fabric type and stains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;