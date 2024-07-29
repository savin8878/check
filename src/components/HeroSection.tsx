"use client"
import React, { useRef } from "react";
import "./HomePageAnimation.css";
import Home from "./Home/Home";
const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const infiniteCardsRef = useRef<HTMLDivElement>(null);
    const knowMoreRef = useRef<HTMLDivElement>(null);
    const homeMachineRef = useRef<HTMLDivElement>(null);
    const newsFeatureRef = useRef<HTMLDivElement>(null);
    const knowMachineRef = useRef<HTMLDivElement>(null);
    const homeTestimonialRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="pn-footer-slidein-layer">
      <div data-ga_section="hero-section" className="pn-hero-shadow">
        <div className="pn-hero-shadow" data-shadowhost="globekit-slide"></div>
        <section className="pn-hero-section">
          <div className="pn-hero-section__wrapper">
            <Home
              refs={{
                heroRef,
                aboutUsRef,
                infiniteCardsRef,
                knowMoreRef,
                homeMachineRef,
                newsFeatureRef,
                knowMachineRef,
                homeTestimonialRef,
              }}
            />
          </div>

          <div className="globe-hero">
            <div
              data-hero-shadow-host="globekit-slide"
              id="globekit-canvas-container"
              style={{ position: "absolute", top: 0 }}
            >
              <canvas id="globekit-canvas" width="1024" height="1024"></canvas>
            </div>
            <div id="globe-key">
              <ul id="globe-key-list"></ul>
            </div>
          </div>
          <span
            className="pn-icon pn-icon--hoverable pn-icon--down pn-hero-section__scroll-icon"
            data-scroll-to="#clients-section"
            data-scroll-offset="viewport"
          ></span>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
