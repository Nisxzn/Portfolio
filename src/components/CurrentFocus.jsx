import React from 'react';
import { motion } from 'framer-motion';

const focuses = [
  "Animated Interface Development",
  "Cross-platform App Development",
  "Motion Design Systems",
  "Multimodal AI Systems",
  "Neural Networking"
];

const CurrentFocus = () => {
  return (
    <section className="py-24 relative z-10 border-b border-white/5 bg-transparent">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24">

        {/* Left Side: Text */}
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-ai-blue pl-6"
          >
            <h2 className="text-ai-text-secondary font-mono text-xs tracking-[0.3em] uppercase mb-2">
              Research
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight leading-none mb-4">
              Currently<br />Exploring
            </h3>
            <p className="text-ai-text-secondary text-sm font-light">
              Active areas of research and continuous experimentation within the lab.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Floating Labels */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap gap-4">
            {focuses.map((focus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md cursor-crosshair group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/0 via-ai-cyan/10 to-ai-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                  {focus}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurrentFocus;
