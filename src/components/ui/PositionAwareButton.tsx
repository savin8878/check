// components/PositionAwareButton.tsx
import React, { useRef } from 'react';
import styles from './PositionAwareButton.module.css';

interface PositionAwareButtonProps {
  text: string;
}

const PositionAwareButton: React.FC<PositionAwareButtonProps> = ({ text }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (buttonRef.current) {
      const span = buttonRef.current.querySelector('span');
      if (span) {
        const { left, top } = buttonRef.current.getBoundingClientRect();
        const relX = e.clientX - left;
        const relY = e.clientY - top;
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    }
  };

  return (
    <a
      ref={buttonRef}
      className={styles.btnPosnawr}
      href="#"
      onMouseMove={handleMouseMove}
    >
      {text}<span></span>
    </a>
  );
};

export default PositionAwareButton;
