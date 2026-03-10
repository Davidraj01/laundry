import React, { useMemo } from "react";
import { motion } from "framer-motion";

const IMAGE_1 = "/inside1.jpg";
const IMAGE_2 = "/inside2.jpg";
const IMAGE_3 = "/inside3.jpg";

// Increased count for a "Grand" feel
const CONFETTI_COUNT = 80; 

const TripleImageConfettiEntrance = () => {
  // Creating a more diverse set of confetti data
  const confettiData = useMemo(() => 
    Array.from({ length: CONFETTI_COUNT }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: ["#6366f1", "#a855f7", "#22d3ee", "#f472b6"][Math.floor(Math.random() * 4)], // Indigo, Purple, Cyan, Pink
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
      type: Math.random() > 0.5 ? "circle" : "square", // Mix of shapes
      sway: Math.random() * 100 - 50, // Horizontal movement
    })), []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center px-6 bg-white py-24">
      
      {/* 🎊 HIGH-ATTRACTION CONFETTI */}
      {confettiData.map((c) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: -50, x: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            y: "110vh", 
            x: c.sway, 
            rotate: 720 
          }}
          transition={{
            delay: c.delay,
            duration: c.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 pointer-events-none z-0"
          style={{ 
            left: `${c.left}%`,
            width: c.size,
            height: c.type === "circle" ? c.size : c.size * 1.5,
            backgroundColor: c.color,
            borderRadius: c.type === "circle" ? "50%" : "2px",
            filter: "drop-shadow(0 0 5px rgba(0,0,0,0.1))"
          }}
        />
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* TEXT SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.5em] mb-8 px-6 py-2 rounded-full border border-indigo-100"
          >
            Grand Opening
          </motion.div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-light tracking-[-0.06em] text-slate-950 leading-[0.85] mb-8">
            Divine <br />
            <span className="font-serif italic text-indigo-600/80">Laundry ✨</span>
          </h1>

          <div className="space-y-4">
            <p className="text-slate-500 text-lg sm:text-xl font-light tracking-tight max-w-lg mx-auto leading-relaxed">
              Experience the future of garment care at our brand new flagship location.
            </p>
            <div className="flex items-center justify-center gap-4">
               <div className="h-[1px] w-12 bg-slate-200" />
               <p className="text-slate-900 text-sm font-bold uppercase tracking-widest">East Tambaram</p>
               <div className="h-[1px] w-12 bg-slate-200" />
            </div>
          </div>
        </motion.div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[IMAGE_1, IMAGE_2, IMAGE_3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 1 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] bg-slate-100 border-[12px] border-white transition-all duration-700 group-hover:border-indigo-50 group-hover:scale-[1.02]">
                <img
                  src={img}
                  alt="Divine Interior"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl z-20 border border-slate-50"
              >
                <span className="text-2xl font-serif italic text-indigo-600">0{index + 1}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripleImageConfettiEntrance;