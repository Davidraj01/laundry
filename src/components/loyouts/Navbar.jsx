import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navAnim = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Pricing", "Contact"];

  return (
    <motion.nav
      variants={navAnim}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full"
    >
      {/* ---------- WHITE GLASS BACKDROP ---------- */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-b border-black/5" />

      <div className="relative flex items-center justify-between px-5 md:px-12 lg:px-24 py-4">
        
        {/* ---------- LOGO ---------- */}
        <div className="flex items-center gap-3 cursor-pointer z-50">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold text-lg shadow-sm">
            D
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-gray-900 leading-none">
              Divine Laundry
            </h3>
            <p className="text-[10px] text-gray-500 tracking-wide mt-1">
              Premium Fabric Care
            </p>
          </div>
        </div>

        {/* ---------- DESKTOP LINKS ---------- */}
        <div className="hidden lg:flex items-center gap-12 text-sm font-medium text-gray-600">
          {navLinks.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -1 }}
              className="relative group transition-colors hover:text-gray-900"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.a>
          ))}
        </div>

        {/* ---------- ACTIONS ---------- */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          
          {/* Call Button */}
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm hover:text-gray-900 hover:border-gray-400 transition">
            <Phone size={14} />
            <span className="hidden md:inline">Call Now</span>
          </button>

          {/* Order Now CTA */}
          <button className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/20">
            Order Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden relative bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-black/5 my-2" />
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={16} /> +91 98765 43210
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
