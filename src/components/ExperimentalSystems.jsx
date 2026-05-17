import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Database, FileCode2, Network } from 'lucide-react';

const experiments = [
  {
    title: "AIS Threat Detection",
    category: "Network Security",
    icon: <Shield className="w-6 h-6" />,
    color: "from-red-500/20 to-transparent",
    delay: 0.1,
    colSpan: "md:col-span-2",
  },
  {
    title: "Manifest V3 Arch",
    category: "Browser Extension",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-amber-500/20 to-transparent",
    delay: 0.2,
    colSpan: "md:col-span-1",
  },
  {
    title: "Vector Embeddings",
    category: "RAG Systems",
    icon: <Database className="w-6 h-6" />,
    color: "from-orange-500/20 to-transparent",
    delay: 0.3,
    colSpan: "md:col-span-1",
  },
  {
    title: "UI Translators",
    category: "Frontend Automation",
    icon: <FileCode2 className="w-6 h-6" />,
    color: "from-ai-cyan/20 to-transparent",
    delay: 0.4,
    colSpan: "md:col-span-2",
  },
  {
    title: "Workflow Pipelines",
    category: "AI Automation",
    icon: <Network className="w-6 h-6" />,
    color: "from-ai-blue/20 to-transparent",
    delay: 0.5,
    colSpan: "md:col-span-3",
  }
];

const ExperimentalSystems = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-ai-purple pl-6"
          >
            <h2 className="text-ai-text-secondary font-mono text-xs tracking-[0.3em] uppercase mb-2">
              Labs & Prototypes
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight">
              Experimental Builds
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-ai-text-secondary max-w-md text-sm"
          >
            A playground for bleeding-edge concepts, interactive UI patterns, and rapid AI prototypes that push digital boundaries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: exp.delay, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative h-64 glass-panel rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 ${exp.colSpan}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ai-text-secondary group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                  {exp.icon}
                </div>
                
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-ai-text-secondary mb-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    {exp.category}
                  </p>
                  <h4 className="text-xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50">
                    {exp.title}
                  </h4>
                </div>
              </div>
              
              {/* Abstract hover overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperimentalSystems;
