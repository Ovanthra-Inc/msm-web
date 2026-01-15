"use client";

import { motion } from "motion/react";

export default function PresenceMap() {
    return (
        <section className="relative flex w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark py-10 px-4 md:px-10 lg:px-20 font-display transition-colors duration-300">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Content & List */}
                    <div className="lg:col-span-5 flex flex-col gap-8 z-10">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                                Across the <span className="text-primary">Nation</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                                Delivering excellence in every major metropolis. From corporate
                                galas to cultural festivals, our footprint spans the subcontinent.
                            </p>
                        </motion.div>
                        {/* Statistic Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-4 p-4 bg-white/5 dark:bg-[#2d281a] border border-gray-200 dark:border-[#685a31] rounded-xl w-fit backdrop-blur-sm"
                        >
                            <div className="p-3 bg-primary/10 rounded-full">
                                <span className="material-icons-outlined text-primary text-2xl">
                                    public
                                </span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-[#cbbc90] uppercase tracking-wider font-medium">
                                    Nationwide Impact
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    500+{" "}
                                    <span className="text-base font-normal opacity-80">
                                        Events Managed
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                        {/* City List (Interactive) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col gap-3 mt-4"
                        >
                            {[
                                {
                                    city: "Mumbai",
                                    type: "Headquarters",
                                    icon: "apartment",
                                    active: true,
                                },
                                {
                                    city: "New Delhi",
                                    type: "Regional Office",
                                    icon: "account_balance",
                                    active: false,
                                },
                                {
                                    city: "Bengaluru",
                                    type: "Tech Hub Events",
                                    icon: "memory",
                                    active: false,
                                },
                                {
                                    city: "Hyderabad",
                                    type: "Corporate Galas",
                                    icon: "diamond",
                                    active: false,
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`group cursor-pointer relative overflow-hidden rounded-xl border p-4 transition-all duration-300 ${item.active
                                            ? "border-primary bg-primary/5 hover:bg-primary/10"
                                            : "border-gray-200 dark:border-[#685a31] bg-white dark:bg-[#2a2515] hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg dark:hover:shadow-primary/5"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${item.active
                                                        ? "bg-primary/20 text-primary"
                                                        : "bg-gray-100 dark:bg-[#383220] text-gray-500 dark:text-gray-400 group-hover:bg-primary/20 group-hover:text-primary"
                                                    }`}
                                            >
                                                <span className="material-icons-outlined">
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-lg font-bold transition-colors ${item.active
                                                            ? "text-gray-900 dark:text-white"
                                                            : "text-gray-900 dark:text-gray-200 group-hover:text-primary"
                                                        }`}
                                                >
                                                    {item.city}
                                                </h3>
                                                <p
                                                    className={`text-sm font-medium ${item.active
                                                            ? "text-primary"
                                                            : "text-gray-500 dark:text-[#cbbc90]"
                                                        }`}
                                                >
                                                    {item.type}
                                                </p>
                                            </div>
                                        </div>
                                        <span
                                            className={`material-icons-outlined text-primary transition-all duration-300 ${item.active
                                                    ? "opacity-100 group-hover:translate-x-1"
                                                    : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                                }`}
                                        >
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    {/* Right Column: Map Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 relative flex justify-center items-center min-h-[500px]"
                    >
                        {/* Background Glow behind map */}
                        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50 blur-3xl rounded-full"></div>
                        {/* Map Container */}
                        <div className="relative w-full h-full max-w-[600px] aspect-[4/5] md:aspect-square">
                            {/* Map Image */}
                            <img
                                alt="Minimalist dark stylized map of India showing major cities"
                                className="w-full h-full object-contain opacity-20 dark:opacity-30 invert dark:invert-0 drop-shadow-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGjr5PoF8Kjei3n_gjfl8tc9cip0sC0vy_4EjsEmLqkWeMM3WVsLAKW2p1H2Vx5yJgL7iGRJdCotkUia7OZ_8Nuzaj7HqD5tbe1BU7lzcod8pZ0XgEjTjGFOrAsa6nc9dy0F32skYnnjfHe8whEnXwEeuxNpHJ7Km9Y6wZpyecNBJC-DcrzGEHGPm7wxMsueg-2nXr6EsU25Bdqdngx9la-fHcsqeSYmG73ebTy0Dws4zeDgnXbtEa3RLmx-IPAqpNpvfYqIvLrSFz"
                            />
                            {/* Pins Layer */}
                            {/* Delhi Pin (Top North) */}
                            <div className="absolute top-[28%] left-[32%] group">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="absolute w-3 h-3 bg-primary rounded-full z-10 shadow-[0_0_10px_var(--color-primary)]"></div>
                                    <div className="pin-ring w-full h-full absolute"></div>
                                </div>
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
                                    New Delhi
                                </div>
                            </div>
                            {/* Kolkata Pin (East) */}
                            <div className="absolute top-[45%] right-[22%] group">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="absolute w-3 h-3 bg-white dark:bg-primary/60 rounded-full z-10 transition-colors group-hover:bg-primary shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:shadow-[0_0_10px_rgba(242,185,13,0.3)]"></div>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
                                    Kolkata
                                </div>
                            </div>
                            {/* Mumbai Pin (West Coast) - Main Active */}
                            <div className="absolute top-[58%] left-[18%] group">
                                <div className="relative flex items-center justify-center w-6 h-6">
                                    <div className="absolute w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_20px_var(--color-primary)]"></div>
                                    <div className="pin-ring w-full h-full absolute scale-150"></div>
                                </div>
                                {/* Permanent Label for Active City */}
                                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2">
                                    <div className="bg-primary/10 backdrop-blur-md border border-primary/30 px-3 py-1.5 rounded-lg flex flex-col">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                            Mumbai
                                        </span>
                                        <span className="text-[10px] text-white/80">
                                            Active Events: 12
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Hyderabad Pin (Central South) */}
                            <div className="absolute top-[65%] left-[38%] group">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="absolute w-3 h-3 bg-white dark:bg-primary/60 rounded-full z-10 transition-colors group-hover:bg-primary shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:shadow-[0_0_10px_rgba(242,185,13,0.3)]"></div>
                                </div>
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
                                    Hyderabad
                                </div>
                            </div>
                            {/* Bengaluru Pin (South) */}
                            <div className="absolute top-[75%] left-[32%] group">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    <div className="absolute w-3 h-3 bg-white dark:bg-primary/60 rounded-full z-10 transition-colors group-hover:bg-primary shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:shadow-[0_0_10px_rgba(242,185,13,0.3)]"></div>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-700">
                                    Bengaluru
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

