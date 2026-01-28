
import {
    Building2, Rocket, Handshake, Calendar, Trophy, Activity, Mic2,
    Store, Megaphone, Home, ShoppingBag, Truck, MapPin, Wine, ClipboardCheck,
    UserCheck, HeartHandshake, UserCog, Star, Wrench,
    PenTool, Hammer, Box, Settings, ShoppingCart,
    Monitor, Globe, Smartphone, Search, BarChart, Cpu
} from "lucide-react"

export interface ServiceData {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    philosophy: {
        quote: string;
        description: string;
    };
    process: {
        title: string;
        description: string;
        icon: string; // Material symbol name
    }[];
    gallery: {
        title: string;
        category: string;
        description: string;
        image: string;
    }[];
}

export const servicesData: Record<string, ServiceData> = {
    // Events & Corporate
    "corporate-events": {
        id: "corporate-events",
        title: "Corporate",
        subtitle: "Events",
        description: "Executing high-impact business gatherings that resonate with your corporate identity.",
        heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
        philosophy: {
            quote: "Business is an art, and every event is a canvas for connection.",
            description: "We orchestrate corporate gatherings that are more than just meetings; they are strategic experiences designed to foster networking, celebrate achievements, and align teams with your vision."
        },
        process: [
            { title: "Objective Alignment", description: "Understanding your business goals and audience demographics.", icon: "target" },
            { title: "Venue Sourcing", description: "Finding the perfect backdrop for your corporate narrative.", icon: "location_on" },
            { title: "Logistics Planning", description: "Seamless coordination of travel, accommodation, and scheduling.", icon: "schedule" },
            { title: "On-site Management", description: "Flawless execution so you can focus on business.", icon: "verified" }
        ],
        gallery: [
            { category: "Ambience", title: "Conference Halls", description: "Professional setups that inspire focus.", image: "https://images.unsplash.com/photo-1544531896-ee4794916a8d?q=80&w=2072&auto=format&fit=crop" },
            { category: "Tech", title: "AV Systems", description: "Crystal clear audio and visuals.", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" },
            { category: "Network", title: "Gala Dinners", description: "Elegant evenings for relationship building.", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop" },
            { category: "Brand", title: "Branding", description: "Integrated corporate identity placement.", image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036&auto=format&fit=crop" }
        ]
    },
    "product-launches": {
        id: "product-launches",
        title: "Product",
        subtitle: "Launches",
        description: "Engineering the moment your innovation meets the world. A symphony of light, sound, and narrative precision.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlO99Ho-0tA7OV7Vhct1Fko4mT2YSW8hlzVL19DTdXPpXV91bSY9WxpUNQ0zA4l9YU7VPPxlZg_kgxpAKSTYQc19S4eDjblVpYSadwbJquT36cUtzCk2j1fSkR-9Sv8TwJXneqkdsSEHZHnA664pqTLgasoxqKMBAxvz7Lri3zWFP3tXRQntNwbAZd-oR-cP1FNH5guRS7zlyzKi1BoGUVB-_kYk5rkqwTle7WSnfog_uH9VOr-mB58dGJsKNFNG7BDSWod2kwQpey",
        philosophy: {
            quote: "Every detail is a deliberate stroke in the masterpiece of your brand story.",
            description: "We don't just organize events; we curate atmospheres. In a world saturated with noise, silence and precision speak the loudest. Our approach to product launches is rooted in the belief that the environment should be an extension of the product itself."
        },
        process: [
            { title: "Strategic Blueprinting", description: "Dissecting brand DNA. Deep-dive sessions to establish the core narrative and KPIs.", icon: "architecture" },
            { title: "Creative Visualization", description: "Immersive 3D renders and mood boards. We visualize the attendee journey from arrival.", icon: "palette" },
            { title: "Technical Production", description: "Rigorous planning meets flawless execution. Complex logistics, stage fabrication, and AV setup.", icon: "settings_suggest" },
            { title: "The Grand Reveal", description: "Showtime. Our onsite team ensures seamless coordination, allowing you to focus on engaging.", icon: "star" }
        ],
        gallery: [
            { category: "Environment", title: "Venue & Styling", description: "Transforming spaces into brand sanctuaries. Decor and spatial planning that speaks.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIdlU49lq8E2F_DaQ455ghv2rVZdgOiS-Exa-2kiE8CI-8xGK_-kuCoj4jA-odNNc6-1VRmPP9X-e8uWUBPey8PJmarwPWhIG0mXcWn_v7ml0oO-bE0qd8hd-mGCEHIoa_-_FZxhKpjJIbrRRQ5C5JNRKi3A4smUnX2kH63G3gCLXZsaHazpZPWsT4jemzleBnhnJ-3d0ILsM2yekVgQtiypRI5lruTfs91hnhDHM7K3EZytVml6xU08c4g_im6lVoG4bSOuN2kDy1" },
            { category: "Tech", title: "AV & Production", description: "State-of-the-art sound, lighting, and visual effects tailored to create dramatic moments.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbNFJTabsM0jZOOlpV9W3TMUEwRUNObtyegD4i77ID5zqGWqjGyUrCuioBFdi-N0RTkiVGIdY5wArN7mzDXXMD9vB71SQ_nf7yOj0aOG15OBlRQp2I1pmpgE5bofUg5lOiW09Y88vcBy5hp-fszROrqwq4uXBhAZamMCCF7Y6kJPpnElB2k-P6R6gIneC8pvTJzYGF_H80NwFLafbDA3MkZzQUikEfDWr6gNjma3NXTzpGONdN_61vwzBqrDSvD_slwN_1TbeMm6TK" },
            { category: "Experience", title: "Guest Management", description: "Seamless VIP handling, registration, and concierge services for a frictionless entry.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDItS-iedXiNIziHQUwjvbrwkYSWJHIeESelfYjCW-_oLzVeY3fjPp1YGoroiMG8KBcqLJVuBpZtiu8MtMa6KOTNPEufFpTXTwL8-Fq_6ZIzrxF09YDji8pYAM6bovnR8cS__SrmB6gd9jQQZJI0ZrPQ2K6QOwEPj_Gcbz4XQZ2YPIts9XQ_-4ei4BV6W7yUQyb3qq7qfNO8RrtesSBXrD690scWyNqGmZWesYkga0fUYVP9wbMHK1me0rF9sBk_vOrj76yUMKCmNz0" },
            { category: "Amplification", title: "PR & Media", description: "Strategic coordination with press and influencers to maximize coverage.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKN0vWavZK9YLMIhXUKlYi0PaWmlNZZ5k7-EBzUhcbkZAQepG5e9UynQIL14llLoLCXDNqywEjg-QzEaHDktrGTSiSPghftzRRKPHtM7fFQyziZJwm2Rb-vVedNMCUual0Qd3PRE732lJaXXU679sQ7V7F--q7fNK9i813iXkYTwcyxfz4FrURO7GM4lAwu7j5fzz2hZzAOVL6eRxhShQ4in883XRK4ZBAWtruACsdovj6RfTJMiKl8M8236ysKDdi3yMxng-W8Jyi" }
        ]
    },
    "award-ceremonies": {
        id: "award-ceremonies",
        title: "Award",
        subtitle: "Ceremonies",
        description: "Honoring excellence with grandeur. Setting the stage for moments of recognition and celebration.",
        heroImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2000&auto=format&fit=crop",
        philosophy: {
            quote: "Recognition is the greatest motivator. We make it memorable.",
            description: "From the red carpet arrival to the final applause, we create award ceremonies that elevate the prestige of your achievements. We focus on pacing, glamour, and the emotional arc of the evening."
        },
        process: [
            { title: "Theme Concept", description: "Creating a cohesive visual and emotional theme.", icon: "lightbulb" },
            { title: "Scripting & Flow", description: "Ensuring a seamless and engaging run of show.", icon: "description" },
            { title: "Stage Design", description: "Building impressive sets that frame the winners perfectly.", icon: "podium" },
            { title: "Entertainment", description: "Curating performances that keep the energy high.", icon: "theater_comedy" }
        ],
        gallery: [
            { category: "Stage", title: "Grand Stages", description: "Custom-built stages with LED backdrops.", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop" },
            { category: "Award", title: "Trophies", description: "Bespoke award design and handling.", image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2000&auto=format&fit=crop" },
            { category: "Entry", title: "Red Carpet", description: "Glamorous entry experiences for guests.", image: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2000&auto=format&fit=crop" },
            { category: "Dining", title: "Banquet", description: "Exquisite dining arrangements.", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" }
        ]
    },
    // Add default fallback data for other services to avoid empty pages while development continues
    "default": {
        id: "default",
        title: "Service",
        subtitle: "Excellence",
        description: "Delivering exceptional experiences tailored to your needs.",
        heroImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop",
        philosophy: {
            quote: "Excellence is not an act, but a habit.",
            description: "We bring passion, precision, and creativity to every project we undertake. Our team is dedicated to exceeding expectations and delivering results that matter."
        },
        process: [
            { title: "Consultation", description: "Understanding your vision and requirements.", icon: "chat" },
            { title: "Planning", description: "Developing a comprehensive strategy.", icon: "calendar_today" },
            { title: "Execution", description: "Bringing the plan to life with precision.", icon: "build" },
            { title: "Review", description: "Analyzing outcomes for continuous improvement.", icon: "rate_review" }
        ],
        gallery: [
            { category: "Focus", title: "Attention to Detail", description: "Every element considered.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
            { category: "Team", title: "Expert Staff", description: "Professionals dedicated to success.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" },
            { category: "Quality", title: "Premium Standards", description: "Only the best for our clients.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop" },
            { category: "Result", title: "Success Stories", description: "Creating lasting impact.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" }
        ]
    }
};

export function getServiceData(slug: string): ServiceData {
    if (!slug) return servicesData["default"];
    return servicesData[slug] || { ...servicesData["default"], title: slug.replace(/-/g, ' '), id: slug };
}
