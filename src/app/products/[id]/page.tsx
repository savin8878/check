"use client";

import { useParams } from "next/navigation";
import { Machines } from "@/components/Constants/index";
import { notFound } from "next/navigation";
import Image from "next/image";
import Machine from "@/pages/machine/MachineHome";
const MachineDetails = () => {
  const params = useParams();
  // Ensure params.id is a string
  const machinename =
    typeof params?.id === "string" ? decodeURIComponent(params.id) : "";

  // Log for debugging
  console.log("Machine Name:", machinename);

  // Check if machinename is valid
  if (!machinename) {
    return notFound(); // Handle the case where machinename is not available
  }
  // Find the machine that matches the machinename
  const machine = Machines.find((m) => m.name === machinename);
  console.log(machine);

  if (!machine) {
    return notFound(); // Handle the case where no matching machine is found
  }

  return (
    <div className="container mx-auto mt-12 p-4">
      <div className="p-6 rounded-lg flex">
        <Image
          src={machine.mimage}
          alt={machine.name}
          height={200}
          width={200}
          className="w-1/3 rounded-lg"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold mb-2">{machine.name}</h2>
          <p className="text-gray-700 mb-2">{machine.introduction}</p>
          <p className="text-gray-700 mb-2">{machine.parameters}</p>
          <p className="text-gray-700 mb-2">{machine.application}</p>
          <p className="text-gray-700 mb-2">{machine.product_description}</p>
          <p className="text-gray-700 mb-2">
            {machine.technical_specification}
          </p>
          <p className="text-gray-700 mb-2">{machine.optional_add_ons}</p>
          <p className="text-gray-700 mb-2">{machine.faqs}</p>
          <p className="text-gray-700">{machine.related_product}</p>
        </div>
      </div>
      <Machine/>
    </div>
  );
};

export default MachineDetails;
