"use client";
import React, { useRef } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { motion,useScroll, useTransform } from "framer-motion";

interface Stats {
  machinesSold: number | string;
  readyStockMachines: number | string;
}

interface Card {
  image: string;
  title: string;
  link: string;
}

interface AboutUsProps {
  heading: string;
  description: string;
  stats: Stats;
  cards: Card[];
}

const AboutUs: React.FC<AboutUsProps> = ({
  heading,
  description,
  stats,
  cards,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div
      ref={container}
      className="flex mt-10 max-w-screen-2xl mx-auto font-montserrat flex-col items-center  bg-gray-100"
    >
      <div className="text-center w-full max-w-6xl ">
        <h1 className="text-3xl text-[#483d78]">
          About <span className="text-red-500">Us</span>
        </h1>
        <h1 className="text-4xl px-56 py-2">
          {heading.split(" ").map((word, index) =>
            word === "Machine" ? (
              <span key={index} className="text-[#483d73]">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
        <div className="flex justify-between items-center w-full">
          <div className="text-center ">
            <h2 className="text-3xl font-bold text-[#483d73]">
              {stats.machinesSold}
            </h2>
            <p className="text-xl">Machines Sold</p>
          </div>
          <p className="text-lg mt-5 mx-4 w-[62%] leading-5">{description}</p>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#483d73] -mt-3">
              {stats.readyStockMachines}
            </h2>
            <p className="text-xl">Ready Stock Machines</p>
          </div>
        </div>
        <a
          href="/products"
          className="text-[#483d73] mt-4 mr-16 inline-block underline-offset-3 underline"
        >
          Read more
        </a>
      </div>

      <div className="flex flex-wrap justify-around w-full mt-14">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full md:w-[30%] p-0 group">
            <div className="relative overflow-hidden rounded-md transition-transform transform group-hover:scale-110">
              <motion.div style={{ scale: imageScale }}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={250}
                  className="w-full rounded-3xl border-2 h-52 object-cover"
                />
              </motion.div>

              <div className="absolute bottom-0 left-0 p-4 flex items-center justify-between w-full">
                <a href={card.link} className="text-white font-extrabold text-md">
                  {card.title}
                </a>
                <BsBoxArrowUpRight className="text-2xl text-white font-extrabold text-bold" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
