import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

/* ------------------ CONSTANTS ------------------ */

const NAV_LINKS = ["Home", "About", "Services", "Pricing", "Contact"];

const navAnim = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const mobileMenuAnim = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  show: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visits, setVisits] = useState(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /* -------- REAL VISIT COUNTER (100% REAL) -------- */
  useEffect(() => {
    const namespace = "divinelaundrychennai2026";
    const key = "homepage";

    const updateCounter = async () => {
      try {
        let url = `https://api.counterapi.dev/v1/${namespace}/${key}`;
        const hasVisited = sessionStorage.getItem("visit_counted");

        // React Strict Mode calls useEffect twice. 
        // Set the storage immediately so the second call doesn't also increment it.
        if (!hasVisited) {
          url += "/up";
          sessionStorage.setItem("visit_counted", "true");
        } else {
          // Adding a trailing slash prevents a 301 Redirect which breaks CORS
          url += "/";
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data && typeof data.count === "number") {
          setVisits(data.count);
        } else {
          setVisits(0);
        }
      } catch (error) {
        console.error("Counter error:", error);
        setVisits(0);
      }
    };

    updateCounter();
  }, []);

  return (
    <motion.nav
      variants={navAnim}
      initial="hidden"
      animate="show"
      className="sticky top-0 z-50 w-full"
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-b border-black/5 pointer-events-none" />

      <div className="relative flex items-center justify-between px-5 md:px-12 lg:px-24 py-4">

        {/* LOGO */}
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

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-12 text-sm font-medium text-gray-600">
          {NAV_LINKS.map((item) => (
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

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5 z-50">

          {/* 👁 REAL VISIT COUNT */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium shadow-sm">
            👁 {visits !== null ? visits.toLocaleString() : "Loading..."} Visits
          </div>

          {/* Call Button */}
          <button
            aria-label="Call Divine Laundry"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-sm hover:text-gray-900 hover:border-gray-400 transition"
          >
            <Phone size={14} />
            <span className="hidden md:inline">Call Now</span>
          </button>

          {/* CTA */}
          <button className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/20">
            Order Now
          </button>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            className="lg:hidden relative bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-8">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <hr className="border-black/5 my-2" />

              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;