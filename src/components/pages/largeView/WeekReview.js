import React, { useContext } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

import Action from "../../Header/criteria/Action";
import ActiveAdvisors from "../../Header/criteria/ActiveAdvisors";
import MeetingNotes from "../../Header/criteria/meetingNotes/MeetingNotes";
import PendingClearence from "../../Header/criteria/pendingClearence.js/PendingClearence";
import Quotations from "../../Header/criteria/quotations/Quotations";
import Recruitement from "../../Header/criteria/recruitement/Recruitement";
import "../../../Styles/MainCard/MainCard.scss";
// import "./styles.css";

const WeekReview = ({ week, leaderCode }) => {
  let heading;
  if (week.weekID == "total") {
    heading = "Total";
  } else heading = `Week No ${week.weekID}`;
  return (
    <Card
      style={{ width: "99%", marginBottom: "100px" }}
      className="border border-light bg-light"
    >
      <Card.Body>
        <Card.Title className="text-center card-header font-weight-bold">
          {heading}
        </Card.Title>
        <Row className="mb-3">
          <Col>
            <Recruitement weeksForReview={week} />
          </Col>
          <Col>
            <PendingClearence weeksForReview={week} />
          </Col>
        </Row>
        <Row>
          <Col className="MainView-col">
            <Quotations weeksForReview={week} />
          </Col>
          <Col className="MainView-col">
            <ActiveAdvisors weeksForReview={week} />
          </Col>
        </Row>
        <MeetingNotes weeksForReview={week} leaderCode={leaderCode} />
        <Action weeksForReview={week} leaderCode={leaderCode} />
      </Card.Body>
    </Card>
  );
};

export default WeekReview;
