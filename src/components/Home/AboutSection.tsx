"use client";
import React, { useRef } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { motion} from "framer-motion";

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
  return (
    <div
      className="flex mt-16 h-screen bg-[#f5f5f5] max-w-screen-2xl mx-auto font-montserrat flex-col items-center"
    >
      <motion.div
        className="text-center w-full max-w-6xl"
      >
        <h1 className="text-2xl text-[#483d78]">
          About <span className="text-red-500 font-black">US</span>
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
          <div className=" text-justify">
            <h2 className="text-3xl font-bold text-[#483d73]">
              {stats.machinesSold}
            </h2>
            <p className="text-base">Machines Sold</p>
          </div>
          <p className="text-base ml-12 mt-5 text-center ml-18 w-[60%] leading-5">{description}</p>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#483d73] -mt-3">
              {stats.readyStockMachines}
            </h2>
            <p className="text-base">Ready Stock Machines</p>
          </div>
        </div>
        <a
          href="/products"
          className="text-[#483d73] mt-4 mr-18 inline-block underline-offset-3 underline"
        >
          Read more
        </a>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-around w-full mt-6"
      >
        {cards.map((card, index) => (
          <div key={index} className="relative w-full md:w-[30%] p-0 group">
            <motion.div>
              <div className="relative overflow-hidden rounded-md transition-transform transform group-hover:scale-110">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={250}
                  className="w-full rounded-3xl border-2 h-52 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 flex items-center justify-between w-full">
                  <a
                    href={card.link}
                    className="text-white font-extrabold text-md"
                  >
                    {card.title}
                  </a>
                  <BsBoxArrowUpRight className="text-2xl text-white font-extrabold text-bold" />
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutUs;
