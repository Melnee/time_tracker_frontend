import React from "react";
import "./homepage.css";
import MoonStarsBackground from "./moonStarsBackground";

const Homepage = () => {
  return (
    <div className="background-container">
      <h1 className="header">TimeTracker!</h1>

      <MoonStarsBackground />
    </div>
  );
};

export default Homepage;
