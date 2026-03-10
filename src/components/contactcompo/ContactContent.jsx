import React from "react";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-20 sm:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 lg:mb-24">
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            Get in touch
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter text-slate-900">
            Let's make your <br />
            <span className="font-serif italic text-indigo-600">wardrobe</span> divine.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT — Info Cards */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 gap-10">
              <div className="group cursor-pointer">
                <p className="text-slate-400 text-sm font-medium mb-3 group-hover:text-indigo-600 transition-colors">Call Us</p>
                <a href="tel:+919994264467" className="text-2xl font-medium text-slate-800 flex items-center gap-3">
                  +91 99942 64467 <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div className="group cursor-pointer">
                <p className="text-slate-400 text-sm font-medium mb-3 group-hover:text-indigo-600 transition-colors">Email Us</p>
                <a href="mailto:info@divinelaundry.in" className="text-2xl font-medium text-slate-800 flex items-center gap-3">
                  info@divinelaundry.in <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div className="group">
                <p className="text-slate-400 text-sm font-medium mb-3">Visit Us</p>
                <p className="text-xl leading-relaxed text-slate-700">
                  31/15, IAF Rd, Vinoba Nagar,<br />
                  East Tambaram, Chennai - 600059
                </p>
              </div>

              <div className="group">
                <p className="text-slate-400 text-sm font-medium mb-3">Service Hours</p>
                <p className="text-xl text-slate-700 font-medium">Mon — Sat: 8AM - 8PM</p>
                <p className="text-slate-400 text-sm mt-1 italic">Closed on Sundays</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Map with Stylized Frame */}
          <div className="lg:col-span-7 relative">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 h-[500px] w-full">
              <iframe
                title="Divine Laundry Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.375253139366!2d80.1257321!3d12.9157242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0022634991%3A0xc6e4b2d3527a01!2sDivine%20Laundry!5e0!3m2!1sen!2sin!4v1715432000000!5m2!1sen!2sin"
                className="w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Floating Quick Action */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-[240px]">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Current Status</p>
                  <p className="text-sm font-bold text-slate-900">Open & Accepting Orders</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;