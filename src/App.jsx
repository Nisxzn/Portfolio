import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import CurrentFocus from './components/CurrentFocus';
import About from './components/About';
import Contact from './components/Contact';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';

// Premium high-fidelity ScrollReveal wrapper
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for buttery smooth acceleration and deceleration
      }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const { scrollY } = useScroll();

  // High-fidelity background parallax translation mappings
  const gridY = useTransform(scrollY, [0, 5000], [0, -250]);
  const orbBlueY = useTransform(scrollY, [0, 5000], [0, 180]);
  const orbPurpleY = useTransform(scrollY, [0, 5000], [0, -180]);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <div className="bg-ai-bg min-h-screen text-ai-text overflow-x-hidden relative selection:bg-ai-cyan selection:text-black">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="/hero-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[40px]" />
        <motion.div style={{ y: gridY }} className="absolute inset-0 grid-bg opacity-20"></motion.div>
        <motion.div style={{ y: orbBlueY }} className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-ai-blue/10 blur-[150px]"></motion.div>
        <motion.div style={{ y: orbPurpleY }} className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-ai-purple/10 blur-[150px]"></motion.div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal><FeaturedProjects /></ScrollReveal>
          <ScrollReveal><TechStack /></ScrollReveal>
          <ScrollReveal><CurrentFocus /></ScrollReveal>
          <ScrollReveal><About /></ScrollReveal>
          <ScrollReveal><Contact /></ScrollReveal>
        </main>

        <footer className="border-t border-white/5 py-8 text-center bg-black relative z-10">
          <div className="max-w-2xl mx-auto w-full px-6 flex flex-col items-center justify-center">

            {/* Logo in "Banger Font" (Good Times) */}
            <div className="text-1xl md:text-2xl font-goodtimes tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/30 uppercase mb-4">
              NISXZN
            </div>

            {/* Copyright Text */}
            <p className="text-white/50 text-xs md:text-sm tracking-[0.2em] font-mono uppercase mt-1">
              &copy;{new Date().getFullYear()} <span className="font-goodtimes text-[10px] md:text-xs tracking-wider text-ai-cyan">Nisxzn</span>. All rights reserved.
            </p>

            {/* Glowing Accent Divider Line */}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
