"use client";

import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Tushar Mondal",
    role: "Business Lead",
    image: "/assets/team/t6.jpg",
    description: "Drives business strategy, partnerships, and overall growth direction of the company.",
  },
  {
    name: "Asutosh Sidhy",
    role: "Business Lead",
    image: "/assets/team/t5.jpg",
    description: "Leads market expansion, client relations, and execution of business initiatives.",
  },
  {
    name: "Gourav Das",
    role: "Supervisor",
    image: "/assets/team/t4.jpg",
    description: "Oversees team operations, ensures project quality, and maintains delivery timelines.",
  },
  {
    name: "Bubai Mondal",
    role: "3D Artist",
    image: "/assets/team/t3.jpg",
    description: "Creates immersive 3D visuals and models that bring concepts to life.",
  },
  {
    name: "Balaram Bhakat",
    role: "Graphic Designer",
    image: "/assets/team/t2.jpg",
    description: "Designs visually compelling graphics that strengthen brand identity and communication.",
  },
  {
    name: "Rakesh Mondal",
    role: "Accountant",
    image: "/assets/team/t1.jpg",
    description: "Manages finances, budgeting, and ensures accurate financial reporting.",
  },
];


export default function Team() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-display text-3xl text-white mb-2"
                    >
                        The Collective
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-sm max-w-md"
                    >
                        Expertise across every discipline, united by a passion for perfection.
                    </motion.p>
                </div>
                {/* <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    href="#"
                    className="text-primary text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
                >
                    View Full Team
                </motion.a> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white/5 hover:bg-white/10 overflow-hidden rounded-xl transition-all duration-500 border border-white/5 hover:border-primary"
                    >
                        <div className="w-full aspect-[4/5] overflow-hidden relative">
                            <img
                                src={member.image}
                                alt={member.name}
                                className={`w-full h-full ${member.role === "Supervisor" ? "object-contain" : "object-cover"} grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700`}                        />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 z-10">
                                {/* <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    <span className="material-icons-outlined text-sm">
                                        alternate_email
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                                >
                                    <span className="material-icons-outlined text-sm">share</span>
                                </a> */}

                                <span className="text-white text-sm w-full text-center px-4">
                                    {member.description}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 text-center absolute bottom-0 w-full transform translate-y-0 group-hover:-translate-y-12 transition-transform duration-500">
                            <h4 className="text-white font-display text-xl tracking-wide group-hover:text-primary transition-colors">
                                {member.name}
                            </h4>
                            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                                {member.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

