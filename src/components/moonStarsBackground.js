import React, { useState, useEffect, useRef } from "react";
import "./moonStarsBackground.css";
import { useSpring, animated } from "react-spring";

const MoonStarsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const moonRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    leftEyeRef.current.classList.add("squint");
    rightEyeRef.current.classList.add("squint");
  };

  const handleMouseLeave = () => {
    leftEyeRef.current.classList.remove("squint");
    rightEyeRef.current.classList.remove("squint");
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const eyeAnimationProps = useSpring({
    transform: `translate(${mousePosition.x * 0.05}px, ${
      mousePosition.y * 0.05
    }px)`,
  });

  return (
    <div className="moon-container">
      <div
        className="moon"
        ref={moonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <animated.div
          className="eye left"
          style={eyeAnimationProps}
          ref={leftEyeRef}
        />
        <animated.div
          className="eye right"
          style={eyeAnimationProps}
          ref={rightEyeRef}
        />
      </div>
    </div>
  );
};

export default MoonStarsBackground;
