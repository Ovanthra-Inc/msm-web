"use client";

import { motion } from "motion/react";

const teamMembers = [
    {
        name: "Marcus Thorne",
        role: "Creative Director",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDTiIb90rilI_boCC8y5PlM5L0SkQV3mkTSh2KzE0XyqJJkXAp1x8ay-D6qssj7TxxJ5Gv58yMJAzsbSLitpAK52kmzA3L8UAv0DJ44h2r7-80xH1qB3HkW4WgBkjIRVSqGhZldm0QuWkAQraQihmzFdJsEdsA3LwyLUfs9r54_zsUxZwL1-CTWEDPpqodLaY0AIyQLGzfdard7dp38rSwgPISSWHx8NvtH8UE8nXp5gfGnqYRF9JI68h9D6tEBmlTnRGy_T16LrsP-",
    },
    {
        name: "Sarah Jenkins",
        role: "Lead Producer",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuADtfD_2COz-CEhrTPLuzLKhr96cAojzgdb6ex_Hg1nu6TagBeOh1OPsNvU_tnpTgwwHKrx9JGED1XAbNxytkVAKdAI0QzC0BJdfAHJf42bNGDA850TZrO35DR-YxxcnePJR0MiUJuZ9AKrZmt5XdVEqNcNJNKgIdIh0GmjNpxZ0SrXYBh593uVFa7Sr9XkzL2AUGBsp6_5UwXE6pz-rF9S2rkYUUEbbXjprw8bZfjLP8GIbIY0-GyeFHIsT6yEaHlZkqn3RU-pWDbg",
    },
    {
        name: "David Chen",
        role: "Tech Specialist",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDhpJGt6HIR1iarXyXxqAiAeW88apCYbca3ZN2afa9oMy5wPFjdY4vMvGuQG8_EtHZO1sAapNehHvK6Y2ujwYbHr39yJCkbxzt9o622J1eJILNelwmSkittO5cuhI6qx-8EW13cXn3eMCMq8gyW6aBmQPyMeN-G8gI2xiqDDLKenLaZj1tBHTY51Z-U_CWwL-i2Npo42iskR4LFwVISjc0Buq7CjLBTE1xhMVZd3Koy3OmliYMAonyDzug5kYzgaua6bkNsAWksSvp-",
    },
    {
        name: "Elena Rodriguez",
        role: "Brand Strategy",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD4XlFjjxHJ5yJH58XQd4ooLB41osqZ49yyDkosksVsa59bwlNUBOhOkbmIRTruhIIInRbmJbEOWfUO4X1nv0kFEbfnAJc8n1jRYjvdVOIynfnR4urwZH5y32H9r3X5DTfc4VMMXrcUP1OJNT2ORHckA67Ln1z5PtEam0T_djah39vUpTnwbo8KRTjOQLELnMuLJdzv3e2XPPW6Mxq4L3rQ50YegYgEMRcBKf7ZAnud0AiNOiMyYJFgz7Au1ypo3hmJ23eRaoGc0cAp",
    },
    {
        name: "James Wilson",
        role: "Logistics Head",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDhBXxGpXX2T_Ox_A_BwSZop2wv-uQJK3U9SP_YL_lEjOKpKYMO6BTt4Xn04Z46FedFuIfaLgygRgESMvHFPaQlmQu7-ie-qbpLP79JyEuLHiH2voYoAFwHX-r6fmzxlqnxxlpq53dANoAdEpx93riIoCNmOo1wpFW9Dy-28nJSE4N9KJDsHR855LT48NN6FmobJVUk4PG-l-YZWGpsejKOghmVY2i1Wr_t48lxV9j-9k1vLxTZRcEZX7nMJwDcCdjSWU4L6PRFmKJL",
    },
    {
        name: "Priya Patel",
        role: "Client Relations",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCSENchOl-RnRCZyBsMf4JVyPNXtR_AgPh1sU-2bbb_motEvSjv5coic1QF1yPGPHl8iyXi_VoESzAxQKMRSTQqqkyCQUtNG6-ESREFnGg4Ud0KnXOBEEa77sX4pqPXt3aOHRBvnErhoncEyh-swKNEgcnrxvuJ6MKZjhz8HyTUvysSs8V5DqVdSsCyPGiGc9oBDTVKjH5qMs9zwbOHcowd3Hcnj6AKNJ6dwnaPCz-ZIEloUovURlqAoJtnCBF57JGtr_ibIOiTjmuN",
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
                <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    href="#"
                    className="text-primary text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
                >
                    View Full Team
                </motion.a>
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
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 z-10">
                                <a
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
                                </a>
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

