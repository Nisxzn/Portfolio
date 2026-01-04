import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section id="home" className="hero-section" ref={ref}>
            {/* Background Decor */}
            <motion.div className="section-decor decor-1" style={{ y: decorY1 }} />
            <motion.div className="section-decor decor-2" style={{ y: decorY2 }} />
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2 className="subtitle">NITHISH PARAMESWARAN</h2>
                        <h1 className="title">
                            CREATIVE <br />
                            DEVELOPER
                        </h1>
                        <p className="description">
                            I build high-performance, interactive, and visually striking web experiences with a focus on modern aesthetics.
                        </p>
                    </div>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary has-icon">
                            Explore Projects
                            <ArrowRight size={20} className="icon-arrow" />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Get In Touch
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="http://github.com/nisxzn" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/nithishparameswaran" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                        <a href="mailto:nithishparameswaran2005@gmail.com" className="social-icon"><Mail size={24} /></a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="image-container">
                        <img
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
                            alt="Developer Profile"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
