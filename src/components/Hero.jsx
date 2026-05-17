import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 120]);
  const yParallaxText = useTransform(scrollY, [0, 1000], [0, 40]);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]"></div>
      </motion.div>

      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-ai-blue/10 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-ai-cyan/10 blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <motion.div style={{ y: yParallaxText }} className="flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-ai-text-secondary font-bangers text-lg tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-ai-cyan"></span>
              Nithish Parameswaran
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-goodtimes leading-[1.25] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
              CREATIVE DEVELOPER<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-blue via-ai-cyan to-white">
                BUILDING AI ML SYSTEMS
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-ai-text-secondary leading-relaxed max-w-xl font-light"
          >
            Artificial Intelligence engineer focused on AI, ML, Data Science, AI Agents, RAG Systems, and interactive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-full font-display font-bold uppercase tracking-wider text-xs bg-ai-blue text-black hover:bg-ai-blue/90 shadow-[0_4px_14px_rgba(77,163,255,0.25)] hover:shadow-[0_6px_20px_rgba(77,163,255,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              View Projects <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>

            <a
              href="#"
              className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 hover:border-ai-cyan/40 hover:text-ai-cyan hover:shadow-[0_4px_15px_rgba(34,211,238,0.15)] transition-all duration-300 text-white font-display font-bold uppercase tracking-wider text-xs border border-white/20"
            >
              Resume
            </a>

            <a
              href="https://github.com/Nisxzn"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full glass-panel hover:bg-white/10 hover:border-ai-cyan/40 hover:text-ai-cyan hover:shadow-[0_4px_15px_rgba(34,211,238,0.15)] transition-all duration-300 text-white border border-white/20 flex items-center justify-center"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ y: yParallax }}
          className="relative hidden lg:flex items-center justify-center h-[520px] w-full"
        >
          {/* Ambient glow behind image */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-[400px] h-[400px] bg-gradient-to-tr from-ai-blue/30 to-ai-cyan/30 blur-[100px] rounded-full pointer-events-none"
          />

          {/* Rotating glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(77, 163, 255, 0.4), transparent, rgba(34, 211, 238, 0.4), transparent)',
            }}
          />

          {/* Pulsing outer ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-[440px] h-[440px] rounded-full border border-ai-cyan/20 pointer-events-none"
          />

          {/* Breathing zoom image */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              src="/hero-avatar.png"
              alt="Nisxzn Portrait"
              className="w-[400px] h-[400px] object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

