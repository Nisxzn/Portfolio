import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const skills = [
        {
            icon: <Globe size={32} />,
            title: "Web Architecture",
            desc: "Engineering sophisticated, high-performance web systems using React and modern ecosystem tools."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Interface Design",
            desc: "Crafting pixel-perfect, accessible, and user-centric interfaces with a focus on motion and usability."
        },
        {
            icon: <Database size={32} />,
            title: "System Integration",
            desc: "Bridging complex frontend requirements with robust backend services and data pipelines."
        },
        {
            icon: <Code size={32} />,
            title: "Clean Code",
            desc: "Maintaining rigorous standards for code quality, scalability, and developer experience."
        },
    ];

    return (
        <section id="about" className="section" ref={ref}>
            {/* Background Decor */}
            <motion.div className="section-decor decor-1" style={{ y: decorY1 }} />
            <motion.div className="section-decor decor-2" style={{ y: decorY2 }} />
            <div className="container">
                <div className="section-header">
                    <h2 className="section-subtitle">STRATEGY</h2>
                    <h3 className="section-title">CORE<br />EXPERTISE</h3>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <h4 className="skill-title">{skill.title}</h4>
                            <p className="skill-desc">
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="about-content-wrapper">
                    <div className="about-text">
                        <h3 className="content-title">MISSION ORIENTED</h3>
                        <p>
                            I am a developer who believes in the intersection of aesthetics and performance.
                            My approach is rooted in minimalist principles, where every pixel serves a purpose and every interaction is intentional.
                        </p>
                        <p>
                            Based in India, I collaborate with forward-thinking teams to build digital products that leave a lasting impression.
                        </p>
                    </div>
                    <div className="stats-grid-wrapper">
                        <div className="stats-grid">
                            <div className="stat-card">
                                <span className="stat-number">12+</span>
                                <span className="stat-label">Deployments</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">08+</span>
                                <span className="stat-label">Specializations</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">03+</span>
                                <span className="stat-label">Domains Explored</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">∞</span>
                                <span className="stat-label">Standard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
