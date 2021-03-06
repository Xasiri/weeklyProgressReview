import React, { useContext } from "react";
import { Navbar, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TeamContext } from "../../context/TeamContext";
import useWindowDimensions from "../../components/customHooks/getWindow";

import "../../Styles/constants.scss";

const MainNavigation = () => {
  const { leaderCode, weekStart } = useContext(TeamContext);

  console.log(weekStart, leaderCode);

  return (
    <Navbar variant="dark" expand="lg md" className="navbar">
      <NavLink to="/" className="navbar-text">
        Weekly Review
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default MainNavigation;
