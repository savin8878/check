"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-screen  flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] justify-center relative overflow-hidden p-8">
      <div className="flex flex-col items-start mb-8">
        <div className="flex items-center">
          <span className="text-lg font-bold mb-4 mr-4">Trusted By</span>
          <InfiniteMovingCards
            items={trustedBrands}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <div className="flex flex-col items-start mt-8">
        <div className="flex items-center">
          <span className="text-lg font-bold mb-4 mr-4">Partner Brands</span>
          <InfiniteMovingCards
            items={partnerBrands}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 text-center">
        <p className="text-sm leading-6">
          Empowering sustainable packaging with advanced paper-based solutions.
          Our innovative machines drive global CO2 reduction, paving the way for
          a greener earth and elevating your packaging capabilities.
        </p>
      </div>
    </div>
  );
}

const trustedBrands = [
  { src: "/assets/Logo_Icons/mcdonald.png", alt: "McDonald's" },
  { src: "/assets/Logo_Icons/wendys.jpeg", alt: "Wendy's" },
  { src: "/assets/Logo_Icons/starbucks.png", alt: "Starbucks" },
  { src: "/assets/Logo_Icons/kfc.png", alt: "KFC" },
];

const partnerBrands = [
  { src: "/assets/Logo_Icons/siemens.jpeg", alt: "Siemens" },
  { src: "/assets/Logo_Icons/omron.png", alt: "Omron" },
  { src: "/assets/Logo_Icons/smc.png", alt: "SMC" },
  { src: "/assets/Logo_Icons/autonics.png", alt: "Autonics" },
  { src: "/assets/Logo_Icons/tessa.jpg", alt: "Tessa" },
];
