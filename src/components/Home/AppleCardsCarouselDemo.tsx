"use client";
import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  paperBagMachineImage,
  paperBowlMachineImage,
  paperCupMachineImage,
  papercup,
  paperbag1,
  paperbowl,
} from "../../../public/assets";
import { FaCircleNotch } from "react-icons/fa";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ));
      

  return (
    <div className="w-full h-screen py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};


const data = [
    {
      firstname: "Servo Driven",
      secondname: "Paper Cup Machine",
      description:
        "Experience unparalleled efficiency with our Servo Driven Paper Cup Machine, a marvel of engineering that integrates advanced mechanical, electronic, pneumatic, and electrical technologies. This high-precision machine is equipped with 13 servos that work in perfect sync via PLC, enabling the production of up to 180 high-quality paper cups per minute, equivalent to 3 cups per second. The machine features a two-step curling process, which ensures the rim of each cup is curled twice to provide extra rigidity and durability & High-quality sealing is guaranteed through the use of ultrasonic and hot air mechanisms, minimizing the risk of leakage, making it ideal for both hot and cold beverages.",
      image: paperBowlMachineImage,
      title: "Servo Driven Paper Cup Machine",
      speed: 123,
      unit: "PCS/MIN",
      icon: papercup,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Bag",
      secondname: "Making Machine",
      description:
        "Fully automatic Paper Bag Making Machine is able to perform a series of functions including printing tracking, cutting, bottom indentation, bottom folding, bottom gluing. One can use both plain and printed paper as raw material for bag formation. This bag making machine is equipped with German photoelectric sensors which enables precise tracking of paper movement throughout the machine whether it is alignment of paper, unwinding or rewinding of paper.",
      image: paperBagMachineImage,
      title: "Paper Bag Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbowl,
      content: <DummyContent />,

    },
    {
      firstname: "Disposable Cup",
      secondname: "Making Machine",
      description:
        "NS-200 Disposable Cup making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This is the best Disposable cup making machine which has two-layer system for movement of Paper fans which is formed by a kind of arm arrangement for cup cone tracker. Robotic Arm plays a vital role in transferring cup cone to Moulds for further process of Bottom heating, knurling and Top curling. Moreover, this machine has certain additional features like photoelectric sensors for paper feeding and cup counting.",
      image: paperCupMachineImage,
      title: "Disposable Cup Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Bowl ",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Bowl Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
    {
      firstname: "Paper Plate",
      secondname: "Making Machine",
      description:
        "We are a leading manufacturer and global supplier of fully automatic Paper Plate machines. Our Disposable Paper Plate Making Machine is designed with advance technologies, which gives this model a compact structure and stable performance. This machine can produce up to 120 disposable paper plates every minute. This machine is self-sufficient with the capacity of performing a chain of functions.",
      image: paperCupMachineImage,
      title: "Paper Plate Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      content: <DummyContent />,

    },
  ];