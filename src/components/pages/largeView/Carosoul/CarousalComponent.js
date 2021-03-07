import React, { useContext } from "react";
import { TeamContext } from "../../../../context/TeamContext";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { settings } from "./carosoulSettings";
import WeekReview from "../WeekReview";
import userResultWeeks from "./resultDetails";
import ErrorPage from "../../errorPage/ErrorPage";
import "./carouselSlick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarousalComponent() {
  const state = useSelector((state) => state);
  const { weekStart, leaderCode } = useContext(TeamContext);
  const results = userResultWeeks(state, leaderCode, weekStart);

  return (
    <div className="container">
      {results.error ? (
        <ErrorPage />
      ) : (
        <Slider {...settings}>
          {results.weekResult.map((week) => (
            <div key={week.weekID} className="pr-2">
              <WeekReview week={week} leaderCode={leaderCode} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
