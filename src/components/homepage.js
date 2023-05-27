import React from "react";
import "./homepage.css";
import MoonStarsBackground from "./moonStarsBackground";
import Week from "./week";

const Homepage = () => {
  return (
    <div className="homepage-background-container">
      <h1 className="header">
        TimeTracker!
        <MoonStarsBackground />
      </h1>
      <Week />
    </div>
  );
};

export default Homepage;
