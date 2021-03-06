import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { TeamContext } from "../../../context/TeamContext";

import Action from "../../Header/criteria/Action";
import ActiveAdvisors from "../../Header/criteria/ActiveAdvisors";
import MeetingNotes from "../../Header/criteria/meetingNotes/MeetingNotes";
import PendingClearence from "../../Header/criteria/pendingClearence.js/PendingClearence";
import Quotations from "../../Header/criteria/quotations/Quotations";
import Recruitement from "../../Header/criteria/recruitement/Recruitement";

const WeekOne = () => {
  const state = useSelector((state) => state);
  const { weekStart, leaderCode } = useContext(TeamContext);
  const weekNo = useParams().weekNo;
  const history = useHistory();

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
  console.log("weekno", weekNo);
  return (
    <Container className="main-review">
      <Row className="cols font-weight-bold">
        <Col>Week 1{weekNo}</Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Recruitement weeksForReview={weeksForReview} />
          <Quotations weeksForReview={weeksForReview} />
          <ActiveAdvisors weeksForReview={weeksForReview} />
          <PendingClearence weeksForReview={weeksForReview} />
          <MeetingNotes
            weeksForReview={weeksForReview}
            leaderCode={leaderCode}
          />
          <Action weeksForReview={weeksForReview} leaderCode={leaderCode} />
        </Col>
      </Row>
    </Container>
  );
};

export default WeekOne;
