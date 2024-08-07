import React from "react";

const SpecificationTable: React.FC = () => {
  return (
    <div className="max-w-xl text-sm  my-0">
      <table className="w-[100%] bg-white table-auto border-collapse">
        <thead className="bg-[#a6a6a6]">
          <tr>
            <th className="px-4 py-[0.25rem] text-center">FEATURE</th>
            <th className="px-4 py-[0.25rem] text-left">SPECIFICATION</th>
          </tr>
        </thead>
        <tbody className="font-montserrat">
          <tr className="hover:bg-gray-100 ">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Speed
            </td>
            <td className="px-7 py-[0.25rem]text-center bg-[#d7d7d7]">
              180 Cups / min
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Paper Specifications
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              170 - 380 GSM
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.10rem] bg-white">
              Raw Materials
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              Single or Double PE/PLA Coated Paper
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Cup Size
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              2.5 - 26 oz
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Cup Top Dia (TD)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              60 - 95 mm
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Cup Height (H)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              50 - 135 mm
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Cup Bottom Dia (RB)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              40 - 75 mm
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Cup Knurling Depth (KD)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              3.5 - 10 mm
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Voltage
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              3 Phase | 380 V; 50 Hz
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Total Power
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              35 kW
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Weight
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              3500 Kg
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Dimensions
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              3700 x 1520 x 1940 mm
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Air Pressure
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              0.6 - 0.8 Mpa
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-white">
              Air Flow Rate
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7]">
              30 CFM
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationTable;
