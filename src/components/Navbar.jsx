import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, MessageSquare } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Detect section in the middle of the viewport
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['home', 'about', 'projects', 'contact'];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home size={18} />, id: 'home' },
        { name: 'About', href: '#about', icon: <User size={18} />, id: 'about' },
        { name: 'Projects', href: '#projects', icon: <Briefcase size={18} />, id: 'projects' },
        { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} />, id: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <span>Nisxzn</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                        >
                            <span className="nav-icon-wrapper">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary ml-4">Hire</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <button className="mobile-toggle-close" onClick={() => setIsOpen(false)}>
                        <X size={40} />
                    </button>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="nav-icon-wrapper">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn btn-primary mobile-btn mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
