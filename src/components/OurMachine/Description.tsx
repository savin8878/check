import React, { useEffect } from "react";
import Image from "next/image";
import rollFlexo from "../../../public/assets/nav_machine/PaperBowlMachine.webp";
import "../../pages/machine/machine.css";

const Description: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="Description-wrapper mt-20">
      <div className="Description-container font-montserrat">
        <div className="flex flex-col rounded-lg w-full">
          <div className="flex items-start w-full relative">
            <div className="w-[50%]">
              <div className="mt-[5.5rem]">
                <div className="text-start mb-0 custom-text-container">
                  <h1 className="text-6xl mb-2 whitespace-nowrap">
                    Food Packaging Machines
                  </h1>
                  <h2
                    className="text-6xl font-bold italic mt-2 custom-subtitle"
                    style={{ color: "#483D73" }}
                  >
                    Flexo <span className="text-red-500">Printing</span>
                  </h2>
                  <p className="text-lg mt-4">
                    Flexo Printing Machine, with 200 mtr per sec.
                    <br /> 4 Color Machines, designed for paper rolls.
                  </p>
                  <button
                    className="mt-5 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 custom-button"
                    style={{ backgroundColor: "#483D73" }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="image-container text-center"
              style={{ marginTop: "12rem", marginLeft: "-15%" }}
            >
              <Image
                src={rollFlexo}
                height={800}
                width={400}
                alt="Flexo Printing Machine"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            <svg
              className="connector-svg ml-0 mt-28"
              width="400"
              height="200"
              viewBox="0 0 400 200"
            >
              <path
                id="connector-path"
                d="M10,10 L30,30 L180,30 L200,50"
                fill="transparent"
                stroke="#374C68"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="50"
                r="4"
                fill="black"
                stroke="#374C68"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;