"use client";

import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer className="bg-background dark:bg-background-dark py-12 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left"
                >
                    <span className="font-display text-xl font-bold tracking-tight text-foreground">
                        MSM<span className="text-primary">.</span>
                    </span>
                    <p className="text-xs text-gray-500 mt-2">
                        © 2026 MSM Events. All rights reserved.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex gap-6 text-sm text-gray-600 dark:text-gray-400"
                >
                    <a href="#" className="hover:text-primary transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        Contact
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-4"
                >
                    <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                        <span className="material-icons-outlined text-xs">facebook</span>
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                        <span className="material-icons-outlined text-xs">smart_display</span>
                    </a>
                </motion.div>
            </div>
        </footer>
    );
}
