import React, { useState } from "react";
import { Machines } from "../Constants";
import { ReactNode } from "react";

interface Item {
  description: ReactNode;
  src: string;
  alt: string;
  name: string;
}

interface Props {
  onHover: (item: Item) => void;
}

const Application: React.FC<Props> = ({ onHover }) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {Machines.map((item, index) => (
        <div
          key={index}
          className="relative w-30 bg-slate-700 h-30 rounded-md overflow-hidden group"
          onMouseEnter={() => onHover(item)}
        >
          <img
            src={item.mimage}
            alt={item.name}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:translate-y-[-20%]"
          />
          <p className="absolute bottom-0 w-full bg-[#575555] text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};
const ApplicationPage: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<Item>({
    src: Machines[0].mimage,
    alt: Machines[0].name,
    name: Machines[0].name,
    description: Machines[0].product_description,
  });

  const handleHover = (item: Item) => {
    setHoveredItem(item);
  };

  return (
    <div className="max-h-full bg-gray-100 p-8 flex justify-center items-start pt-8 -mt-2">
      <div className="bg-white rounded-b-3xl shadow-lg max-w-7xl overflow-hidden -mt-7 w-full h-full relative">
        <div className="flex">
          <div className="w-4/5 p-4 ml-5">
            <Application onHover={handleHover} />
          </div>
          <div className="relative flex items-center">
            <div className="border-r border-gray-300 h-4/5 absolute left-10 transform -translate-x-1/3"></div>
          </div>
          <div className="w-1/3 ml-16 mt-24 relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-80 w-80 mt-16 opacity-10 transition-opacity duration-300 ease-in-out"
              style={{ backgroundImage: `url(${hoveredItem.src})` }}
            ></div>
            <div className="relative z-10 p-4">
              <h2 className="text-5xl font-montserrat font-bold text-purple-700">
                {hoveredItem.name.split(" ")[0]}
              </h2>
              <h2 className="text-5xl font-montserrat font-bold text-red-600">
                {hoveredItem.name.split(" ")[1] || ""}
              </h2>
              <p className="text-lg mt-4">{hoveredItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
