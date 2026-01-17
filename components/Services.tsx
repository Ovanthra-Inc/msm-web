"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Services() {
    const [openId, setOpenId] = useState<string | null>("01");

    const toggleOpen = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const services = [
        {
            id: "01",
            title: "Events Management",
            desc: "Comprehensive planning and execution, from concept to cleanup, ensuring every detail aligns with your vision.",
        },
        {
            id: "02",
            title: "Retail Activation",
            desc: "Creating immersive in-store experiences that drive engagement and amplify brand presence.",
        },
        {
            id: "03",
            title: "Product Launch",
            desc: "Strategic unveilings designed to generate buzz and leave a lasting impression on your audience.",
        },
        {
            id: "04",
            title: "Award Function",
            desc: "Recognizing excellence with grand ceremonies that honor achievements in style.",
        },
        {
            id: "05",
            title: "Roadshow",
            desc: "Taking your brand on the road with engaging mobile experiences that reach audiences directly.",
        },
        {
            id: "06",
            title: "Audit Survey Program",
            desc: "Data-driven insights and on-ground audits to optimize performance and compliance.",
        },
        {
            id: "07",
            title: "Corporate Events",
            desc: "Professional gatherings, conferences, and seminars tailored to your business objectives.",
        },
        {
            id: "08",
            title: "Web Development",
            desc: "Custom digital solutions and websites that extend your brand experience into the virtual world.",
        },
    ];

    return (
        <div id="services">
            <section className="py-24 bg-background-dark relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="hidden lg:block relative min-h-[600px] w-full order-1 lg:order-none sticky top-24"
                        >
                            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[600px]">
                                <img
                                    alt="Atmospheric Event Concert"
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI0EBo19fdXk435jOzfSAMpftMhn9hS0sfgOi3EMEO6uzqCUhBuIehmatQ1W-RrX35il6UyI9UfHhqJufmV5iBIhIeMi5agixzU-rt6r4i_Mp5m0HtB2lOFySEILZfn24Tt7-Jp5ne9EZbgCAWKMHIwdRq5_FSztQZSGNSFXnIcqOIRCse_y6dGqg07Ak1vE1ZYNAN3j6xHuJeQANrdl5FDc6uBtM5gv8O3onVm8wrMhnP8e9uoyMt4amg6IIFDYji6_pU93ON2CB5"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                        <div className="flex flex-col justify-center h-full order-2 lg:order-none">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-12"
                            >
                                <p className="text-primary text-sm uppercase tracking-widest mb-4">
                                    Our Expertise
                                </p>
                                <h2 className="font-display text-5xl md:text-6xl text-white font-bold leading-tight">
                                    Curated <span className="text-primary italic">Service</span>{" "}
                                    Offerings
                                </h2>
                            </motion.div>
                            <div className="space-y-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="border-b border-white/10"

                                    >
                                        <button
                                            onClick={() => toggleOpen(service.id)}
                                            className="w-full text-left py-6 group flex items-center justify-between focus:outline-none cursor-pointer"
                                        >
                                            <div className="flex items-baseline gap-6">
                                                <span
                                                    className={`font-mono text-sm transition-colors ${openId === service.id
                                                        ? "text-primary"
                                                        : "text-gray-600 group-hover:text-primary/70"
                                                        }`}
                                                >
                                                    {service.id}
                                                </span>
                                                <h3
                                                    className={`text-2xl md:text-3xl font-display tracking-wide transition-colors ${openId === service.id
                                                        ? "text-primary"
                                                        : "text-white group-hover:text-white/90"
                                                        }`}
                                                >
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <div
                                                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${openId === service.id
                                                    ? "border-primary bg-primary rotate-180"
                                                    : "border-white/10 group-hover:border-primary/50"
                                                    }`}
                                            >
                                                <span
                                                    className={`material-icons-outlined text-sm transition-colors ${openId === service.id
                                                        ? "text-white"
                                                        : "text-gray-500 group-hover:text-white"
                                                        }`}
                                                >
                                                    expand_more
                                                </span>
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {openId === service.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-400 pb-6 text-sm font-light pl-12 max-w-md">
                                                        {service.desc}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

