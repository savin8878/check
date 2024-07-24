import React, { useState } from "react";
import Image from "next/image";
import {
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
  BookServiceImage,
  paperLunchBoxMachine,
} from "../../../public/assets";

const Machines = [
  {
    name: "Paper Cup Plant Setup",
    category: "Paper Cup Plant Setup",
    image: paperBowlMachineImage,
    description: "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production.",
  },
  {
    name: "Raw Material Plant Setup",
    category: "Raw Material Plant Setup",
    image: paperBagMachineImage,
    description: "Efficient and reliable raw material plant setup for optimal production.",
  },
  {
    name: "Printing & Die Cutting Setup",
    category: "Printing & Die Cutting Setup",
    image: paperPlateMachineImage,
    description: "Advanced printing and die-cutting setups for high-quality outputs.",
  },
  {
    name: "Paper Straw Plant Setup",
    category: "Paper Straw Plant Setup",
    image: paperFlexoMachineImage,
    description: "Eco-friendly paper straw plant setup for sustainable production.",
  },
  {
    name: "Paper Bag Plant Setup",
    category: "Paper Bag Plant Setup",
    image: fullyAutomaticBagMachineImage,
    description: "Efficient paper bag plant setup for versatile and eco-friendly bag production.",
  },
  {
    name: "Paper Plate Plant Setup",
    category: "Paper Plate Plant Setup",
    image: PCM110WithPLC,
    description: "High-speed paper plate plant setup for efficient and eco-friendly production.",
  },
  {
    name: "Molds & Die Solutions",
    category: "Molds & Die Solutions",
    image: paperStrawMachine,
    description: "Precision molds and die solutions for all your manufacturing needs.",
  },
  {
    name: "Sterio Solutions",
    category: "Sterio Solutions",
    image: BookServiceImage,
    description: "Comprehensive sterio solutions for your production needs.",
  },
  {
    name: "All Solutions",
    category: "All Solutions",
    image: paperLunchBoxMachine,
    description: "Complete solutions for all your manufacturing requirements.",
  },
];

const SidebarLinks = [
  { name: "Paper Cup Plant Setup", icon: "/icons/paper-cup.png" },
  { name: "Raw Material Plant Setup", icon: "/icons/raw-material.png" },
  { name: "Printing & Die Cutting Setup", icon: "/icons/printing-die-cutting.png" },
  { name: "Paper Straw Plant Setup", icon: "/icons/paper-straw.png" },
  { name: "Paper Bag Plant Setup", icon: "/icons/paper-bag.png" },
  { name: "Paper Plate Plant Setup", icon: "/icons/paper-plate.png" },
  { name: "Molds & Die Solutions", icon: "/icons/molds-die.png" },
  { name: "Sterio Solutions", icon: "/icons/sterio.png" },
  { name: "All Solutions", icon: "/icons/all-solutions.png" },
];

const ProductLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState(SidebarLinks[0].name);
  const [currentImage, setCurrentImage] = useState(Machines[0].image);
  const [currentDescription, setCurrentDescription] = useState(Machines[0].description);

  const handleMouseEnter = (name: string) => {
    const machine = Machines.find((machine) => machine.name === name);
    if (machine) {
      setSelectedCategory(machine.name);
      setCurrentImage(machine.image);
      setCurrentDescription(machine.description);
    }
  };

  return (
    <div className="w-[98vw] z-30 md:h-full p-6 rounded-xl flex flex-col justify-center items-center font-medium">
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative">
          <div className="flex flex-wrap pb-8 justify-center overflow-hidden w-full">
            <div className="text-center relative w-full p-1">
              <Image
                src={currentImage}
                alt={selectedCategory}
                className="object-contain rounded-lg relative z-10 h-64 w-full transition-transform duration-300"
                width={500}
                height={300}
              />
              <h3 className="text-lg text-black mt-2 font-bold relative z-20">
                {selectedCategory}
              </h3>
              <p className="text-sm text-black mt-2 relative z-20">
                {currentDescription}
              </p>
              <div className="flex justify-center mt-2 space-x-2">
                <a
                  href={`/products/${selectedCategory}`}
                  className="relative text-white bg-red-500 rounded-3xl px-8 p-1 z-20"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-2 md:w-1/4 pl-4 space-y-2 border-l border-gray-300 relative">
          <div className="pt-6 space-y-4">
            {SidebarLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => handleMouseEnter(link.name)}
                className={`flex items-center space-x-2 text-lg transition-colors duration-300 cursor-pointer ${
                  selectedCategory === link.name
                    ? "font-montserrat font-bold text-[#483d73]"
                    : "font-montserrat text-[#483d73]"
                }`}
              >
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
                <span
                  className={`transition duration-300 ${
                    selectedCategory === link.name ? "font-semibold" : ""
                  }`}
                >
                  {link.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
