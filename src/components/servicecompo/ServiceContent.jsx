import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Laundry",
      desc: "Premium wash & fold with fabric-safe detergents for everyday wear.",
      image: "https://images.pexels.com/photos/4700411/pexels-photo-4700411.jpeg",
    },
    {
      title: "Dry Cleaning",
      desc: "Expert care for suits, sarees & luxury garments.",
      image: "https://images.pexels.com/photos/11450438/pexels-photo-11450438.jpeg",
    },
    {
      title: "Shoe Cleaning",
      desc: "Deep cleaning & restoration for sneakers and footwear.",
      image: "https://images.pexels.com/photos/16319448/pexels-photo-16319448.jpeg",
    },
    {
      title: "Steam Ironing",
      desc: "Sharp, wrinkle-free steam pressing with precision finish.",
      image: "https://images.pexels.com/photos/7641487/pexels-photo-7641487.jpeg",
    },
    {
      title: "Home Cleaning",
      desc: "Curtains, bedsheets & all home fabric essentials.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
  ];

  return (
    <section id="services" className="bg-white py-24 sm:py-32 px-6 md:px-12 lg:px-24">
      {/* Modern Header Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Expertise
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter text-slate-900 leading-[1.1]">
            Curated care for <br />
            <span className="font-serif italic text-slate-500">your essentials.</span>
          </h2>
        </div>
        <p className="text-slate-500 text-lg sm:text-xl font-light max-w-md leading-relaxed border-l border-slate-200 pl-8">
          Every garment is handled with clinical precision and sustainable technology.
        </p>
      </div>

      {/* Modern Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative h-[500px] rounded-[40px] overflow-hidden bg-slate-100 transition-all duration-700 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
          >
            {/* Background Image with subtle zoom */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Refined Gradient - Lighter and more modern */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Floating Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-light text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.desc}
                </p>
                
                <button className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group/btn">
                  <span className="h-[1px] w-8 bg-white group-hover/btn:w-12 transition-all duration-300"></span>
                  Book Service
                  <ArrowUpRight size={16} className="text-indigo-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;