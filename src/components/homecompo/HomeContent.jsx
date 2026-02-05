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

/* ------------------ Animations ------------------ */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.35 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function HeroSection() {
  const icons = [Shirt, Wind, Footprints, Home, Sparkles];

  const floatingIcons = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        Icon: icons[i % icons.length],
        left: `${(i * 27) % 100}%`,
        top: `${(i * 41) % 100}%`,
        size: 32 + (i % 22),
        duration: 18 + (i % 12),
      })),
    []
  );

  return (
    <motion.section
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
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-white/10"
            style={{ left: item.left, top: item.top }}
            animate={{
              y: [0, -50, 0],
              x: [0, 25, -25, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6">

        {/* BRAND */}
        <motion.h1
          variants={fadeUp}
          className="
            text-yellow-400
            text-[44px] sm:text-[60px] lg:text-[88px] xl:text-[104px]
            font-extrabold
            leading-[1]
            drop-shadow-[0_28px_55px_rgba(0,0,0,0.7)]
            mb-5
          "
        >
          Divine Laundry
        </motion.h1>

        {/* LOCATION */}
        <motion.p
          variants={fadeUp}
          className="
            mb-10
            text-base sm:text-xl lg:text-2xl
            font-bold
            tracking-wide
            text-white/90
          "
        >
          Now at Vinobanagar, East Tambaram, Chennai – 600059
        </motion.p>

        {/* TAGLINE */}
        <motion.h2
          variants={fadeUp}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
            text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[68px]
            font-extrabold
            text-white
            leading-tight
            mb-14
          "
        >
          Service You Can Trust
          <br />
          Freshness You Can Feel
        </motion.h2>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-6"
        >
          {/* ORDER NOW – BLUE CARD */}
          <div className="
            group
            bg-gradient-to-br from-blue-500/90 to-indigo-600/90
            backdrop-blur-xl
            rounded-3xl
            p-[2px]
            hover:scale-110
            transition-all
            duration-300
            shadow-[0_35px_90px_rgba(59,130,246,0.6)]
          ">
            <button className="
              flex items-center gap-4
              px-12 py-6
              rounded-3xl
              font-black
              text-xl
              text-white
              bg-black/20
              w-full h-full
            ">
              Order Now <ArrowRight size={22} />
            </button>
          </div>

          {/* CALL NOW */}
          <button className="
            border border-white/40
            bg-white/10
            backdrop-blur-xl
            px-12 py-6
            rounded-3xl
            font-black
            text-xl
            text-white
            flex items-center gap-4
            hover:bg-white/20
            transition
          ">
            <Phone size={22} /> Call Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
