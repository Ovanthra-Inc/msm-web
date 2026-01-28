
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServiceData } from "@/lib/service-data";
import { ArrowRight, ArrowLeft, Target, MapPin, Clock, CheckCircle2, Lightbulb, FileText, MonitorPlay, Star, Palette, Settings2, Sparkles, Building2, Rocket, Trophy, Activity, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Map for dynamic icons
const iconMap: Record<string, any> = {
    target: Target,
    location_on: MapPin,
    schedule: Clock,
    verified: CheckCircle2,
    architecture: Building2,
    palette: Palette,
    settings_suggest: Settings2,
    star: Star,
    lightbulb: Lightbulb,
    description: FileText,
    podium: Activity,
    theater_comedy: Sparkles,
    chat: FileText,
    calendar_today: Calendar,
    build: Settings2,
    rate_review: CheckCircle2,
};

export function generateStaticParams() {
    // In a real app, you might fetch these from a CMS or defined list
    // For now, we list the keys from our data
    return [
        { slug: "corporate-events" },
        { slug: "product-launches" },
        { slug: "award-ceremonies" },
        { slug: "sports-events" },
        { slug: "annual-functions" },
        // ... add others if fully implemented
    ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getServiceData(slug);

    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black font-sans">
            {/* HER0 SECTION */}
            {/* HER0 SECTION */}
            <div className="relative z-50">
                <Navbar />
            </div>
            <header className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="relative w-full h-full">
                        <Image
                            src={data.heroImage}
                            alt={data.title}
                            fill
                            className="object-cover animate-[pulse_10s_ease-in-out_infinite] scale-105 transform transition-transform duration-[10000ms]"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <p className="text-primary text-xs md:text-sm font-sans uppercase tracking-[0.3em] mb-6 md:mb-8 border-b border-primary/30 inline-block pb-2">
                        The Collection
                    </p>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-none text-white mb-8 tracking-tight drop-shadow-lg">
                        {data.title}
                        <span className="block italic text-primary/90 font-light">{data.subtitle}</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 max-w-lg mx-auto font-light leading-relaxed mb-12 mix-blend-lighten">
                        {data.description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button
                            className="bg-white text-black hover:bg-primary hover:text-black transition-colors duration-500 px-10 py-6 rounded-none text-xs uppercase tracking-widest font-semibold min-w-[200px]"
                        >
                            Begin Project
                        </Button>
                        <Button
                            variant="link"
                            className="group flex items-center gap-2 text-white text-xs uppercase tracking-widest hover:text-primary transition-colors no-underline"
                        >
                            <span className="w-8 h-[1px] bg-white group-hover:bg-primary transition-colors"></span>
                            View Showreel
                        </Button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20 opacity-70">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">Scroll</span>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </header>

            {/* PHILOSOPHY SECTION */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[1px] h-full bg-white/5"></div>
                <div className="absolute top-0 left-12 md:left-24 w-[1px] h-full bg-white/5"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 relative">
                        <span className="block w-12 h-[1px] bg-primary mb-6"></span>
                        <p className="text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2">
                            The Philosophy
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-tight">
                            "{data.philosophy.quote.split(" ").map((word, i) => {
                                const isHighlighted = i > data.philosophy.quote.split(" ").length - 4; // Highlight last few words logic simplification
                                return isHighlighted ? <span key={i} className="italic text-primary">{word} </span> : word + " "
                            })}"
                        </h2>
                    </div>
                    <div className="md:col-span-1 hidden md:block"></div>
                    <div className="md:col-span-6 text-muted-foreground font-light leading-loose text-sm md:text-base md:pl-12 border-l border-white/5">
                        <p className="mb-6">
                            {data.philosophy.description}
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <span className="h-[1px] w-12 bg-white/20"></span>
                            <span className="font-display italic text-lg text-white">MSM Curators</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            {/* PROCESS SECTION */}
            <section className="py-24 bg-[#080808] border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
                    <div>
                        <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-2">Methodology</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white">
                            The <span className="italic font-light">Process</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 px-6 md:px-8 max-w-7xl mx-auto">
                    {data.process.map((step, index) => {
                        const Icon = iconMap[step.icon] || Star;
                        return (
                            <div key={index} className="flex flex-col group relative border-l border-white/10 pl-8 md:pl-12 hover:border-primary/50 transition-colors duration-500">
                                <span className="text-[6rem] md:text-[8rem] font-display leading-none text-white/5 group-hover:text-primary/10 transition-colors absolute -top-8 left-0 select-none">
                                    0{index + 1}
                                </span>
                                <div className="mt-8 relative z-10">
                                    <Icon className="w-10 h-10 text-primary mb-6 stroke-[1.5]" />
                                    <h3 className="text-2xl font-display text-white mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* GALLERY GRID */}
            <section className="bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    {data.gallery.map((item, index) => (
                        <div key={index} className={cn(
                            "relative h-[60vh] md:h-[80vh] group overflow-hidden border-b border-white/10",
                            index % 2 === 0 ? "border-r" : ""
                        )}>
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                            <div className="absolute inset-0 p-12 flex flex-col justify-end items-start">
                                <span className="text-primary text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {item.category}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-display text-white italic mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm max-w-sm border-l border-primary pl-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                    {item.description}
                                </p>
                                <Button variant="link" className="mt-8 text-xs uppercase tracking-widest border-b border-white/30 pb-1 hover:border-primary hover:text-primary transition-colors text-white rounded-none p-0 h-auto">
                                    Explore
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="py-32 bg-[#050505] relative" id="contact">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-20">
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Concierge Service</span>
                        <h2 className="text-5xl md:text-6xl font-display text-white mb-6">
                            Curate Your <span className="italic text-primary font-light">Vision</span>
                        </h2>
                        <p className="text-muted-foreground font-light max-w-md mx-auto">
                            Tell us about the moment you wish to create. We will handle the rest.
                        </p>
                    </div>

                    <form className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="block w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors font-display placeholder-white/20"
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="block w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors font-display placeholder-white/20"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Event Type</label>
                            <div className="flex flex-wrap gap-4">
                                {['Product Launch', 'Gala Dinner', 'Conference', 'Private Party'].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        className="px-6 py-2 border border-white/20 rounded-full text-sm text-white hover:border-primary hover:text-primary transition-all"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                id="details"
                                placeholder="Tell us more about your vision..."
                                className="block w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-primary focus:ring-0 focus:outline-none transition-colors font-display placeholder-white/20"
                            />
                        </div>

                        <div className="flex justify-center pt-12">
                            <Button
                                type="submit"
                                className="group relative px-12 py-6 overflow-hidden rounded-sm bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 h-auto"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Submit Request
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}
