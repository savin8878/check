import Image from "next/image";
import React from "react";
import process from "../../../public/assets/process.png";

export function Process() {
  return (
    <div className="h-screen w-full">
      <h1 className="text-2xl  text-[#483d78]">
        Process <span className="text-red-500">Cup Formation</span>
      </h1>
      <Image
        className="h-[70%] mt-10 w-full"
        src={process}
        alt={""}
        height={800}
        width={800}
      />
    </div>
  );
}
