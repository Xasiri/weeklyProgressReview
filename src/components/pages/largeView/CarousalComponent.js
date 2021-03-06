import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TeamContext } from "../../../context/TeamContext";
import { useSelector } from "react-redux";

import Slider from "react-slick";
import { settings } from "./carosoulSettings";
import "./carouselSlick.css";
import WeekReview from "./WeekReview";

export default function CarousalComponent() {
  const state = useSelector((state) => state);
  const { weekStart, leaderCode } = useContext(TeamContext);

  const result = state.filter(
    (data) => parseInt(data.TeamLeaderCode) === parseInt(leaderCode)
  );
  const weeksForReview = [];
  result[0].weekData.forEach(function (week) {
    const r = weekStart + 4;
    if (weekStart <= week.weekID && r >= week.weekID) {
      weeksForReview.push(week);
    }
  });
  const week = weeksForReview[0];
  console.log(week, leaderCode);
  return (
    <div className="container">
      <Slider {...settings}>
        {weeksForReview.map((week) => (
          <div>
            <WeekReview week={week} leaderCode={leaderCode} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
