import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Layers, Brain, Database, Cloud, Rocket, Orbit } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code className="w-4 h-4 text-ai-cyan" />,
        skills: ["Python", "Java", "Kotlin", "PHP", "C", "JavaScript", "HTML5", "CSS3"]
    },
    {
        title: "Frameworks & Libraries",
        icon: <Layers className="w-4 h-4 text-ai-blue" />,
        skills: ["React", "Next.js", "Tailwind CSS"]
    },
    {
        title: "AI / Data Technologies",
        icon: <Brain className="w-4 h-4 text-pink-400" />,
        skills: ["Machine Learning", "RAG Systems", "Agentic AI"]
    },
    {
        title: "Databases",
        icon: <Database className="w-4 h-4 text-purple-400" />,
        skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
        title: "Cloud & Tools",
        icon: <Cloud className="w-4 h-4 text-orange-400" />,
        skills: ["AWS", "Git", "VS Code", "Docker"]
    },
    {
        title: "Development Areas",
        icon: <Rocket className="w-4 h-4 text-emerald-400" />,
        skills: ["Full Stack Development", "Mobile App Development", "AI Application Development"]
    }
];

const TechStack = () => {
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

    const yLeft = useTransform(scrollYProgress, [0, 1], isDesktop ? [45, -45] : [0, 0]);
    const yRight = useTransform(scrollYProgress, [0, 1], isDesktop ? [-45, 45] : [0, 0]);
    const yGlow = useTransform(scrollYProgress, [0, 1], isDesktop ? [-90, 90] : [0, 0]);

    return (
        <section id="skills" ref={containerRef} className="py-24 relative z-10 overflow-hidden border-b border-white/5">
            {/* Background Ambience behind the entire section */}
            <motion.div style={{ y: yGlow }} className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-ai-cyan/5 blur-[150px] pointer-events-none"></motion.div>

            <div className="max-w-6xl mx-auto w-full px-6 md:px-12">

                {/* Section Header */}
                <div className="section-header mb-16">
                    <h2 className="text-sm font-mono text-ai-cyan tracking-widest uppercase mb-2">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white">
                        Technical Ecosystem
                    </h3>
                </div>

                {/* Separated Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: The Premium Skills Card (7 Cols) */}
                    <motion.div style={{ y: yLeft }} className="lg:col-span-7">
                        <div className="relative glass-panel rounded-[32px] border border-white/10 bg-white/[0.01] backdrop-blur-2xl p-8 md:p-10 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)] group">

                            {/* Subtle top border streak */}
                            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-ai-cyan/35 to-transparent"></div>

                            {/* Subtle ambient internal glow */}
                            <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[60px] pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-700"></div>

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h4 className="text-2xl font-display font-bold uppercase tracking-tight text-white mb-2">
                                        Ecosystem Stack
                                    </h4>
                                </div>

                                {/* 2-Column Grid Layout inside the Skills Card */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {skillCategories.map((category, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <div className="flex items-center gap-2 text-xs font-mono text-white/70 uppercase tracking-widest border-b border-white/5 pb-2">
                                                <span className="text-sm">{category.emoji}</span>
                                                {category.icon}
                                                <span className="font-bold text-[11px]">{category.title}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, sIdx) => (
                                                    <motion.span
                                                        key={sIdx}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-white/80 hover:text-white hover:border-ai-cyan/40 hover:bg-ai-cyan/5 transition-all duration-300 cursor-default"
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Column: Independent, Minimalist Core Solar System (5 Cols) */}
                    <motion.div style={{ y: yRight }} className="lg:col-span-5 flex items-center justify-center relative min-h-[460px] lg:min-h-[520px]">

                        {/* Beautiful Holographic Under-Glow behind the entire Solar System */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-ai-cyan/10 via-ai-blue/5 to-purple-500/5 blur-[120px] rounded-full pointer-events-none scale-90"></div>

                        {/* Spinning Dashed Orbits - Grand size to capture spatial look */}
                        <div className="relative w-[440px] h-[440px] flex items-center justify-center select-none">

                            {/* Orbit 6 (Outer - Development Areas: Rocket Icon)
                                Radius: 215px (Diameter: 430px) */}
                            <motion.div
                                animate={{ rotate: [45, 405] }}
                                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[430px] h-[430px] rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute top-0 -translate-y-1/2 w-7 h-7 rounded-full bg-black border border-emerald-500/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.3)] text-emerald-400 hover:border-emerald-400 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Rocket className="w-3.5 h-3.5" />
                                </motion.div>
                            </motion.div>

                            {/* Orbit 5 (Cloud & Tools: Cloud Icon)
                                Radius: 183px (Diameter: 366px) */}
                            <motion.div
                                animate={{ rotate: [130, -230] }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[366px] h-[366px] rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute top-0 -translate-y-1/2 w-7 h-7 rounded-full bg-black border border-orange-500/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(249,115,22,0.3)] text-orange-400 hover:border-orange-400 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Cloud className="w-3.5 h-3.5" />
                                </motion.div>
                            </motion.div>

                            {/* Orbit 4 (Databases: Database Icon)
                                Radius: 151px (Diameter: 302px) */}
                            <motion.div
                                animate={{ rotate: [210, 570] }}
                                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[302px] h-[302px] rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute top-0 -translate-y-1/2 w-7 h-7 rounded-full bg-black border border-purple-500/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)] text-purple-400 hover:border-purple-400 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Database className="w-3.5 h-3.5" />
                                </motion.div>
                            </motion.div>

                            {/* Orbit 3 (AI / Data Technologies: Brain Icon)
                                Radius: 119px (Diameter: 238px) */}
                            <motion.div
                                animate={{ rotate: [280, -80] }}
                                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[238px] h-[238px] rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute top-0 -translate-y-1/2 w-7 h-7 rounded-full bg-black border border-pink-500/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(244,63,94,0.3)] text-pink-400 hover:border-pink-400 hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Brain className="w-3.5 h-3.5" />
                                </motion.div>
                            </motion.div>

                            {/* Orbit 2 (Frameworks & Libraries: Layers Icon)
                                Radius: 87px (Diameter: 174px) */}
                            <motion.div
                                animate={{ rotate: [320, 680] }}
                                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[174px] h-[174px] rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute top-0 -translate-y-1/2 w-7 h-7 rounded-full bg-black border border-ai-blue/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(77,163,255,0.3)] text-ai-blue hover:border-ai-blue hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Layers className="w-3.5 h-3.5" />
                                </motion.div>
                            </motion.div>

                            {/* Orbit 1 (Inner - Programming Languages: Code Icon)
                                Radius: 55px (Diameter: 110px) */}
                            <motion.div
                                animate={{ rotate: [15, -345] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[110px] h-[110px] rounded-full border border-white/5 flex items-center justify-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    className="absolute top-0 -translate-y-1/2 w-7 h-7 rounded-full bg-black border border-ai-cyan/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.3)] text-ai-cyan hover:border-ai-cyan hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Code className="w-3.5 h-3.5" />
                                </motion.div>
                            </motion.div>

                            {/* Minimal & Premium Solar System Core - Grand size for high impact */}
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-18 h-18 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.15)] group hover:border-ai-cyan/50 hover:shadow-[0_0_45px_rgba(34,211,238,0.3)] transition-all duration-500 cursor-default select-none animate-none"
                            >
                                <div className="absolute inset-0 rounded-full bg-ai-cyan/5 blur-md animate-pulse"></div>
                                <span className="relative font-mono text-[15px] tracking-[0.1em] text-ai-cyan uppercase font-bold mt-0.5">CORE</span>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default TechStack;
