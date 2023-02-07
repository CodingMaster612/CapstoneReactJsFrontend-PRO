import React, { useState, useEffect } from "react";
import '../CurrencyConverter/CurrencyConverter.css'

const Spinning3DDoughnut = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(prevRotation => prevRotation + 1);
    }, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="doughnut-container">
      <div
        className="doughnut"
        style={{ transform: `rotateX(${rotation}deg) rotateY(${rotation}deg)` }}
      >
        <div className="inner-doughnut"></div>
      </div>
    </div>
  );
};

export default Spinning3DDoughnut;
