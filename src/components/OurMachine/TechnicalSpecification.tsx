import React from "react";
import SpecificationTable from "./SpecificationTable";
import Image from "next/image";
import SpeciGlass from "../../../public/assets/SpeciTable.png";
import { FaDownload } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const categories = [
  "Paper Cup Machines",
  "Paper Bowl Machines",
  "Paper Bag Machines",
  "Paper Straw Machines",
  "Flexo Printing Machines",
  "Die Cutting Machines",
];
export function TechnicalSpecifications() {
  return (
    <div className="w-full h-screen flex flex-col p-2">
      <div className="">
        <h1 className="font-poppins text-2xl">
          Technical
          <span className="text-red-500 font-extrabold ml-2">
            Specifications
          </span>
        </h1>
      </div>
      <div className="flex flex-row mt-[1.8rem]">
        <div className="w-[90%] flex flex-row">
          {" "}
          <SpecificationTable />
          <div className="ml-8">
            <Image
              src={SpeciGlass}
              width={400}
              height={400}
              alt={"Specification Glass"}
            />
          </div>
        </div>
        <div className="ml-8 w-1/5">
          <div className="rounded-md">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 mb-2 bg-white rounded-md hover:bg-gray-200"
              >
                <MdKeyboardDoubleArrowRight className="text-[#483d78]" />
                <span>{category}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-2">
            <h2 className="text-lg font-poppins mb-2">
              Download <span className="text-purple-700">Brochures</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Download our catalogue to know more about machines
            </p>
            <a
              href="/path-to-your-catalogue.pdf"
              className="flex items-center bg-red-600 text-white p-2 rounded-md"
            >
              <FaDownload className="mr-0" />
              Nessco India Catalogue Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
