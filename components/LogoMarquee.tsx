"use client";

import { motion } from "motion/react";

export default function LogoMarquee() {
    return (
        <section className="py-12 border-y border-gray-200 dark:border-white/5 bg-background-light dark:bg-background-dark">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                    Trusted by leading companies
                </span>
            </motion.div>
            <div className="overflow-hidden relative w-full">
                <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {[
                        "VOGUE",
                        "Cartier",
                        "TESLA",
                        "Google",
                        "Spotify",
                        "CHANEL",
                        "Hermès",
                        "McKinsey & Co",
                        "VOGUE",
                        "Cartier",
                        "TESLA",
                        "Google",
                    ].map((logo, index) => (
                        <span key={index} className="text-2xl font-display font-bold px-8">
                            {logo}
                        </span>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>
            </div>
        </section>
    );
}

