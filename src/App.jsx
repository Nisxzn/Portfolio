import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxSection from './components/ParallaxSection';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <ParallaxSection offset={0}>
                    <Hero />
                </ParallaxSection>

                <ParallaxSection offset={80}>
                    <About />
                </ParallaxSection>

                <ParallaxSection offset={120}>
                    <Projects />
                </ParallaxSection>

                <ParallaxSection offset={100}>
                    <Contact />
                </ParallaxSection>
            </main>

            <footer className="footer">
                <a href="#" className="footer-logo">
                    <span>Nisxzn</span>
                </a>
                <div className="container">
                    <p>&copy; 2026 Nisxzn. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
