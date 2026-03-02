import React from "react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Garment Receiving",
      desc: "Each garment is carefully logged, tagged with RFID technology, and digitally tracked throughout the entire cleaning journey.",
      image: "https://images.pexels.com/photos/4805484/pexels-photo-4805484.jpeg",
    },
    {
      id: "02",
      title: "Fabric Sorting",
      desc: "AI-powered sorting separates clothes by fabric type, color sensitivity, and wash requirements for optimal care.",
      image: "https://images.pexels.com/photos/8485587/pexels-photo-8485587.jpeg",
    },
    {
      id: "03",
      title: "Deep Washing",
      desc: "Advanced eco-friendly machines with premium biodegradable detergents ensure deep yet gentle cleaning.",
      image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1",
    },
    {
      id: "04",
      title: "Controlled Drying",
      desc: "Precision temperature-controlled drying protects fabric texture, prevents shrinkage, and extends garment lifespan.",
      image: "https://images.pexels.com/photos/4495906/pexels-photo-4495906.jpeg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Soft Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-200/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-[80px]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 sm:mb-28"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg shadow-slate-200/50 border border-slate-100 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              How We Work
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Smart Process
            </span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the future of laundry care with our AI-driven workflow designed for 
            maximum hygiene, fabric protection, and perfection.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Center Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-20`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                  >
                    {/* Shadow Layer */}
                    <div className={`absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 ${index % 2 === 0 ? 'group-hover:translate-x-3' : 'group-hover:-translate-x-3'}`} />
                    
                    {/* Image Frame */}
                    <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Step Badge */}
                      <div className={`absolute top-5 ${index % 2 === 0 ? 'left-5' : 'right-5'} px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg`}>
                        <span className="text-sm font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                          Step {step.id}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 sm:p-10 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-500 group"
                  >
                    {/* Large Background Number */}
                    <div className="absolute -top-4 -right-4 text-9xl font-bold text-slate-50 select-none pointer-events-none">
                      {step.id}
                    </div>

                    {/* Timeline Node - Desktop */}
                    <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-left-[4.5rem]' : '-right-[4.5rem]'} w-10 h-10 rounded-full bg-white shadow-lg shadow-slate-200 items-center justify-center z-10`}>
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                    </div>

                    {/* Connector Line */}
                    <div className={`hidden lg:block absolute top-1/2 ${index % 2 === 0 ? '-left-8 w-8' : '-right-8 w-8'} h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500`} />

                    {/* Step Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 p-[2px] shadow-lg shadow-cyan-500/20">
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-br from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                            {step.id}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="relative text-slate-500 leading-relaxed text-base sm:text-lg mb-8">
                      {step.desc}
                    </p>

                    {/* Feature Tags */}
                    <div className="relative flex flex-wrap gap-3">
                      {index === 0 && (
                        <>
                          <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-medium">RFID Tracking</span>
                          <span className="px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium">Digital Log</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">AI Sorting</span>
                          <span className="px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-medium">Color Care</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <span className="px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-600 text-sm font-medium">Eco-Friendly</span>
                          <span className="px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-sm font-medium">Deep Clean</span>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <span className="px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium">Precision Temp</span>
                          <span className="px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium">Fabric Safe</span>
                        </>
                      )}
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 sm:mt-32 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-10 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="text-center sm:text-left">
              <p className="text-slate-900 font-bold text-xl">Ready to experience the difference?</p>
              <p className="text-slate-500 text-sm mt-1">Join thousands of satisfied customers today.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 whitespace-nowrap"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;