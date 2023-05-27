import React from "react";
import "./day.css";

const Day = (props) => {
  return (
    <div className="day-box">
      <h2 className="day-header">{props.date}</h2>
    </div>
  );
};

export default Day;
