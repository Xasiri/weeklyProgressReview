import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../../Styles/Teamleader/TeamLeader.scss";

const WeekPicker = ({ setWeekStart }) => {
  const [startDate, setStartDate] = useState();

  Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };
  const startDateHandler = (date) => {
    setStartDate(date);
    setWeekStart(date.getWeek());
  };
  return (
    <div>
      <DatePicker
        className="TeamLeader-DatePicker"
        selected={startDate}
        onChange={(date) => startDateHandler(date)}
        placeholderText="select a date"
      />
    </div>
  );
};

export default WeekPicker;
