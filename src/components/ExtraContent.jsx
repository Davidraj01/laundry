import React, { useMemo } from "react";
import { motion } from "framer-motion";

const IMAGE_1 = "/inside1.jpg";
const IMAGE_2 = "/inside2.jpg";
const IMAGE_3 = "/inside3.jpg";

const CONFETTI_COUNT = 260;

const TripleImageConfettiEntrance = () => {
  const confettiArray = useMemo(
    () => Array.from({ length: CONFETTI_COUNT }),
    []
  );

  return (
    <section className="
      relative
      min-h-[100svh]
      w-full
      overflow-hidden
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      bg-gradient-to-b
      from-slate-50
      via-slate-100
      to-slate-50
    ">

      {/* 🎊 CONFETTI */}
      {confettiArray.map((_, i) => {
        const size = Math.random() > 0.8 ? 6 : 4;
        return (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: -100,
              x: `${Math.random() * 120 - 60}vw`,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: "120vh",
              rotate: Math.random() * 360,
            }}
            transition={{
              delay: Math.random() * 2.5,
              duration: 10 + Math.random() * 4,
              ease: "linear",
            }}
            className="absolute top-0 pointer-events-none rounded-full"
            style={{
              width: size,
              height: size * 2,
              left: `${Math.random() * 100}%`,
              background:
                Math.random() > 0.5
                  ? "linear-gradient(180deg,#94a3b8,#38bdf8)"
                  : "linear-gradient(180deg,#cbd5f5,#22d3ee)",
              opacity: 0.4,
            }}
          />
        );
      })}

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 120 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-7xl"
      >
        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Divine Laundry ✨
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium">
            Now at Vinobanagar, East Tambaram, Chennai – 600059
          </p>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[IMAGE_1, IMAGE_2, IMAGE_3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.4 + index * 0.25,
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                overflow-hidden
                bg-white
                border border-black/10
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              <img
                src={img}
                alt={`Laundry ${index + 1}`}
                className="w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TripleImageConfettiEntrance;
