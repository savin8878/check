
  import {

    paperBowlMachineImage,
    paperBagMachineImage,
    paperPlateMachineImage,
    paperFlexoMachineImage,
    fullyAutomaticBagMachineImage,
    PCM110WithPLC,
    paperStrawMachine,
    BookServiceImage,
    paperLunchBoxMachine,
  } from "../../../../public/assets";

  import { StaticImageData } from "next/image";

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
  
  export const DataBankItem = [
    { title: "Paper Cup Machine", image: paperBagMachineImage },
    { title: "Paper Bowl Machine", image: paperBowlMachineImage },
    { title: "Paper Straw Machine", image: paperPlateMachineImage },
    { title: "Paper Bucket Machine", image: paperStrawMachine },
    { title: "Additional Item 4", image: BookServiceImage },
    { title: "Additional Item 5", image: BookServiceImage },
  ];