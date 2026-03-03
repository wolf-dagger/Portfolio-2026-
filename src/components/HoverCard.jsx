import React, { useRef } from "react";

const HoverCard = ({ name, image }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale(1.03)
    `;
  };

  const resetRotation = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="my-12 mx-2" style={{ perspective: "100px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        className="w-35 h-35 glass-strong glow-border text-white rounded-xl p-6 transition-transform duration-300 ease-out relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex justify-center mb-5">
          <img src={image} alt={name} className="w-15 h-15" />
        </div>

        <div className="flex justify-center">
          <div className="text-primary-foreground text-lg">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
