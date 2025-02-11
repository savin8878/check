import {
  FaLeaf,
  FaProjectDiagram,
  FaLightbulb,
  FaRecycle,
} from "react-icons/fa";
import { AiOutlineProduct } from 'react-icons/ai';
import { LiaToolsSolid } from 'react-icons/lia';
import { IoBarChartOutline } from 'react-icons/io5';
import {
  papercup,
  paperplate2,
  paperbowl,
  paperlid,
  paperstraw,
  paperbag1,
  missionImage,
  companyImage,
  strengthImage,
  pinkCityImage,
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
  BookServiceImage,
  paperLunchBoxMachine,
} from "../../../public/assets";
import HomeAbout1 from "../../../public/assets/HomeAbout1.png";
import HomeAbout2 from "../../../public/assets/HomeAbout2.jpg";
import HomeAbout3 from "../../../public/assets/HomeAbout3.png";
import { StaticImageData } from "next/image";
import NewsFeatureMachine from "../../../public/assets/NewsFeatureMachine.jpg"
import NewsFeatureBanner from "../../../public/assets/NewsFeatureBanner.jpg"
import NewsFeatureBanner2 from "../../../public/assets/NewsFeatureBanner2.jpg"
import teamunity from "../../../public/assets/teamunity.avif"
import productbox from "../../../public/assets/productbox.avif"
import factory from "../../../public/assets/factory.avif"
interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
  paperLunchBoxMachine: StaticImageData;
}

export const images: Images = {
  paperBowlMachineImage: paperBowlMachineImage,
  paperBagMachineImage: paperBagMachineImage,
  PCM110WithPLC: PCM110WithPLC,
  paperPlateMachineImage: paperPlateMachineImage,
  paperFlexoMachineImage: paperFlexoMachineImage,
  fullyAutomaticBagMachineImage: fullyAutomaticBagMachineImage,
  paperStrawMachine: paperStrawMachine,
  paperLunchBoxMachine: paperLunchBoxMachine,
};




export interface Item {
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  bgpic: StaticImageData;
}

export const item: Item[] = [
  {
    src: missionImage,
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 2",
    name: "Paper Cups",
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 2",
    name: "Paper Cups",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 5",
    name: "Paper Spoon",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 6",
    name: "Paper Glass",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 4",
    name: "Paper Bucket",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for be",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 3",
    name: "Paper Bowl",
    description:
      "Description for Paper bag Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to p",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 5",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for beper bag",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 2",
    name: "Paper Cup",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Cups",
    name: "Paper Bowl",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 2",
    name: "Paper Cup",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 3",
    name: "Paper Plate",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 3",
    name: "Paper Cup",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Cups",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 2",
    name: "Paper Glass",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 3",
    name: "Paper Bag",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage",
    bgpic: paperBagMachineImage,
  },
  {
    src: missionImage,
    alt: "Item 4",
    name: "Paper Spoon",
    description:
      "Ppaer cups are disposable containers made from the paper and often lined with pplatic or wax to prevent liuquid leakage.theu are widely used for bevrages and food indeustry",
    bgpic: paperBagMachineImage,
  },
];

//solution page
export interface item {
  id: number;
  img: StaticImageData;
  name: string;
  description: string;
}

export const Items: item[] = [
  {
    id: 1,
    name: "All Solutions",
    img: paperBagMachineImage,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 2,
    name: "Paper Cup Plant setup",
    img: papercup,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production.",
  },
  {
    id: 3,
    name: "Raw Material Plant Setup",
    img: paperbowl,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. ",
  },
  {
    id: 4,
    name: "Printing & Die Cutting setup",
    img: paperLunchBoxMachine,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 5,
    name: "Paper Straw Plant Setup",
    img: missionImage,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 6,
    name: "Paper Bag Plant Setup",
    img: paperStrawMachine,
    description: "technology for sustainable, high-volume output.",
  },
  {
    id: 7,
    name: "Paper Plate Plant Setup",
    img: paperPlateMachineImage,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. ",
  },
  {
    id: 8,
    name: "Molds & Die Solutions",
    img: paperlid,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  {
    id: 9,
    name: "Sterio Solutions",
    img: paperLunchBoxMachine,
    description:
      "Set up your paper cup plant with our high-speed machines for efficient, eco-friendly production. Enjoy rapid manufacturing with reduced energy consumption and operational costs. Invest in advanced technology for sustainable, high-volume output.",
  },
  // Add more items as needed
];
export const newscardcontent = [
  {
    image:NewsFeatureMachine,
    title: "Revolutionary Speed Unveiled",
  },
  {
    image: NewsFeatureBanner,
    title: "Excellence Showcased at DRUPA",
  },
  {
    image:NewsFeatureBanner2,
    title: "Excellence Showcased at FOOMA",
  },
];

interface IconProps {
  size?: number;
  className?: string;
}

interface CardContent {
  title: string;
  image: StaticImageData;
  icon: React.ComponentType<IconProps>;
}

export const cardContents: CardContent[] = [
  {
    title: 'Know Your Product',
    image:productbox,
    icon: AiOutlineProduct,
  },
  {
    title: 'Know Your Machine',
    image:factory,
    icon: LiaToolsSolid,
  },
  {
    title: 'Know Your Business',
    image:teamunity,
    icon: IoBarChartOutline,
  },
];