"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCatalogue from "@/components/EventCatalogue";
import About from "@/components/About";
import PresenceMap from "@/components/PresenceMap";
import Team from "@/components/Team";
import Services from "@/components/Services";
import VideoShowcase from "@/components/VideoShowcase";
import Process from "@/components/Process";
import Quiz from "@/components/Quiz";
// import LogoMarquee from "@/components/LogoMarquee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RateModal from "@/components/RateModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Collaborators from "@/components/Collaborators";

export default function Home() {
  const [isRateModalOpen, setIsRateModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal on every page load/refresh
    setIsRateModalOpen(true);
  }, []);

  return (
    <>
      <RateModal isOpen={isRateModalOpen} onClose={() => setIsRateModalOpen(false)} />
      <WhatsAppFAB />
      <Navbar />
      <Hero />
      {/* <LogoMarquee /> */}
      <Collaborators/>
      <About />
      <EventCatalogue />
      <VideoShowcase />
      <Services />
      <Process />
      <Quiz />
      <Team />
      <PresenceMap />
      <CTA />
      <Footer />
    </>
  );
}
