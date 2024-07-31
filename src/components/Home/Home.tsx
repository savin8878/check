"use client";
import Image from "next/image";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "./Common/Carousel";
import Manufacturing from "../../../public/assets/Manufacturing2.gif";
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
      href=""
      scroll={false}
      className={`text-black hover:font-bold custome-scale-90 ${
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
    <div className="relative h-screen max-w-screen-2xl flex flex-col items-center overflow-hidden min-h-screen w-full">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <motion.div
          className=" md:mt-[3rem] h-[calc(100vh-150px)] flex justify-center items-center sm:h-[calc(100vh-210px)] rounded-2xl "
          ref={videoRef}
          style={{ width: videoWidth, x: videoX, originX: 0.5 }}
        >
          {isVideoLoaded ? (
            <video
              id="background-video"
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="video/BgHome.mp4" type="video/mp4" />
              <source src="video/bg.webm" type="video/webm" />
              <source src="video/bg.ogv" type="video/ogg" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </motion.div>
        <div className="absolute rounded-3xl px-4 p-0 flex items-center bottom-0 left-8 sm:bottom-10 sm:left-10 md:bottom-20 md:left-20">
          <div className="btn-common border-2 border-white rounded-xl">
            <span className="text-14 pl-2">GET QOUTES</span>
            <button className="btn-icon bg-[#483d78] rounded-full">
              <span>
                <MdKeyboardArrowRight className="text-white" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex my-2 mx-12 flex-col md:flex-row px-10 w-full">
        <div className="w-full md:w-2/5 mx-1 flex flex-col mb-4 md:mb-2">
          <h4 className="text-2xl mx-2 md:text-2xl lg:text-3xl font-montserrat font-thin">
            FOOD PACKING MACHINES
          </h4>
          <div className="h-20">
            <Image
              src={Manufacturing}
              alt="Manufacturing Image"
              height={100}
              width={800}
              className="w-full -mt-4 -ml-20 h-full flex justify-start items-center object-fill rounded-2xl"
            />
          </div>
          <nav className="flex flex-wrap mt-0 text-sm space-x-2 sm:space-x-4 text-black px-1 sm:px-2">
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
        <div className="w-full px-4 md:w-3/5">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";

export default memo(Hero);
