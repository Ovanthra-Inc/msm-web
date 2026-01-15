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
                        title: "Recognition Ceremony: Honoring Excellence",
                        tags: "Conferences • Reception • Achievement",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuADPi1L65SOfkQqlsF68mQNJsmJoTekyDmlKUO6FbzTwDPcz6EnxvnzlbsPPZq4e9mKMJ9fsyYSC7uABZMfgXELBXX91CRrfoixWHVi0YVt8SRSw8LWTsx6jzhg8XuGhlfMNW7VeIp9aVZg7yuoL22myfAsK4Ta35oCb87XRLcu8YWcQAWts4ExyLSK5_0N4NXAdPN0JyL41g8LkZIGkehkwg9e4WvEeRgRNhSVtkZPBBDdh4DtaSFpCt1gDautLkJ_zBJRlUja2Qdd",
                        type: "Conference",
                    },
                    {
                        title: "Affiliate Night: Exclusive Event",
                        tags: "VIP • Affiliate • Elite",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuC0yHvIxLRBf0xCHIoObyQHR8dL6LNKVIJdCqYslaz-ELrnhKhgbf7okrilH1uvZmHb465ZMJPEUmYDVaWBbAhJY0e9OMjocfAlidJKQpT0nhOvRWdY_EDkWjlkl1-4Pj5Oyz9wkuKF31S_JqfIgK7WvK-B7QEZBuOB0BtY6AGjdjWMJP9--G9bWszQVdnvxyBl_cPgc7StNrBl58rk7qv5kmVZX_iznwagjjI_4UAhYbY0Czdrtymudjfkr0izCdm4RqTmuPtCZgex",
                        type: "Networking",
                    },
                    {
                        title: "Corporate Seminar: Leadership & Growth",
                        tags: "Leadership • Growth • Corporate",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBX875PQdil2Vi4y1Aud8u4Pn4zrzlpIQelT7gyoCM7tx8wIkFe3Ya9y65wRMSTx2S5k1dMwrHK67UUDkMDBGAn26lulbgYkgE8v4cUyvWuoDbPBpBivLq6ZRC743qQIc3Bw5_LOapX19KEPrEfqhgCjEVXmlmWevhl-W9Iv6KKDQHzDvqgHfn7lbMBBpwaULThTk7qZ4_G74YTWkQHnzVSUCk6o2zn_Q_mHz1FhVU0DC1mMNkZ0HGWM3tRexL7NSuLgg4k2BNGDisR",
                        type: "Seminar",
                    },
                    {
                        title: "Retail Activation: In-Store Engagement",
                        tags: "Retail • Activation • Engagement",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvXzHRnL_yVqT9XXSafluqyrtNDZph-E_lm0zTkMR9qjqPBQqILqmZiLClP4x_iu5axeIKTelpeyNh3pMSMLM6vbqiKaJYBb82E6JPtrhin5z251GvIjibwRE2QFd0IdsWohJwlhi3u4W6XsvqRbh_lQE4eHLZtIAzMXfWTHXzXO5ZUqRQDHk0uoJJUha_Bi0Hkld_daFyPFgj_PZTppGkQ4Dpk6o7dDZHjCvNGodLwn13ng6bUsLZVtPuNEvy3yLllY5ezlxujEc",
                        type: "Retail",
                    },
                    {
                        title: "Recognition Ceremony: Honoring Excellence",
                        tags: "Conferences • Reception • Achievement",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuADPi1L65SOfkQqlsF68mQNJsmJoTekyDmlKUO6FbzTwDPcz6EnxvnzlbsPPZq4e9mKMJ9fsyYSC7uABZMfgXELBXX91CRrfoixWHVi0YVt8SRSw8LWTsx6jzhg8XuGhlfMNW7VeIp9aVZg7yuoL22myfAsK4Ta35oCb87XRLcu8YWcQAWts4ExyLSK5_0N4NXAdPN0JyL41g8LkZIGkehkwg9e4WvEeRgRNhSVtkZPBBDdh4DtaSFpCt1gDautLkJ_zBJRlUja2Qdd",
                        type: "Conference",
                    },
                    {
                        title: "Affiliate Night: Exclusive Event",
                        tags: "VIP • Affiliate • Elite",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuC0yHvIxLRBf0xCHIoObyQHR8dL6LNKVIJdCqYslaz-ELrnhKhgbf7okrilH1uvZmHb465ZMJPEUmYDVaWBbAhJY0e9OMjocfAlidJKQpT0nhOvRWdY_EDkWjlkl1-4Pj5Oyz9wkuKF31S_JqfIgK7WvK-B7QEZBuOB0BtY6AGjdjWMJP9--G9bWszQVdnvxyBl_cPgc7StNrBl58rk7qv5kmVZX_iznwagjjI_4UAhYbY0Czdrtymudjfkr0izCdm4RqTmuPtCZgex",
                        type: "Networking",
                    },
                    {
                        title: "Retail Activation: In-Store Engagement",
                        tags: "Retail • Activation • Engagement",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuDRvXzHRnL_yVqT9XXSafluqyrtNDZph-E_lm0zTkMR9qjqPBQqILqmZiLClP4x_iu5axeIKTelpeyNh3pMSMLM6vbqiKaJYBb82E6JPtrhin5z251GvIjibwRE2QFd0IdsWohJwlhi3u4W6XsvqRbh_lQE4eHLZtIAzMXfWTHXzXO5ZUqRQDHk0uoJJUha_Bi0Hkld_daFyPFgj_PZTppGkQ4Dpk6o7dDZHjCvNGodLwn13ng6bUsLZVtPuNEvy3yLllY5ezlxujEc",
                        type: "Retail",
                    },
                    {
                        title: "Recognition Ceremony: Honoring Excellence",
                        tags: "Conferences • Reception • Achievement",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuADPi1L65SOfkQqlsF68mQNJsmJoTekyDmlKUO6FbzTwDPcz6EnxvnzlbsPPZq4e9mKMJ9fsyYSC7uABZMfgXELBXX91CRrfoixWHVi0YVt8SRSw8LWTsx6jzhg8XuGhlfMNW7VeIp9aVZg7yuoL22myfAsK4Ta35oCb87XRLcu8YWcQAWts4ExyLSK5_0N4NXAdPN0JyL41g8LkZIGkehkwg9e4WvEeRgRNhSVtkZPBBDdh4DtaSFpCt1gDautLkJ_zBJRlUja2Qdd",
                        type: "Conference",
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
                        <div className="relative h-[400px] overflow-hidden rounded-2xl mb-4">
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
                            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                <span className="material-icons-outlined text-sm">
                                    arrow_outward
                                </span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

