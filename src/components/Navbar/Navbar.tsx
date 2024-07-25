"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "./nav-menue";
import { cn } from "@/lib/utils";
import AboutLayout from "../Layout/AboutLayout";
import SupportLayout from "../Layout/SupportLayout";
import { supporItem } from "@/components/Constants/index";
import ProductLayout from "../Layout/ProductLayout";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";
import RightNavbar from "./RightNavbar";
import ApplicationPage from "../Layout/ApplicationLayout";
import SolutionLayout from "../Layout/Solution";

export default function NavbarDemo() {
  return (
    <div className="relative max-w-screen-2xl flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 flex w-full max-w-screen-2xl items-center inset-x-0 mx-auto z-50",
        scrolled ? "bg-white opacity-50" : "bg-transparent",
        className
      )}
    >
      <div className="w-1/5 flex justify-start items-center">
        <Link
          href="/"
          className="h-10 rounded-2xl lg:ml-2 flex justify-center items-center"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-full"
          />
        </Link>
      </div>
      <div className="w-3/5 flex items-center justify-center">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="About">
            <AboutLayout />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <ProductLayout
              setHoveredItem={() => {}}
              setHeading={() => {}}
              setIsVisible={() => {}}
            />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Application">
            <ApplicationPage />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Solution">
            <SolutionLayout />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Support">
            <SupportLayout
              setHoveredItem={() => {}}
              supporItem={supporItem}
              type={""}
            />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Resources">
            <SupportLayout
              setHoveredItem={() => {}}
              supporItem={supporItem}
              type={"Resources"}
            />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Video"
          ></MenuItem>
        </Menu>
      </div>
      <div className="w-1/5 flex items-center justify-end">
        <RightNavbar />
      </div>
    </div>
  );
}


