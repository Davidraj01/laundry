import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Sparkles,
  Shirt,
  Wind,
  Footprints,
  Home,
} from "lucide-react";

/* ---------------- Animations ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const icons = useMemo(
    () => [Shirt, Wind, Footprints, Home, Sparkles],
    []
  );

  const floatingIcons = useMemo(() => {
    const count =
      typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 18;

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      left: `${(i * 31) % 100}%`,
      top: `${(i * 47) % 100}%`,
      size: 26 + (i % 18),
      duration: 20 + (i % 10),
    }));
  }, [icons]);

  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/inside6.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ id, Icon, left, top, size, duration }) => (
          <motion.div
            key={id}
            className="absolute text-white/70 will-change-transform"
            style={{ left, top }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6">

        {/* BRAND */}
        <motion.h1
          variants={fadeUp}
          className="
            text-yellow-400
            text-[42px] sm:text-[64px] lg:text-[92px] xl:text-[110px]
            font-extrabold
            leading-[0.95]
            drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]
            mb-4
          "
        >
          Divine Laundry
        </motion.h1>

        {/* LOCATION */}
        <motion.p
          variants={fadeUp}
          className="
            mb-8
            text-sm sm:text-lg lg:text-xl
            font-semibold
            tracking-wide
            text-white/90
          "
        >
          Now at Vinobanagar, East Tambaram, Chennai – 600059
        </motion.p>

        {/* TAGLINE */}
        <motion.h2
          variants={fadeUp}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="
            text-[26px] sm:text-[40px] lg:text-[56px] xl:text-[64px]
            font-extrabold
            text-white
            leading-tight
            mb-12
          "
        >
          Service You Can Trust
          <br />
          Freshness You Can Feel
        </motion.h2>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-5"
        >
          {/* ORDER NOW */}
          <div
            className="
              group
              bg-gradient-to-br from-blue-500/90 to-indigo-600/90
              rounded-3xl
              p-[2px]
              transition-transform duration-300
              sm:hover:scale-110
              shadow-[0_28px_70px_rgba(59,130,246,0.55)]
            "
          >
            <button
              className="
                flex items-center gap-3
                px-10 py-5
                rounded-3xl
                font-black
                text-lg sm:text-xl
                text-white
                bg-black/20
                backdrop-blur-xl
                w-full h-full
              "
            >
              Order Now <ArrowRight size={22} />
            </button>
          </div>

          {/* CALL NOW */}
          <button
            className="
              border border-white/40
              bg-white/10
              backdrop-blur-xl
              px-10 py-5
              rounded-3xl
              font-black
              text-lg sm:text-xl
              text-white
              flex items-center gap-3
              transition
              hover:bg-white/20
            "
          >
            <Phone size={22} /> Call Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
