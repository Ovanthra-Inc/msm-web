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
                            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzcY25Y8QUOXpHF0tkDxPi9Z3roeZ-huA-DHUwtB3XVSfLfJ_rPdspX_3Gg0vvfhcUIgFARj-wyXjfcRWbKU7vTu_S49qQNG_h9ARnjZ6UVjblPIPVXMoOBnK7gC0Rsx4eJvTxk57lWmzxrp869aSgNDsWczCWB-WrYMNkY4UziOWtEF6qxljTscPJGNkmJKz4SP1wcMWugzJiE5d4BXnLybX5Ieiq16QHx5t561qD3gCoBLmTigfTp5BUTKEIiTjYZMQEbiXEEwqq')",
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
                                Ongoing Projects
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
                    className="layout-content-container flex flex-col max-w-[720px] w-full items-center text-center mb-16"
                >
                    <p className="text-gray-900 dark:text-white/80 text-lg md:text-xl font-light leading-relaxed">
                        We don't just record events; we craft cinematic legacies. From the
                        quietest whispers to the loudest cheers, our lens captures the soul
                        of your occasion, transforming fleeting moments into timeless art.
                    </p>
                </motion.div>
                {/* Thumbnail Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="layout-content-container flex flex-col max-w-full w-full"
                >
                    <div className="flex items-center justify-between mb-6 px-4 md:px-0 max-w-[1080px] mx-auto w-full">
                        <h3 className="text-gray-900 dark:text-white text-2xl font-medium italic">
                            Latest Productions
                        </h3>
                        {/* <div className="flex gap-2">
                            <button className="size-10 rounded-full border border-gray-900/20 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all">
                                <span className="material-icons-outlined">arrow_back</span>
                            </button>
                            <button className="size-10 rounded-full border border-gray-900/20 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all">
                                <span className="material-icons-outlined">arrow_forward</span>
                            </button>
                        </div> */}
                    </div>
                    {/* Carousel Wrapper */}
                    <div className="w-full overflow-x-auto pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex gap-6 px-4 md:px-0 w-max mx-auto md:w-full md:justify-center max-w-[1080px]">
                            {/* Card 1 */}
                            <div className="group flex flex-col gap-3 w-[280px] md:w-[320px] cursor-pointer">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-800">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkjXe1-ixVqQijMfmBWJ8ALpzuu7Z_kxCPBaa3dDhle8OboJ6BEjnuygH5FoIgLBOizqfBVF9CgYH5cFhFG23Q18TXF4ZNFGBDMzJXD73b8M9Y2w5kiMSLBQSUULtrM72L5d9OLSadWF_hj7boVkSrLjfMz8aRykHHY07QYh09svaqUdhcICuSqVQtPNiwrRB4-4-QZ3WY1tBi1SJR8OgK8sPih_1ZSHRAm3cvczplogtIRy642IIZmDmt5-0pt5x2E202CSiAIabm')",
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-primary/90 rounded-full p-3 text-background-dark shadow-lg">
                                            <span
                                                className="material-icons-outlined"
                                                style={{ fontSize: "24px", display: "block" }}
                                            >
                                                play_arrow
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white text-lg font-medium leading-tight group-hover:text-primary transition-colors">
                                        Vertex Brand Launch
                                    </h4>
                                    <p className="text-gray-500 dark:text-white/50 text-sm mt-1">
                                        Commercial • Tokyo
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group flex flex-col gap-3 w-[280px] md:w-[320px] cursor-pointer">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-800">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEC7MA4JT0mirwm-Z2b5CbVbbAL48cdD79VEMBl_8_wBvyKAw5AjBYb0Sv5PGa6FeDF6UAMPzL7oa2y7DcVjoWf7i1Lb-bf85wlIWHOd7Nt8Le9CwUZh70Kj4M3-cRE5pA_C96KyKcifQGcRyFfpkCx65c79Ch-W6UxrGSrHJT8i9nhrpucIRzNZjYkgUfcby2GDO7sC3V3qNAyN1mZm08FhDDR_f8NvVj6a3P0WOv_XksYoX2Anvyu5ImG3rivCYrq1gIgY7Vz8si')",
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-primary/90 rounded-full p-3 text-background-dark shadow-lg">
                                            <span
                                                className="material-icons-outlined"
                                                style={{ fontSize: "24px", display: "block" }}
                                            >
                                                play_arrow
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white text-lg font-medium leading-tight group-hover:text-primary transition-colors">
                                        Midnight Gala 2024
                                    </h4>
                                    <p className="text-gray-500 dark:text-white/50 text-sm mt-1">
                                        Event • New York
                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="group flex flex-col gap-3 w-[280px] md:w-[320px] cursor-pointer">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-800">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlSfpWKy3yH-8mbNx3YydRBZOdUuZPNcIiRPAGkFcMkypsxERVyZPNBfpK4xYgZ2dwvVuqTimHEitO4BNSVVi6udmu35Ywg-VR5msbuDkm2AmyIIYsuIx_wP2Yqt462Sg525yuXLTNf1lv4UzzcRMr32yRYJkbWaJDlNkFnk8rlsEZxklFW87Dk0yXl2FYzjPBO2S0znTp-ODha1Gu0p1oLQAzn_gHBipMnlM6ikNCp0MbLrHi2ZfKO3wthySAa2WxKmyT5V2rNsPr')",
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-primary/90 rounded-full p-3 text-background-dark shadow-lg">
                                            <span
                                                className="material-icons-outlined"
                                                style={{ fontSize: "24px", display: "block" }}
                                            >
                                                play_arrow
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-gray-900 dark:text-white text-lg font-medium leading-tight group-hover:text-primary transition-colors">
                                        Summer Sonic Concert
                                    </h4>
                                    <p className="text-gray-500 dark:text-white/50 text-sm mt-1">
                                        Music • Los Angeles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </section>
    );
}

