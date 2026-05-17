import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Manage navbar floating/scrolled background state
      setScrolled(window.scrollY > 50);

      // 2. High-performance Scrollspy logic to track current visible section
      const sections = ['projects', 'skills', 'about', 'contact'];
      let currentSection = '';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is in the upper 40% of the viewport, mark it active
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on load to initialize state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 transition-all duration-500 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out ${scrolled
            ? 'mt-4 px-6 md:px-8 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.7),_0_0_20px_rgba(34,211,238,0.15)] max-w-xl w-full'
            : 'mt-0 py-6 max-w-6xl w-full border-b border-white/0 bg-transparent'
          }`}
      >
        {/* Branding Logo */}
        <a href="#" className="text-lg font-goodtimes tracking-[0.2em] text-white hover:text-ai-cyan transition-colors group flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ai-cyan group-hover:shadow-[0_0_10px_#22D3EE] transition-all"></span>
          NISXZN
        </a>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? 'gap-6' : 'gap-8'}`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono font-semibold transition-all duration-300 relative group uppercase tracking-widest cursor-pointer ${
                  isActive ? 'text-ai-cyan' : 'text-white/60 hover:text-white'
                }`}
                style={{
                  textShadow: isActive ? '0 0 10px rgba(34, 211, 238, 0.4)' : 'none'
                }}
              >
                {link.name}
                {/* Sliding active glow indicator */}
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-ai-cyan transition-all duration-300 ${
                  isActive ? 'w-full shadow-[0_0_8px_#22D3EE]' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-ai-text hover:text-ai-cyan transition-colors p-1"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="pointer-events-auto fixed inset-0 bg-ai-bg z-50 flex flex-col p-6 border-l border-white/10"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-ai-text hover:text-ai-cyan transition-colors p-2"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8 mt-20 px-4">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className={`text-4xl font-display font-bold uppercase tracking-tight transition-colors ${
                      isActive ? 'text-ai-cyan' : 'text-white hover:text-ai-cyan'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto px-4 pb-12">
              <div className="flex gap-4">
                <a href="https://github.com/Nisxzn" target="_blank" rel="noreferrer" className="text-ai-text-secondary hover:text-ai-text">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-ai-text-secondary hover:text-ai-text">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
