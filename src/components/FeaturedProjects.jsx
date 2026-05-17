import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Shield, Sparkles, Database, FileCode2, Network, Phone } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Immunet",
        description: "An Artificial Immune System (AIS) inspired diagnostic tool for early detection of anomalous network behavior and potential security threats.",
        tags: ["Python", "Network Security", "Anomaly Detection", "Machine Learning"],
        github: "https://github.com/Nisxzn/Immunet",
        demo: "#",
        icon: <Shield className="w-5 h-5" />,
        colorClasses: {
            border: "border-red-500/20 hover:border-red-500/50",
            glow: "shadow-[0_4px_20px_rgba(239,68,68,0.05)] hover:shadow-[0_4px_25px_rgba(239,68,68,0.25)]",
            button: "bg-red-500 text-white hover:bg-red-600 shadow-[0_4px_12px_rgba(239,68,68,0.2)]",
            badge: "bg-red-500/10 text-red-400 border border-red-500/20"
        }
    },
    {
        id: 2,
        title: "Image to HTML",
        description: "AI-driven architecture converting visual UI mockups and designs into structured, semantic web components.",
        tags: ["React", "OpenAI APIs", "Tailwind CSS", "LLMs"],
        github: "https://github.com/Nisxzn/I2H-STUDIO",
        demo: "#",
        icon: <FileCode2 className="w-5 h-5" />,
        colorClasses: {
            border: "border-cyan-500/20 hover:border-cyan-500/50",
            glow: "shadow-[0_4px_20px_rgba(34,211,238,0.05)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.25)]",
            button: "bg-ai-cyan text-black hover:bg-ai-cyan/90 shadow-[0_4px_12px_rgba(34,211,238,0.2)]",
            badge: "bg-ai-cyan/10 text-ai-cyan border border-ai-cyan/20"
        }
    },
    {
        id: 3,
        title: "Hover to Know",
        description: "High-performance browser extension using Manifest V3 to fetch and display definitions, translations, or context on hover.",
        tags: ["SaaS", "Chrome API", "Manifest V3", "UX Design"],
        github: "https://github.com/Nisxzn/hover-2-know",
        demo: "#",
        icon: <Sparkles className="w-5 h-5" />,
        colorClasses: {
            border: "border-amber-500/20 hover:border-amber-500/50",
            glow: "shadow-[0_4px_20px_rgba(245,158,11,0.05)] hover:shadow-[0_4px_25px_rgba(245,158,11,0.25)]",
            button: "bg-amber-500 text-black hover:bg-amber-600 shadow-[0_4px_12px_rgba(245,158,11,0.2)]",
            badge: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
        }
    },
    {
        id: 4,
        title: "LinkedIn Automation",
        description: "Automated agent pipeline for content scheduling, generation, and distribution using generative AI.",
        tags: ["Python", "AI Agents", "Automations", "API Integration"],
        github: "https://github.com/Nisxzn/LinkedIn-Post-Automation",
        demo: "#",
        icon: <Network className="w-5 h-5" />,
        colorClasses: {
            border: "border-blue-500/20 hover:border-blue-500/50",
            glow: "shadow-[0_4px_20px_rgba(59,130,246,0.05)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.25)]",
            button: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_4px_12px_rgba(59,130,246,0.2)]",
            badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20"
        }
    },
    {
        id: 5,
        title: "Enterprise RAG Pipeline",
        description: "Secure, high-integrity vector retrieval system utilizing isolated indexation and self-healing storage.",
        tags: ["Ollama", "SQLite", "LangChain", "Vector Databases"],
        github: "https://github.com/Nisxzn/Fetchr",
        demo: "#",
        icon: <Database className="w-5 h-5" />,
        colorClasses: {
            border: "border-purple-500/20 hover:border-purple-500/50",
            glow: "shadow-[0_4px_20px_rgba(139,92,246,0.05)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.25)]",
            button: "bg-purple-600 text-white hover:bg-purple-700 shadow-[0_4px_12px_rgba(139,92,246,0.2)]",
            badge: "bg-purple-500/10 text-purple-400 border border-purple-500/20"
        }
    },
    {
        id: 6,
        title: "Smart Dialer Application",
        description: "An advanced, high-performance web-based telecommunication interface featuring dynamic speed dials, visual call analytics, and an interactive numeric control pad.",
        tags: ["Kotlin", "Jetpack Compose", "Android Studio", "Framer Motion"],
        github: "https://github.com/Nisxzn/Dialer-Application",
        demo: "#",
        icon: <Phone className="w-5 h-5" />,
        colorClasses: {
            border: "border-emerald-500/20 hover:border-emerald-500/50",
            glow: "shadow-[0_4px_20px_rgba(16,185,129,0.05)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.25)]",
            button: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_4px_12px_rgba(16,185,129,0.2)]",
            badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        }
    }
];

const FeaturedProjects = () => {
    const containerRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Alternate scroll speeds for left and right columns on desktop
    const yLeft = useTransform(scrollYProgress, [0, 1], isDesktop ? [-40, 40] : [0, 0]);
    const yRight = useTransform(scrollYProgress, [0, 1], isDesktop ? [40, -40] : [0, 0]);

    return (
        <section id="projects" ref={containerRef} className="py-24 relative z-10 border-b border-white/5">
            <div className="max-w-6xl mx-auto w-full px-6 md:px-12">
                <div className="section-header mb-16">
                    <h2 className="text-sm font-mono text-ai-cyan tracking-widest uppercase mb-2">Systems</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white">
                        Featured Projects
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {projects.map((project, index) => {
                        const yVal = index % 2 === 0 ? yLeft : yRight;
                        return (
                            <motion.div key={project.id} style={{ y: yVal }} className="h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index, duration: 0.7 }}
                                    className={`glass-panel p-8 rounded-3xl border ${project.colorClasses.border} ${project.colorClasses.glow} transition-all duration-500 flex flex-col justify-between h-full`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center">
                                                {project.icon}
                                            </div>
                                            <div className="flex gap-2">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-ai-text-secondary hover:text-white hover:border-white/30 transition-all duration-300"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>

                                        <h4 className="text-2xl font-display font-bold text-white mb-3 tracking-tight">
                                            {project.title}
                                        </h4>

                                        <p className="text-ai-text-secondary text-sm leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`px-3 py-1 rounded-full text-[10px] font-mono ${project.colorClasses.badge}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 rounded-full py-3 px-6 font-display font-bold uppercase tracking-wider text-xs transition-all duration-300 ${project.colorClasses.button}`}
                                        >
                                            Explore System <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
