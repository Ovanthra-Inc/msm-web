"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled || isOpen
                ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-display text-2xl font-bold tracking-tight dark:text-white text-gray-900">
                            MSM<span className="text-primary">.</span>
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            href="#services"
                            onClick={(e) => scrollToSection(e, "services")}
                            className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
                        >
                            Services
                        </a>
                        <a
                            href="#catalogue"
                            onClick={(e) => scrollToSection(e, "catalogue")}
                            className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
                        >
                            Catalogue
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => scrollToSection(e, "about")}
                            className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
                        >
                            About
                        </a>
                        <a
                            href="#presence"
                            onClick={(e) => scrollToSection(e, "presence")}
                            className="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300"
                        >
                            Presence
                        </a>
                        <a
                            href="#quiz"
                            onClick={(e) => scrollToSection(e, "quiz")}
                            className="bg-white dark:bg-white/10 dark:hover:bg-primary text-gray-900 dark:text-white px-5 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-white/20 transition-all hover:bg-gray-50 hover:shadow-lg"
                        >
                            Contact Us
                        </a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-primary focus:outline-none transition-colors"
                        >
                            <span className="material-icons-outlined text-3xl">
                                {isOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
                            <a
                                href="#services"
                                onClick={(e) => scrollToSection(e, "services")}
                                className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary py-2"
                            >
                                Services
                            </a>
                            <a
                                href="#catalogue"
                                onClick={(e) => scrollToSection(e, "catalogue")}
                                className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary py-2"
                            >
                                Catalogue
                            </a>
                            <a
                                href="#about"
                                onClick={(e) => scrollToSection(e, "about")}
                                className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary py-2"
                            >
                                About
                            </a>
                            <a
                                href="#quiz"
                                onClick={(e) => scrollToSection(e, "quiz")}
                                className="w-full text-center bg-primary text-white px-6 py-3 rounded-full text-lg font-medium shadow-md"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
