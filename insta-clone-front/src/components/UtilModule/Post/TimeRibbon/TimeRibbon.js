import React from "react";
import "./TimeRibbon.css";

const TimeRibbon = ({ datetime }) => {
  datetime = !!datetime ? datetime : "T";

  const [date, time] = datetime?.split("T");
  const [hrs, min] = time?.split(".")[0].split(":");

  return datetime && date && hrs && min ? (
    <span className="datetime-container">
      <span className="datetime">
        {date} at {hrs}:{min}
      </span>
    </span>
  ) : (
    <></>
  );
};

export default TimeRibbon;
