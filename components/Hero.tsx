"use client";

import { motion } from "motion/react";

export default function Hero() {
    return (
        <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Luxury event atmosphere"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI0EBo19fdXk435jOzfSAMpftMhn9hS0sfgOi3EMEO6uzqCUhBuIehmatQ1W-RrX35il6UyI9UfHhqJufmV5iBIhIeMi5agixzU-rt6r4i_Mp5m0HtB2lOFySEILZfn24Tt7-Jp5ne9EZbgCAWKMHIwdRq5_FSztQZSGNSFXnIcqOIRCse_y6dGqg07Ak1vE1ZYNAN3j6xHuJeQANrdl5FDc6uBtM5gv8O3onVm8wrMhnP8e9uoyMt4amg6IIFDYji6_pU93ON2CB5"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark/95"></div>
            </div>
            <div className="relative z-10 text-center max-w-5xl px-4 mt-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-primary font-medium tracking-widest text-xs uppercase mb-6"
                >
                    World Class Experiences
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-lg"
                >
                    Crafted Events <br />
                    <span className="italic font-light text-white/90">
                        Designed to
                    </span>{" "}
                    Stand Out
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a
                        className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
                        href="#quiz"
                    >
                        Contact Us
                        <span className="material-icons-outlined text-sm">
                            arrow_forward
                        </span>
                    </a>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50"
            >
                <span className="material-icons-outlined">keyboard_arrow_down</span>
            </motion.div>
        </header>
    );
}
