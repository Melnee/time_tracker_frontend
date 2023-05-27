import React, { useState, useEffect } from "react";
import "./week.css";

import Day from "./day";

const Week = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [currentWeekStart, setCurrentWeekStart] = useState(null);

  // Calculate the start and end dates of the current week
  const calculateWeekDates = (startDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    for (let i = 0; i < 7; i++) {
      dates.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  useEffect(() => {
    // Calculate start and end days of week
    const todaysDate = new Date();

    // Monday = 1, Friday = 5, etc
    const currentWeekdayNumber = todaysDate.getDay();

    const firstDayOfWeek = new Date(todaysDate);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - currentWeekdayNumber);

    setWeekDates(calculateWeekDates(firstDayOfWeek));
    setCurrentWeekStart(firstDayOfWeek);
  }, []);

  const handleWeekChange = (previousOrNextClick) => {
    var dateChange = 0;
    if (previousOrNextClick === "previous") {
      dateChange = -7;
    } else if (previousOrNextClick === "next") {
      dateChange = 7;
    }

    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate() + dateChange);
    setCurrentWeekStart(newWeekStart);
    setWeekDates(calculateWeekDates(newWeekStart));
  };

  return (
    <div className="week-box">
      <button onClick={() => handleWeekChange("previous")}>{"<"}</button>
      {weekDates.map((date) => (
        <Day key={date} date={date}></Day>
      ))}
      <button onClick={() => handleWeekChange("next")}>{">"}</button>
    </div>
  );
};

export default Week;
