import { useState, useEffect } from "react";
import { FaGlobe, FaCity, FaRecycle, FaLeaf, FaBuilding } from 'react-icons/fa'; // Update icons as needed
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: "Like a paper cup, a sustainable relationship balances strength and flexibility, built to weather life's challenges without losing its shape.",
      icon: <FaLeaf size={50} className="text-green-500" />, // Updated icon
    },
    {
      id: 2,
      title: "Crafted in harmony with Jaipur's heritage, Nesco's paper cup machines symbolize modern efficiency integrated with the timeless allure of the Pink City.",
      icon: <FaBuilding size={50} className="text-gray-300" />, // Updated icon
    },
    {
      id: 3,
      title: "Nessco's paper cup machines leave a global footprint, catering to sustainable packaging needs worldwide with innovative technology.",
      icon: <FaGlobe size={50} className="text-[#483d78]" />,
    },
    {
      id: 4,
      title: "From Asia to Europe, Nessco's paper cup machines uphold quality and eco-friendliness, shaping the future of packaging solutions internationally.",
      icon: <FaRecycle size={50} className="text-yellow-600" />, // Updated icon
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={styles.carousel}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.card} ${
            currentIndex === index ? styles.active : ""
          } ${currentIndex === (index + 1) % items.length ? styles.next : ""}`}
        >
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.content}>
            <h2 className="font-montserrat">{item.title}</h2>
          </div>
        </div>
      ))}
      <div className={styles.indicators}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ""
            }`}
          >
            <span className={styles.progress}></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
