import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, Terminal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="flex items-center gap-2 text-ai-cyan font-mono text-xs tracking-[0.3em] uppercase mb-6">
                <Terminal size={14} /> Connect
              </h2>
              <h3 className="text-3xl md:text-5xl font-goodtimes uppercase tracking-normal mb-6 leading-[1.2]">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan to-ai-blue" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.25)' }}>Future-Ready</span>
              </h3>
              <p className="text-ai-text-secondary text-lg font-light max-w-md mb-12">
                Open to collaborations, AI projects, experimental interfaces, and innovative digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white/50 group-hover:text-ai-cyan group-hover:border-ai-cyan/50 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Email Protocol</p>
                  <a href="mailto:nithishparameswaran2005@gmail.com" className="text-white hover:text-ai-cyan transition-colors text-sm md:text-base">
                    nithishparameswaran2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white/50 group-hover:text-ai-purple group-hover:border-ai-purple/50 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Location Data</p>
                  <p className="text-white text-sm md:text-base">Tamil Nadu, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 mt-12"
            >
              <a href="https://github.com/Nisxzn" target="_blank" rel="noreferrer" className="w-12 h-12 glass-panel flex items-center justify-center text-white hover:bg-white/10 hover:text-ai-cyan transition-colors rounded-none border border-white/20">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 glass-panel flex items-center justify-center text-white hover:bg-white/10 hover:text-ai-blue transition-colors rounded-none border border-white/20">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Form - Terminal Inspired */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Behind Form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ai-cyan/5 to-ai-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative p-[1px] rounded-2xl bg-gradient-to-tr from-white/10 via-white/5 to-white/15 hover:from-ai-cyan/20 hover:via-white/5 hover:to-ai-purple/20 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(34,211,238,0.12),0_0_50px_rgba(139,92,246,0.06)] relative z-10 group/card">
              <div className="bg-[#050505]/95 backdrop-blur-3xl rounded-2xl p-8 border border-white/5">

                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <span className="ml-2 font-mono text-xs text-white/40 tracking-widest">~/contact.sh</span>
                </div>

                <form className="flex flex-col gap-6 font-mono">
                  <div className="group">
                    <label className="text-xs text-ai-cyan tracking-widest uppercase block mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-ai-cyan transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="text-xs text-ai-purple tracking-widest uppercase block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-ai-purple transition-colors"
                    />
                  </div>

                  <div className="group">
                    <label className="text-xs text-ai-blue tracking-widest uppercase block mb-2">Message</label>
                    <textarea
                      rows="4"
                      placeholder="What to build together?"
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/20 focus:outline-none focus:border-ai-blue transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="mt-8 relative w-full py-4 rounded-xl font-mono text-xs tracking-[0.25em] uppercase font-bold text-ai-blue bg-black border border-ai-blue/30 hover:border-ai-blue/60 transition-all duration-300 overflow-hidden group cursor-pointer"
                    style={{
                      boxShadow: '0 4px 20px rgba(0,0,0,0.9)'
                    }}
                  >
                    {/* Minimal blue glow background on hover */}
                    <div className="absolute inset-0 bg-ai-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Subtle blue scanner line stripe on hover */}
                    <motion.div 
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                      className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-ai-blue/15 to-transparent pointer-events-none"
                    />

                    <span className="relative z-10 flex items-center justify-center gap-1.5 transition-transform duration-300 group-hover:scale-[1.02]">
                      Connect
                    </span>
                  </button>
                </form>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
