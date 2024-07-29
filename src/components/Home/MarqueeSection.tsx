"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

export default function InfiniteMovingCardsDemo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const springY = useSpring(yOffset, { stiffness: 80, damping: 150 });

  return (
    <div
      ref={container}
      className="h-screen flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] justify-center relative overflow-hidden p-8"
    >
      <motion.div style={{ y: springY }} className="flex flex-col space-y-8">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-montserrat whitespace-nowrap">
            Trusted By
          </span>
          <div className="flex-grow">
            <InfiniteMovingCards
              items={trustedBrands}
              direction="right"
              speed="slow"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-xl font-montserrat whitespace-nowrap">
            Partner Brands
          </span>
          <div className="flex-grow">
            <InfiniteMovingCards
              items={partnerBrands}
              direction="left"
              speed="slow"
              className="w-full"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ y: springY }}
        className="flex flex-col items-center mt-28 text-center"
      >
        <p className="text-xl mx-4 w-[62%] font-montserrat leading-8">
          Empowering sustainable packaging with advanced paper-based solutions.
          Our innovative machines drive global CO2 reduction, paving the way for
          a greener earth and elevating your packaging capabilities.
        </p>
      </motion.div>
    </div>
  );
}
