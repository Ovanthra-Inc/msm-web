"use client"

import * as React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
    Menu, X, ChevronRight, ArrowRight,
    Building2, Rocket, Handshake, Calendar, Trophy, Activity, Mic2,
    Store, Megaphone, Home, ShoppingBag, Truck, MapPin, Wine, ClipboardCheck,
    UserCheck, HeartHandshake, UserCog, Star, Wrench,
    PenTool, Hammer, Box, Settings, ShoppingCart,
    Monitor, Globe, Smartphone, Search, BarChart, Cpu
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
    {
        title: "Events & Corporate",
        items: [
            { title: "Corporate Events", description: "Executing high-impact business gatherings.", icon: <Building2 className="h-4 w-4 text-primary" /> },
            { title: "Product Launches", description: "Unveiling your brand's next big thing.", icon: <Rocket className="h-4 w-4 text-primary" /> },
            { title: "Award Ceremonies", description: "Honoring excellence with grandeur.", icon: <Trophy className="h-4 w-4 text-primary" /> },
            { title: "Sports Events", description: "Energizing competitions and tournaments.", icon: <Activity className="h-4 w-4 text-primary" /> },
            { title: "Annual Functions", description: "Celebrating milestones and success.", icon: <Calendar className="h-4 w-4 text-primary" /> },
        ]
    },
    {
        title: "Brand Activation",
        items: [
            { title: "In-Store Branding", description: "Captivating designs at the point of sale.", icon: <Store className="h-4 w-4 text-primary" /> },
            { title: "Outdoor Branding", description: "Maximum visibility across cityscapes.", icon: <Megaphone className="h-4 w-4 text-primary" /> },
            { title: "RWA Activation", description: "Engaging communities directly.", icon: <Home className="h-4 w-4 text-primary" /> },
            { title: "Roadshows", description: "Taking your brand on the move.", icon: <Truck className="h-4 w-4 text-primary" /> },
            { title: "Mall Activation", description: "High-traffic consumer engagement.", icon: <ShoppingCart className="h-4 w-4 text-primary" /> },
            { title: "Liquor Promotion", description: "Creative beverage marketing.", icon: <Wine className="h-4 w-4 text-primary" /> }
        ]
    },
    {
        title: "Manpower",
        items: [
            { title: "Event Staff", description: "Professional crew for seamless ops.", icon: <UserCheck className="h-4 w-4 text-primary" /> },
            { title: "Promoters", description: "Enthusiastic faces for your brand.", icon: <Megaphone className="h-4 w-4 text-primary" /> },
            { title: "Volunteers", description: "Dedicated support teams.", icon: <HeartHandshake className="h-4 w-4 text-primary" /> },
            { title: "Supervisors", description: "Experienced on-site leadership.", icon: <UserCog className="h-4 w-4 text-primary" /> },
            { title: "Ambassadors", description: "Personifying your brand's identity.", icon: <Star className="h-4 w-4 text-primary" /> },
            { title: "Technical Crew", description: "Experts behind the scenes.", icon: <Wrench className="h-4 w-4 text-primary" /> }
        ]
    },
    {
        title: "Exhibitions & MICE",
        items: [
            { title: "Stall Designing", description: "Creative spaces that stand out.", icon: <PenTool className="h-4 w-4 text-primary" /> },
            { title: "Fabrication", description: "Quality build and construction.", icon: <Hammer className="h-4 w-4 text-primary" /> },
            { title: "3D Concepts", description: "Visualizing experiences before they exist.", icon: <Box className="h-4 w-4 text-primary" /> },
            { title: "Installation", description: "Precise setup and management.", icon: <Settings className="h-4 w-4 text-primary" /> },
            { title: "Dealer Meets", description: "Strengthening networks and partnerships.", icon: <Handshake className="h-4 w-4 text-primary" /> },
            { title: "Conferences", description: "Knowledge sharing on a global scale.", icon: <Mic2 className="h-4 w-4 text-primary" /> }
        ]
    },
    {
        title: "Digital & Tech",
        items: [
            { title: "Digital Audits", description: "Data-driven insights and improvement.", icon: <ClipboardCheck className="h-4 w-4 text-primary" /> },
            { title: "Web Development", description: "Modern, responsive web solutions.", icon: <Globe className="h-4 w-4 text-primary" /> },
            { title: "App Promotion", description: "Boosting app visibility and downloads.", icon: <Smartphone className="h-4 w-4 text-primary" /> },
            { title: "SEO/SEM", description: "Search engine optimization and marketing.", icon: <Search className="h-4 w-4 text-primary" /> },
            { title: "Analytics", description: "Tracking performance and ROI.", icon: <BarChart className="h-4 w-4 text-primary" /> },
            { title: "AI Integration", description: "Leveraging future tech today.", icon: <Cpu className="h-4 w-4 text-primary" /> }
        ]
    }
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md border-b border-border/40"
                : "bg-background border-b border-border/40"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mr-4">
                        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
                            MSM<span className="text-orange-500">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <NavigationMenu className="static" viewportClassName="!w-[100vw] !left-0 border-t border-b border-border/40 bg-background/95 backdrop-blur-md shadow-lg !rounded-none mt-0 translate-x-[calc(-50vw+50%)]">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:text-primary transition-colors">
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-screen !max-w-[100vw] bg-transparent shadow-none border-none">
                                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 w-full px-6 md:px-8 py-10">
                                            {services.map((column, index) => (
                                                <div key={index} className={`flex flex-col ${index !== services.length - 1 ? 'border-r border-border/40' : ''} px-6`}>
                                                    <h4 className="text-xs font-semibold text-primary/80 mb-6 px-4 tracking-[0.2em] uppercase">
                                                        {column.title}
                                                    </h4>
                                                    <ul className="grid gap-1">
                                                        {column.items.map((item, itemIndex) => (
                                                            <ListItem
                                                                key={itemIndex}
                                                                href="#services"
                                                                title={item.title}
                                                                icon={item.icon}
                                                                onClick={(e) => scrollToSection(e, "services")}
                                                            >
                                                                {item.description}
                                                            </ListItem>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href="#catalogue"
                                            onClick={(e) => scrollToSection(e, "catalogue")}
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent text-muted-foreground hover:text-primary cursor-pointer")}
                                        >
                                            Catalogue
                                        </a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href="#about"
                                            onClick={(e) => scrollToSection(e, "about")}
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent text-muted-foreground hover:text-primary cursor-pointer")}
                                        >
                                            About
                                        </a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <a
                                            href="#presence"
                                            onClick={(e) => scrollToSection(e, "presence")}
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent focus:bg-transparent text-muted-foreground hover:text-primary cursor-pointer")}
                                        >
                                            Presence
                                        </a>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            onClick={(e) => scrollToSection(e as any, "contact")}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg cursor-pointer"
                        >
                            Contact Us
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden cursor-pointer">
                                    <Menu className="h-6 w-6 text-foreground" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background border-l border-border/40">
                                <SheetTitle className="text-foreground">Menu</SheetTitle>
                                <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-[calc(100vh-100px)]">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="services" className="border-b- border-border/40">
                                            <AccordionTrigger className="text-lg font-medium hover:no-underline py-2 text-foreground">Services</AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex flex-col gap-6 pl-4">
                                                    {services.map((column, index) => (
                                                        <div key={index} className="flex flex-col gap-2">
                                                            <h4 className="text-sm font-medium text-muted-foreground mb-2 uppercase">{column.title}</h4>
                                                            {column.items.map((item, itemIndex) => (
                                                                <a
                                                                    key={itemIndex}
                                                                    href="#services"
                                                                    onClick={(e) => {
                                                                        scrollToSection(e, "services");
                                                                        setIsOpen(false);
                                                                    }}
                                                                    className="flex items-center gap-2 py-2 text-sm text-foreground hover:text-orange-500"
                                                                >
                                                                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500/50" />
                                                                    {item.title}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <a
                                        href="#catalogue"
                                        onClick={(e) => { scrollToSection(e, "catalogue"); setIsOpen(false); }}
                                        className="text-lg font-medium hover:text-primary transition-colors py-2 text-foreground"
                                    >
                                        Catalogue
                                    </a>
                                    <a
                                        href="#about"
                                        onClick={(e) => { scrollToSection(e, "about"); setIsOpen(false); }}
                                        className="text-lg font-medium hover:text-primary transition-colors py-2 text-foreground"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#presence"
                                        onClick={(e) => { scrollToSection(e, "presence"); setIsOpen(false); }}
                                        className="text-lg font-medium hover:text-primary transition-colors py-2 text-foreground"
                                    >
                                        Presence
                                    </a>

                                    <div className="flex flex-col gap-2 mt-4">
                                        <Button
                                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg w-full"
                                            onClick={(e) => { scrollToSection(e as any, "contact"); setIsOpen(false); }}
                                        >
                                            Contact Us
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode; badge?: string; variant?: "default" | "simple" }
>(({ className, title, children, icon, badge, variant = "default", ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group block select-none p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 focus:bg-primary/5 rounded-lg border border-transparent hover:border-primary/20",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-start gap-4">
                        {icon && <div className="mt-0.5 text-muted-foreground group-hover:text-primary transition-colors duration-200">{icon}</div>}
                        <div className="flex flex-col gap-1.5">
                            <div className="text-sm font-semibold leading-none flex items-center gap-2 text-foreground group-hover:text-primary transition-colors duration-200">
                                {title}
                                {badge && (
                                    <span className="rounded bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                                        {badge}
                                    </span>
                                )}
                            </div>
                            {variant === "default" && children && (
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">
                                    {children}
                                </p>
                            )}
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
