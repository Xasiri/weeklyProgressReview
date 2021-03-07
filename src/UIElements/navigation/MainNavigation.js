import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { TeamContext } from "../../context/TeamContext";
import "../../Styles/constants.scss";

const MainNavigation = () => {
  const { leaderCode, weekStart } = useContext(TeamContext);

  console.log(weekStart, leaderCode);

  return (
    <Navbar variant="dark" expand="lg md" className="navbar">
      <NavLink to="/" className="navbar-text">
        Weekly Review
      </NavLink>
    </Navbar>
  );
};

export default MainNavigation;
