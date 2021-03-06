import React, { useContext } from "react";
import { Navbar, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TeamContext } from "../../context/TeamContext";
import useWindowDimensions from "../../components/customHooks/getWindow";

import "../../Styles/constants.scss";

const MainNavigation = () => {
  const { leaderCode, weekStart } = useContext(TeamContext);

  console.log(weekStart, leaderCode);

  return (
    <Navbar variant="dark" expand="lg md" className="navbar">
      <Navbar.Brand href="/" className="navbar-text">
        Weekly Review
      </Navbar.Brand>
      {leaderCode && <NavLink to="/week">Weekly Review</NavLink>}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mr-auto"></Form>
        <NavLink to="/week1">Week#</NavLink>
        <NavLink to="/week2">Week#</NavLink>
        <NavLink to="/week3">Week#</NavLink>
        <NavLink to="/week4">Week#</NavLink>
        <NavLink to="/total">Total</NavLink>

        <p className="date-container">From </p>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
