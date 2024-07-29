"use client";
import Image from "next/image";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "./Common/Carousel";
import Manufacturing from "../../../public/assets/Manufacturing.png";
import Link from "next/link";

interface NavLinkProps {
  text: string;
  index: number;
  activeLink: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
  handleClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = memo(
  ({
    text,
    index,
    activeLink,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  }) => (
    <Link
      href="#"
      scroll={false}
      className={`text-gray-600 hover:text-black ${
        activeLink === index ? "border-b-2 border-red-600" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {text}
    </Link>
  )
);

NavLink.displayName = "NavLink";

NavLink.displayName = "NavLink";

interface HeroProps {
  refs: {
    heroRef: React.RefObject<HTMLDivElement>;
    aboutUsRef: React.RefObject<HTMLDivElement>;
    infiniteCardsRef: React.RefObject<HTMLDivElement>;
    knowMoreRef: React.RefObject<HTMLDivElement>;
    homeMachineRef: React.RefObject<HTMLDivElement>;
    newsFeatureRef: React.RefObject<HTMLDivElement>;
    knowMachineRef: React.RefObject<HTMLDivElement>;
    homeTestimonialRef: React.RefObject<HTMLDivElement>;
  };
}

const Hero: React.FC<HeroProps> = ({ refs }) => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setActiveLink(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveLink(-1);
  }, []);

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const { scrollY } = useScroll();
  const videoWidth = useTransform(scrollY, [0, 300], ["100%", "150%"]);
  const videoX = useTransform(scrollY, [0, 300], ["0%", "-25%"]);

  return (
    <div className="relative h-screen max-w-screen-2xl mx-auto m-auto flex flex-col items-center overflow-hidden min-h-screen w-full">
      <div className="relative sm:p-8 md:p-2 lg:px-4 w-full flex-wrap">
        <motion.div
          className="relative w-full md:mt-[3rem] h-[calc(100vh-150px)] sm:h-[calc(100vh-210px)] rounded-2xl"
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <video
              id="background-video"
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="video/bg.mp4" type="video/mp4" />
              <source src="video/bg.webm" type="video/webm" />
              <source src="video/bg.ogv" type="video/ogg" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
        <div className="absolute bg-[#f5f5f5] border-2 rounded-3xl px-4 p-0 flex items-center bottom-0 left-8 sm:bottom-10 sm:left-10 md:bottom-20 md:left-20">
          <span className="mr-2">Get a Quote</span>
          <button className="relative mr-[-0.8rem] right-0 z-10 p-1 text-4xl h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all hover:text-white hover:bg-black">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:translate-x-full group-hover:w-0 group-hover:bg-black group-hover:text-white">
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 w-full">
        <div className="w-full md:w-2/5 mx-1 flex flex-col mb-4 md:mb-2">
          <h4 className="text-2xl mx-2 sm:text-3xl md:text-2xl lg:text-4xl font-poppins font-thin">
            FOOD PACKING MACHINES
          </h4>
          <Image
            src={Manufacturing}
            alt="Manufacturing Image"
            layout="responsive"
            height={10}
            width={10}
            className="w-full pr-6 h-auto object-cover rounded-2xl"
          />
          <nav className="flex flex-wrap mt-0 space-x-2 sm:space-x-4 px-1 sm:px-2">
            <NavLink
              text="Machines"
              index={0}
              activeLink={activeLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick(refs.homeMachineRef)}
            />
            <NavLink
              text="About Us"
              index={1}
              activeLink={activeLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick(refs.aboutUsRef)}
            />
            <NavLink
              text="News"
              index={2}
              activeLink={activeLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick(refs.newsFeatureRef)}
            />
            <NavLink
              text="Brands"
              index={3}
              activeLink={activeLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick(refs.knowMoreRef)}
            />
            <NavLink
              text="Clientele"
              index={4}
              activeLink={activeLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick(refs.infiniteCardsRef)}
            />
            <NavLink
              text="Testimonials"
              index={5}
              activeLink={activeLink}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick(refs.homeTestimonialRef)}
            />
          </nav>
        </div>
        <div className="w-full px-2 md:w-3/5">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";

export default memo(Hero);
