"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section
            className="py-24 bg-background-dark relative border-b border-white/5 overflow-hidden"
            ref={containerRef}
        >
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                    >
                        Our Working <span className="italic text-primary">Process</span>
                    </motion.h2>
                    <div className="w-24 h-[1px] bg-primary mx-auto"></div>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Vertical Line */}
                    <div className="absolute top-0 bottom-0 left-[2rem] w-[2px] bg-white/10">
                        <motion.div
                            style={{
                                scaleY,
                                transformOrigin: "top",
                            }}
                            className="w-full h-full bg-primary shadow-[0_0_10px_rgba(197,160,89,0.5)]"
                        ></motion.div>
                    </div>
                    <div className="space-y-16">
                        {[
                            {
                                step: "01",
                                icon: "travel_explore",
                                title: "Discovery & Strategy",
                                desc: "We immerse ourselves in your brand to define clear objectives and a strategic roadmap, ensuring every subsequent step is aligned with your core vision.",
                            },
                            {
                                step: "02",
                                icon: "palette",
                                title: "Creative Concept",
                                desc: "Developing a bespoke narrative and visual identity that resonates emotionally, crafting the soul of your event before a single logistical piece moves.",
                            },
                            {
                                step: "03",
                                icon: "engineering",
                                title: "Execution & Production",
                                desc: "Rigorous planning and logistics management to bring the vision to life, handling complex vendor coordination and technical requirements with precision.",
                            },
                            {
                                step: "04",
                                icon: "celebration",
                                title: "Event Management",
                                desc: "Seamless on-site coordination ensuring every detail is perfect, allowing you to be a guest at your own event while we manage the flow.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                onViewportEnter={() => setActiveStep(index)}
                                className={`relative pl-20 group transition-opacity duration-500`}
                            >
                                <div className="absolute left-0 top-0 w-16 flex justify-center">
                                    <div
                                        className={`w-4 h-4 rounded-full z-10 relative mt-2 transition-all duration-500 ${activeStep >= index
                                                ? "bg-primary shadow-[0_0_15px_rgba(197,160,89,0.8)] scale-110"
                                                : "bg-background-dark border-2 border-primary/40"
                                            }`}
                                    >
                                        {activeStep === index && (
                                            <div className="absolute inset-0 bg-primary animate-ping opacity-75 rounded-full"></div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <span
                                            className={`font-display text-5xl md:text-6xl leading-none block transition-colors duration-500 ${activeStep === index
                                                    ? "text-primary drop-shadow-[0_0_10px_rgba(197,160,89,0.4)] opacity-100"
                                                    : "text-white/20"
                                                }`}
                                        >
                                            {item.step}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3
                                            className={`font-display text-2xl md:text-3xl mb-3 transition-colors duration-500 flex items-center gap-3 ${activeStep === index ? "text-white" : "text-white/50"
                                                }`}
                                        >
                                            <span
                                                className={`material-icons-outlined text-2xl transition-colors duration-500 ${activeStep === index ? "text-primary" : "text-gray-600"
                                                    }`}
                                            >
                                                {item.icon}
                                            </span>
                                            {item.title}
                                        </h3>
                                        <p
                                            className={`text-base leading-relaxed font-light max-w-2xl transition-colors duration-500 ${activeStep === index ? "text-gray-300" : "text-gray-600"
                                                }`}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
