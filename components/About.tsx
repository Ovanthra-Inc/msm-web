"use client";

import { motion } from "motion/react";

export default function About() {
    return (
        <div id="about">
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3"
                    >
                        <div className="w-24 h-[1px] bg-primary mb-8"></div>
                        <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2">
                            World of Experiences
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-2/3 text-left md:text-right"
                    >
                        <p className="font-display text-2xl md:text-4xl leading-snug text-gray-800 dark:text-gray-200">
                            Discover impactful events and brand activations crafted to{" "}
                            <span className="italic text-primary">inspire</span>, engage, and
                            elevate brands beyond the ordinary.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="py-24 bg-[#121212] relative overflow-hidden border-y border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 border border-primary/20 rounded-none translate-x-4 translate-y-4 hidden lg:block"></div>
                            <div className="aspect-[3/4] w-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group bg-neutral-800">
                                <img
                                    alt="Founder Portrait"
                                    className="w-full h-full object-cover"
                                    src="/assets/team/tm.jpg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                                About Us
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                                Meet the <br />
                                <span className="italic text-primary">Visionary</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
                                <p>
                                    "MSM Events & Advertisements creates impactful events and brand activations with reliable execution across India."
                                </p>
                                <p className="text-sm md:text-base">
                                    We partner with leading brands to execute corporate events, exhibitions, product launches, and on-ground activations combining creativity, operational excellence, and reliable manpower to elevate brand presence and engage real audiences.
                                </p>
                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-primary"></div>
                                <span className="font-display text-2xl text-white italic">
                                    Madhu Sudan Mondal
                                </span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest ml-2">
                                    Founder &amp; Creative Director
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

