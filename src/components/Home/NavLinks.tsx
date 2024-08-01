"use client";
import React, { memo, useCallback, useRef, useState, useEffect } from "react";
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

const NavLinksDemo: React.FC<HeroProps> = ({ refs }) => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const navRef = useRef<HTMLDivElement | null>(null);

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
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        if (navTop <= 0) {
          navRef.current.classList.add("sticky-nav");
        } else {
          navRef.current.classList.remove("sticky-nav");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="nav-links">
      <nav className="absolute bottom-0 left-0 mb-2 ml-[2.4rem] flex flex-row flex-wrap text-16 font-poppins space-x-2 sm:space-x-6 text-black px-1 sm:px-2">
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
  );
};

export default NavLinksDemo;
