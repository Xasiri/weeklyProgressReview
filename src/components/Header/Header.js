import { Navbar, Form } from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../Styles/Header/Header.scss";

const Header = ({ setWeekIs }) => {
  const [startDate, setStartDate] = useState(new Date());

  Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };

  const startDateHandler = (date) => {
    setStartDate(date);
    setWeekIs(date.getWeek());
  };
  return (
    <Navbar variant="dark" expand="lg md" className="navbar">
      <Navbar.Brand href="#home" className="navbar-text">
        Weekly Review
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mr-auto"></Form>

        <p className="date-container">From </p>

        <DatePicker
          className="date-container__text"
          selected={startDate}
          onChange={(date) => startDateHandler(date)}
          placeholderText="select a date"
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
