// import { SignupFormDemo } from "@/components/Contact/Contact";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/HomeAbout";
import { data } from "@/components/Constants";
import InfiniteMovingCardsDemo from "@/components/Home/HomeMarquee";
import KnowMore from "@/components/Home/KnowMore";
export default function Home() {
  return (
    <main className="bg-[#f5f5f5]">
      <Hero />
      {/* <SignupFormDemo/> */}
      <AboutUs
        heading={data.heading}
        description={data.description}
        stats={data.stats}
        cards={data.cards}
      />
      <InfiniteMovingCardsDemo />
      <KnowMore/>
    </main>
  );
}
