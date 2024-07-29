"use client"
import React, { useRef } from "react";
import Hero from "@/components/Home/Home";
import AboutUs from "@/components/Home/AboutSection";
import InfiniteMovingCardsDemo from "@/components/Home/MarqueeSection";
import KnowMore from "@/components/Home/LearnMoreSection";
import HomeMachine from "@/components/Home/ProductShowcase";
import NewsFeature from "@/components/Home/NewsFeature";
import KnowMachine from "@/components/Home/ProductDetails";
import HomeTestimonial from "@/components/Home/TestimonialsSection";
import { data } from "@/components/Constants/Navbar/about-data";
import ClientsSection from "@/components/ClientsSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const infiniteCardsRef = useRef<HTMLDivElement>(null);
  const knowMoreRef = useRef<HTMLDivElement>(null);
  const homeMachineRef = useRef<HTMLDivElement>(null);
  const newsFeatureRef = useRef<HTMLDivElement>(null);
  const knowMachineRef = useRef<HTMLDivElement>(null);
  const homeTestimonialRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#f5f5f5]">
      <HeroSection/>
      <ClientsSection/>
      
      <div ref={infiniteCardsRef}>
        <InfiniteMovingCardsDemo />
      </div>
      <div ref={knowMoreRef}>
        <KnowMore />
      </div>
      <div ref={homeMachineRef}>
        <HomeMachine />
      </div>
      <div ref={newsFeatureRef}>
        <NewsFeature />
      </div>
      <div ref={knowMachineRef}>
        <KnowMachine />
      </div>
      <div ref={homeTestimonialRef}>
        <HomeTestimonial />
      </div>
    </main>
  );
}
