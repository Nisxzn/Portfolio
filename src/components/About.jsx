import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Database, Cpu, Shield } from 'lucide-react';

const nodes = [
  { id: 'ai', label: 'AI', x: '50%', y: '16%', color: 'var(--color-ai-cyan)', delay: 0, floatY: -6, floatX: 2 },
  { id: 'automation', label: 'AUTOMATION', x: '35%', y: '82%', color: 'var(--color-ai-blue)', delay: 1.6, floatY: 5, floatX: -5 },
  { id: 'ml', label: 'ML', x: '80%', y: '28%', color: 'var(--color-ai-blue)', delay: 0.4, floatY: -4, floatX: 4 },
  { id: 'networking', label: 'Networking', x: '16%', y: '56%', color: 'var(--color-ai-purple)', delay: 2.0, floatY: -3, floatX: -6 },
  { id: 'rag', label: 'RAG', x: '84%', y: '58%', color: 'var(--color-ai-purple)', delay: 0.8, floatY: 4, floatX: 6 },
  { id: 'mobile', label: 'Mobile App', x: '20%', y: '26%', color: 'var(--color-ai-cyan)', delay: 2.4, floatY: -6, floatX: -3 },
  { id: 'saas', label: 'SAAS', x: '65%', y: '82%', color: 'var(--color-ai-cyan)', delay: 1.2, floatY: 6, floatX: -2 },
];

const particles = [
  { startX: 15, startY: 20, size: 2, color: 'var(--color-ai-cyan)', moveY: -20, moveX: 15, opacity: 0.4, duration: 8, delay: 0 },
  { startX: 85, startY: 15, size: 3, color: 'var(--color-ai-blue)', moveY: 15, moveX: -15, opacity: 0.3, duration: 10, delay: 1 },
  { startX: 45, startY: 85, size: 1.5, color: 'var(--color-ai-purple)', moveY: -25, moveX: 10, opacity: 0.5, duration: 7, delay: 2 },
  { startX: 75, startY: 75, size: 2, color: 'var(--color-ai-cyan)', moveY: -15, moveX: -20, opacity: 0.4, duration: 9, delay: 0.5 },
  { startX: 25, startY: 70, size: 2.5, color: 'var(--color-ai-blue)', moveY: 20, moveX: 20, opacity: 0.3, duration: 11, delay: 1.5 },
  { startX: 10, startY: 45, size: 1.5, color: 'var(--color-ai-purple)', moveY: -10, moveX: 10, opacity: 0.4, duration: 6, delay: 3 },
  { startX: 90, startY: 50, size: 2, color: 'var(--color-ai-cyan)', moveY: 15, moveX: -10, opacity: 0.5, duration: 8, delay: 0.8 },
  { startX: 30, startY: 30, size: 3, color: 'var(--color-ai-blue)', moveY: 10, moveX: -15, opacity: 0.3, duration: 12, delay: 2.2 },
];

const About = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], isDesktop ? [40, -40] : [0, 0]);
  const yCore = useTransform(scrollYProgress, [0, 1], isDesktop ? [-40, 40] : [0, 0]);
  const yOrb = useTransform(scrollYProgress, [0, 1], isDesktop ? [-25, 25] : [0, 0]);

  // Hook-compliant individual transformations for interactive badges
  const yNode0 = useTransform(scrollYProgress, [0, 1], isDesktop ? [-18, 18] : [0, 0]);
  const yNode1 = useTransform(scrollYProgress, [0, 1], isDesktop ? [22, -22] : [0, 0]);
  const yNode2 = useTransform(scrollYProgress, [0, 1], isDesktop ? [-14, 14] : [0, 0]);
  const yNode3 = useTransform(scrollYProgress, [0, 1], isDesktop ? [18, -18] : [0, 0]);
  const yNode4 = useTransform(scrollYProgress, [0, 1], isDesktop ? [-22, 22] : [0, 0]);
  const yNode5 = useTransform(scrollYProgress, [0, 1], isDesktop ? [10, -10] : [0, 0]);
  const yNode6 = useTransform(scrollYProgress, [0, 1], isDesktop ? [-16, 16] : [0, 0]);

  const nodeTransforms = [yNode0, yNode1, yNode2, yNode3, yNode4, yNode5, yNode6];

  const [hoveredNode, setHoveredNode] = useState(null);

  const activeNode = nodes.find(n => n.id === hoveredNode);
  const activeColor = activeNode ? activeNode.color : null;

  const shadowStyles = activeColor
    ? [
      `0 0 25px ${activeColor}60, 0 0 50px ${activeColor}30`,
      `0 0 40px ${activeColor}80, 0 0 80px ${activeColor}55`,
      `0 0 25px ${activeColor}60, 0 0 50px ${activeColor}30`
    ]
    : [
      '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)',
      '0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
      '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)'
    ];

  return (
    <section id="about" ref={containerRef} className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div style={{ y: yText }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
            <div className="mb-8 border-l-2 border-ai-text pl-6">
              <h2 className="text-ai-text-secondary font-mono text-xs tracking-[0.3em] uppercase mb-2">
                AI/ML Engineer
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
                About
              </h3>
            </div>

            <div className="prose prose-invert prose-p:text-ai-text-secondary prose-p:font-light prose-p:leading-relaxed prose-p:text-lg">
              <p>
                I'm an AI engineer focused on building intelligent systems — from RAG pipelines and AI agents to deep learning models and automation platforms. I work across the full stack of machine learning, data science, and applied AI.
              </p>
              <p className="mt-6">
                My projects span AI-driven content automation, retrieval-augmented generation, computer vision pipelines, and browser-based developer tools — always pushing toward systems that are both technically rigorous and practically impactful.
              </p>
            </div>

            <div className="mt-12 flex gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">15+</span>
                <span className="text-xs font-mono uppercase tracking-widest text-ai-text-secondary mt-1">Deployments</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">4+</span>
                <span className="text-xs font-mono uppercase tracking-widest text-ai-text-secondary mt-1">Areas Explored</span>
              </div>
            </div>
            </motion.div>
          </motion.div>

          {/* Futuristic AI Neural Core Visual */}
          <motion.div style={{ y: yCore }} className="relative h-[500px] w-full rounded-2xl border border-white/5 bg-[#050505] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center">

            {/* 1. Dark matte background with elegant grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

            {/* Radial mask to fade grid at the edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>

            {/* Radial gradient glow in the center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-ai-cyan/10 via-ai-blue/5 to-ai-purple/10 blur-[80px] pointer-events-none"></div>

            {/* Subtle dashboard-like corner markers */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none select-none flex items-center gap-1.5">
              <Terminal size={10} className="text-ai-cyan" />
              <span>SYS.CORE // ACTIVE</span>
            </div>
            <div className="absolute top-4 right-4 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none select-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>SYNCHRONIZED</span>
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none select-none flex items-center gap-1.5">
              <Cpu size={10} className="text-ai-purple" />
              <span>PROCESS // OK</span>
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none select-none flex items-center gap-1.5">
              <Shield size={10} className="text-ai-blue" />
              <span>SECURE // AES-256</span>
            </div>

            {/* 2. Interactive SVG Connection Lines & Pulsing Data Particles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {nodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                const isAnyHovered = hoveredNode !== null;

                let baseLineOpacity = isAnyHovered ? (isHovered ? 0.4 : 0.01) : 0.03;
                let glowLineOpacity = isAnyHovered ? (isHovered ? 0.9 : 0.02) : 0.15;
                let glowLineWidth = isHovered ? 3 : 1.5;
                let particleSize = isHovered ? 3.5 : 2;
                let particleDuration = isHovered ? 1.5 : 3;
                let particleOpacity = isAnyHovered ? (isHovered ? [0, 1, 1, 0] : [0, 0.2, 0.2, 0]) : [0, 1, 1, 0];

                return (
                  <g key={`lines-${node.id}`}>
                    <line
                      x1="50%"
                      y1="50%"
                      x2={node.x}
                      y2={node.y}
                      stroke={isHovered ? node.color : "rgba(255,255,255,1)"}
                      strokeWidth="1"
                      style={{
                        opacity: baseLineOpacity,
                        transition: 'all 0.3s ease',
                        filter: isHovered ? `drop-shadow(0 0 4px ${node.color})` : 'none'
                      }}
                    />
                    <line
                      x1="50%"
                      y1="50%"
                      x2={node.x}
                      y2={node.y}
                      stroke={node.color}
                      strokeWidth={glowLineWidth}
                      strokeDasharray={isHovered ? "4 4" : "4 8"}
                      style={{
                        opacity: glowLineOpacity,
                        transition: 'all 0.3s ease',
                        filter: isHovered ? `drop-shadow(0 0 10px ${node.color})` : 'none'
                      }}
                    />
                    <motion.circle
                      r={particleSize}
                      fill={node.color}
                      initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                      animate={{
                        cx: ["50%", node.x],
                        cy: ["50%", node.y],
                        opacity: particleOpacity
                      }}
                      transition={{
                        duration: particleDuration,
                        repeat: Infinity,
                        delay: isHovered ? 0 : node.delay,
                        ease: "easeInOut"
                      }}
                      style={{
                        filter: `drop-shadow(0 0 ${isHovered ? '6px' : '3px'} ${node.color})`,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* 3. Static Node Anchor Dots at target coordinates */}
            {nodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isAnyHovered = hoveredNode !== null;
              return (
                <div
                  key={`anchor-${node.id}`}
                  className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
                  style={{
                    left: node.x,
                    top: node.y,
                    width: isHovered ? '8px' : '6px',
                    height: isHovered ? '8px' : '6px',
                    backgroundColor: node.color,
                    boxShadow: isHovered ? `0 0 15px ${node.color}` : `0 0 8px ${node.color}`,
                    opacity: isAnyHovered ? (isHovered ? 1 : 0.15) : 1,
                    transition: 'all 0.3s ease'
                  }}
                />
              );
            })}

            {/* 4. Glowing Central Neural Orb */}
            <motion.div style={{ y: yOrb }} className="relative w-72 h-72 flex items-center justify-center z-10 pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-60 h-60 rounded-full border border-dashed border-ai-purple/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-ai-blue/15"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 rounded-full border border-dashed border-ai-cyan/20"
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 0.95, 1.02, 1],
                  boxShadow: shadowStyles
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-ai-purple via-ai-blue to-ai-cyan relative flex items-center justify-center border border-white/20"
              >
                <div className="absolute inset-1 rounded-full bg-[#050505]/80 backdrop-blur-sm flex items-center justify-center border border-white/5">
                  <motion.div
                    animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-4 h-4 rounded-full bg-white shadow-[0_0_12px_#fff]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* 5. Floating Glassmorphism Badges */}
            {nodes.map((node, idx) => {
              const isHovered = hoveredNode === node.id;
              const isAnyHovered = hoveredNode !== null;
              const nodeY = nodeTransforms[idx];
              return (
                <motion.div
                  key={`badge-${node.id}`}
                  className="absolute z-20 cursor-default select-none pointer-events-auto"
                  style={{ left: node.x, top: node.y, y: nodeY }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{ y: [0, node.floatY, 0, -node.floatY, 0], x: [0, node.floatX, 0, -node.floatX, 0] }}
                    transition={{ duration: 5 + node.delay * 2, repeat: Infinity, ease: "easeInOut" }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="glass-panel flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wider text-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.5)] -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md cursor-pointer"
                    style={{
                      borderColor: isHovered ? node.color + '80' : node.color + '30',
                      boxShadow: isHovered ? `0 0 25px ${node.color}30` : `0 0 15px ${node.color}10`,
                      opacity: isAnyHovered ? (isHovered ? 1 : 0.35) : 1,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: node.color }}></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: node.color }}></span>
                    </span>
                    <span>{node.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Floating Background Particles */}
            {particles.map((p, i) => (
              <motion.div
                key={`p-${i}`}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: `${p.startX}%`,
                  top: `${p.startY}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  opacity: p.opacity
                }}
                animate={{ y: [0, p.moveY, 0], x: [0, p.moveX, 0], opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3] }}
                transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
