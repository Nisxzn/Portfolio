import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const projects = [
        {
            title: "Dialer Application",
            desc: "Modern Android communication interface focusing on minimal design and high functional efficiency.",
            tags: ["Kotlin", "Compose", "Android"],
            image: "https://i.pinimg.com/1200x/f9/c1/df/f9c1df77537784738c44c2a3c5ba40a8.jpg",
            github: "https://github.com/Nisxzn/Dialer-Application",
            demo: "https://github.com/Nisxzn/Dialer-Application"
        },
        {
            title: "I2H Studio",
            desc: "AI-driven architecture converting visual data into structured semantic web components.",
            tags: ["Python", "OpenAI", "React"],
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
            github: "https://github.com/Nisxzn/I2H-STUDIO.git",
            demo: "https://github.com/Nisxzn/I2H-STUDIO.git"
        },
        {
            title: "IPL Auction Simulator",
            desc: "Real-time distributed system for secure and transparent competitive bidding environments.",
            tags: ["React", "Web App", "Socket"],
            image: "https://i.pinimg.com/1200x/f9/91/89/f991890cf2baadef309748947a511a6b.jpg",
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="section" ref={ref}>
            {/* Background Decor */}
            <motion.div className="section-decor decor-1" style={{ y: decorY1 }} />
            <motion.div className="section-decor decor-2" style={{ y: decorY2 }} />
            <div className="container">
                <div className="section-header">
                    <h2 className="section-subtitle">WORK</h2>
                    <h3 className="section-title">SELECTED<br />CASES</h3>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><Github size={24} /></a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live Demo"><ExternalLink size={24} /></a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h4 className="project-title">{project.title}</h4>
                                <p className="project-desc">
                                    {project.desc}
                                </p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
