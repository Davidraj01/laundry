import React from "react";
import { ArrowRight, MapPin, Phone, User, Sparkles } from "lucide-react";

const BookingSection = () => {
  return (
    <section
      id="booking"
      className="bg-white min-h-screen py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Clean & Centered */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-100 mb-6">
            <Sparkles size={14} className="text-slate-400" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              Premium Care
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-6">
            Effortless <span className="font-serif italic">Laundry</span> Booking
          </h2>
          <div className="h-1 w-12 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: The Form - Minimalist & Airy */}
          <div className="lg:col-span-5 space-y-10">
            <form className="space-y-8">
              {/* Field: Name */}
              <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">
                  Full Name
                </label>
                <div className="flex items-center gap-3">
                  <User size={18} className="text-slate-300" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent py-2 text-slate-900 placeholder:text-slate-300 outline-none text-lg font-medium"
                  />
                </div>
              </div>

              {/* Field: Phone */}
              <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">
                  Contact Number
                </label>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-300" />
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-transparent py-2 text-slate-900 placeholder:text-slate-300 outline-none text-lg font-medium"
                  />
                </div>
              </div>

              {/* Field: Service */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block">
                  Service Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["Wash & Fold", "Dry Cleaning", "Steam Ironing", "Express"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="px-4 py-3 text-sm font-medium border border-slate-100 rounded-xl text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all text-left"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field: Address */}
              <div className="relative border-b border-slate-200 pb-2 focus-within:border-slate-900 transition-colors">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">
                  Pickup Address
                </label>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-slate-300 mt-3" />
                  <textarea
                    rows={2}
                    placeholder="Where should we pick up?"
                    className="w-full bg-transparent py-2 text-slate-900 placeholder:text-slate-300 outline-none text-lg font-medium resize-none"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className="w-full h-16 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-4 hover:bg-slate-800 transition-all active:scale-[0.98]"
              >
                Schedule Now <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* RIGHT: The Visual - High End & Editorial */}
          <div className="lg:col-span-7 h-full">
            <div className="relative rounded-[3rem] overflow-hidden bg-slate-50 aspect-[4/5] lg:aspect-auto lg:h-[700px]">
              <img
                src="public/inside2.jpg"
                alt="Clean Service"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Info Card */}
              <div className="absolute bottom-10 left-10 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/40 max-w-xs shadow-2xl">
                <p className="text-slate-900 font-bold text-xl mb-2">
                  Pristine Quality.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Every garment is treated with biological detergents and gentle steam to ensure longevity and freshness.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;