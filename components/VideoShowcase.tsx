"use client";

import { motion } from "motion/react";

export default function VideoShowcase() {
    return (
        <section className="relative flex h-auto w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white transition-colors duration-300">
            <main className="flex-1 flex flex-col items-center justify-start pt-12 pb-20 px-4 md:px-10 lg:px-40">
                {/* Headline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="layout-content-container flex flex-col max-w-[960px] w-full items-center text-center mb-8"
                >
                    <h1 className="text-primary tracking-tight text-4xl md:text-5xl lg:text-[64px] font-medium leading-tight px-4 italic">
                        Experience the Magic
                    </h1>
                </motion.div>
                {/* Main Video Player */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="layout-content-container flex flex-col max-w-[1080px] w-full mb-12"
                >
                    <div className="group relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden gold-glow border border-white/10 bg-black">
                        {/* Poster Image / Video Background */}
                        <div
                            className="absolute inset-0 w-full h-full bg-contain bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                            style={{
                                backgroundImage:
                                    "url('/images/superbond.jpeg')",
                            }}
                        ></div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        {/* Play Button */}
                        {/* <div className="absolute inset-0 flex items-center justify-center">
                            <button className="glass-btn flex items-center justify-center rounded-full size-20 md:size-24 text-primary hover:scale-105 hover:bg-black/40 transition-all duration-300 group cursor-pointer">
                                <span
                                    className="material-icons-outlined fill-current"
                                    style={{ fontSize: "48px" }}
                                >
                                    play_arrow
                                </span>
                            </button>
                        </div> */}
                        {/* Video Overlay Info */}
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                            <div className="bg-primary/90 text-background-dark text-xs font-bold px-3 py-1 rounded-full w-fit mb-2 uppercase tracking-wider">
                                Recent Task
                            </div>
                            <h3 className="text-2xl md:text-3xl font-medium tracking-wide">
                                Cinematic Highlights
                            </h3>
                        </div>
                    </div>
                </motion.div>
                {/* Body Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="layout-content-container flex flex-col max-w-[720px] w-full items-center text-center"
                >
                    <p className="text-gray-900 dark:text-white/80 text-lg md:text-xl font-light leading-relaxed">
                        We don't just record events; we craft cinematic legacies. From the
                        quietest whispers to the loudest cheers, our lens captures the soul
                        of your occasion, transforming fleeting moments into timeless art.
                    </p>
                </motion.div> 
                {/* Thumbnail Carousel */}

            </main>
        </section>
    );
}

