import React, { useState, useEffect } from "react";

const Sparkle = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5, // Random size
      };

      setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

      setTimeout(() => {
        setSparkles((prevSparkles) => prevSparkles.filter((s) => s.id !== newSparkle.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
          }}
        ></div>
      ))}
    </>
  );
};

export default Sparkle;
