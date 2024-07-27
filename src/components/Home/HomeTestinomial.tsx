import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";
import Globe from "./Globe";
import Image from "next/image";

const HomeTestimonial: React.FC = () => {
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8 text-center">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight font-bold text-black dark:text-white">
          Testimonials
        </h4>
      </div>

      <div className="relative mt-10 ">
        <div className="w-full">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
