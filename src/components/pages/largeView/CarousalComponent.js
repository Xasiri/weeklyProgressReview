import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { TeamContext } from "../../../context/TeamContext";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { settings } from "./carosoulSettings";
import WeekReview from "./WeekReview";
import userResultWeeks from "./resultDetails";
import "./carouselSlick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from "../errorPage/ErrorPage";

export default function CarousalComponent() {
  const state = useSelector((state) => state);
  const { weekStart, leaderCode } = useContext(TeamContext);
  const results = userResultWeeks(state, leaderCode, weekStart);

  let location = useLocation().pathname.substring(1);
  console.log(results);
  return (
    <div className="container">
      {results.error ? (
        <ErrorPage />
      ) : (
        <Slider {...settings}>
          {results.weekResult.map((week) => (
            <div>
              <WeekReview week={week} leaderCode={leaderCode} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
