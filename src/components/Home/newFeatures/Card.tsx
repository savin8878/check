import React from 'react';
import { ImCross } from "react-icons/im";

interface CardProps {
    handleCloseModal: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ handleCloseModal }) => {
    return (
      <div className=" top-12 bg-white rounded-3xl shadow-md relative bottom-5">
        <div className="absolute top-4  mt-2">
          <ImCross
            size={15}
            className="cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        {/* Add more content here */}
      </div>
    );
  };

export default Card;