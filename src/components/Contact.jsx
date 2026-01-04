import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const decorY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const decorY2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_6gq4pnq',
            'template_h3w6t6f',
            form.current,
            'xMYHbjEz0Or-YhcwP'
        )
            .then((result) => {
                setSubmitStatus('success');
                form.current.reset();
            }, (error) => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="section" ref={sectionRef}>
            {/* Background Decor */}
            <motion.div className="section-decor decor-1" style={{ y: decorY1 }} />
            <motion.div className="section-decor decor-2" style={{ y: decorY2 }} />
            <div className="container">
                <div className="section-header">
                    <h2 className="section-subtitle">CONNECT</h2>
                    <h3 className="section-title">START A<br />CONVERSATION</h3>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h4 className="info-title">HAVE A VISION?</h4>
                        <p className="info-desc">
                            I'm currently accepting new projects. If you're looking for a digital experience that stands out, let's connect.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon"><Mail size={32} /></div>
                                <div>
                                    <span className="method-label">Direct Channel</span>
                                    <a href="mailto:nithishparameswaran2005@gmail.com" className="method-link">nithishparameswaran2005@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="method-icon"><MapPin size={32} /></div>
                                <div>
                                    <span className="method-label">Location</span>
                                    <span className="method-value">Tamil Nadu, IN</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <label className="form-label">IDENTITY</label>
                            <input
                                type="text"
                                name="user_name"
                                className="form-input"
                                placeholder="YOUR NAME"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">DIGITAL ADDRESS</label>
                            <input
                                type="email"
                                name="user_email"
                                className="form-input"
                                placeholder="YOUR EMAIL"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">MISSION BRIEF</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="form-input textarea"
                                placeholder="HOW CAN I ASSIST?"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary has-icon"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    TRANSMITTING...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    TRANSMIT MESSAGE
                                </>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="status-message success">TRANSMISSION SUCCESSFUL.</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="status-message error">TRANSMISSION FAILED. RETRY.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
