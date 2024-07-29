import React, { useRef } from "react";
import "./HomePageAnimation.css";
import AboutUs from "./Home/AboutSection";
import { data } from "./Constants/Navbar/about-data";
const ClientsSection: React.FC = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  return (
    <section
      data-ga_section="clients-section"
      className=" h-screen pn-clients-section"
      id="clients-section"
    >
      <div className="mt-12" ref={aboutUsRef}>
        <AboutUs
          heading={data.heading}
          description={data.description}
          stats={data.stats}
          cards={data.cards}
        />{" "}
      </div>{" "}
    </section>
  );
};

export default ClientsSection;
