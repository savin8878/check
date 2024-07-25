"use client";
import { useRef, useEffect, JSX } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "Empowering sustainable packaging with advanced paper-based solutions. Our innovative machines drive global CO2 reduction, paving the way for a greener earth and elevating your packaging capabilities.";

export default function TextOpacity() {
  const refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top center", // Animation starts when the top of the element reaches the center of the viewport
        end: "bottom center", // Animation ends when the bottom of the element reaches the center of the viewport
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string): JSX.Element[] => {
    return phrase.split(" ").map((word, i) => (
      <p key={word + "_" + i} className="m-0 mr-1 font-bold">
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string): JSX.Element[] => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i}
        ref={(el) => {
          if (el) refs.current.push(el);
        }}
        className="opacity-5 transition-opacity duration-300 ease-in-out"
      >
        {letter}
      </span>
    ));
  };

  return (
    <main
      ref={container}
      className="flex h-auto font-montserrat text-2xl items-center justify-center text-black"
    >
      <div
        ref={body}
        className="flex text-center text-black flex-wrap w-3/4 mx-auto"
      >
        {splitWords(phrase)}
      </div>
    </main>
  );
}
