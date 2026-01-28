"use client";

import { motion } from "motion/react";

export default function CTA() {
    return (
        <section className="relative py-32 bg-background-dark overflow-hidden flex items-center justify-center">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(30deg, #C5A059 12%, transparent 12.5%, transparent 87%, #C5A059 87.5%, #C5A059), linear-gradient(150deg, #C5A059 12%, transparent 12.5%, transparent 87%, #C5A059 87.5%, #C5A059), linear-gradient(30deg, #C5A059 12%, transparent 12.5%, transparent 87%, #C5A059 87.5%, #C5A059), linear-gradient(150deg, #C5A059 12%, transparent 12.5%, transparent 87%, #C5A059 87.5%, #C5A059), radial-gradient(circle, #C5A059 20%, transparent 20%)",
                    backgroundSize: "80px 140px",
                    backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0",
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
            <div className="relative z-10 text-center max-w-4xl px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-xl"
                >
                    Ready to elevate your <br />
                    <span className="text-primary italic">next event?</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                >
                    <a
                        className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-105"
                        href="#contact"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Let's Connect
                            <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </span>
                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
                        <span className="absolute inset-0 z-10 flex items-center gap-2 justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Let's Connect
                            <span className="material-icons-outlined translate-x-1">
                                arrow_forward
                            </span>
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
