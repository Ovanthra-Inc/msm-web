"use client";

import { motion } from "motion/react";

export default function EventCatalogue() {
    return (
        <section id="catalogue" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
                >
                    Explore our
                </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl font-bold text-gray-400 dark:text-gray-600"
                >
                    Event Catalogue
                </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Events Management: Seamless Execution",
                        tags: "Planning • Execution • Coordination",
                        image: "/images/1.png",
                        type: "Event",
                    },
                    {
                        title: "Retail Activation: In-Store Experiences",
                        tags: "Engagement • Retail • Brand Presence",
                        image: "/images/2.png",
                        type: "Retail",
                    },
                    {
                        title: "Product Launch: Strategic Unveilings",
                        tags: "Strategy • Buzz • Audience",
                        image: "/images/3.png",
                        type: "Launch",
                    },
                    {
                        title: "Award Function: Honoring Excellence",
                        tags: "Awards • Ceremonies • Achievements",
                        image: "/images/4.png",
                        type: "Ceremony",
                    },
                    {
                        title: "Roadshow: Mobile Experiences",
                        tags: "Mobile • Direct Reach • Engagement",
                        image: "/images/5.png",
                        type: "Roadshow",
                    },
                    {
                        title: "Audit Survey Program: Data-Driven Insights",
                        tags: "Data • Audits • Compliance",
                        image: "/images/6.png",
                        type: "Survey",
                    },
                    {
                        title: "Corporate Events: Professional Gatherings",
                        tags: "Conferences • Seminars • Corporate",
                        image: "/images/7.png",
                        type: "Corporate",
                    },
                    {
                        title: "Web Development: Digital Solutions",
                        tags: "Websites • Digital • Custom Software",
                        image: "/images/3.png",
                        type: "Digital",
                    },
                ].map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative h-[400px] overflow-hidden rounded-2xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                            <img
                                alt={event.type}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={event.image}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-full">
                                <span className="text-xs font-bold uppercase tracking-wide">
                                    {event.type}
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">{event.tags}</p>
                            </div>
                            {/* <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                <span className="material-icons-outlined text-sm">
                                    arrow_outward
                                </span>
                            </button> */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

