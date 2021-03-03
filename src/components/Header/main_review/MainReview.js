import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Action from "../criteria/Action";
import ActiveAdvisors from "../criteria/ActiveAdvisors";
import MeetingNotes from "../criteria/meetingNotes.js/MeetingNotes";
import PendingClearence from "../criteria/pendingClearence.js/PendingClearence";
import Quotations from "../criteria/quotations/Quotations";
import Recruitement from "../criteria/recruitement/Recruitement";
import TeamLeader from "../criteria/TeamLeader/TeamLeader";
import "../../../Styles/MainReview/MainReview.scss";

const MainReview = ({
  dispatch,
  state,
  setLeaderCode,
  weeksForReview,
  leaderCode,
}) => {
  return (
    <Container className="main-review">
      <Row className="cols font-weight-bold">
        <Col md={4} className="main-review__col1">
          Team leader/Criteria
        </Col>
        <Col>Week 1</Col>
        <Col>Week 2</Col>
        <Col>Week 3</Col>
        <Col>Week 4</Col>
        <Col>Total</Col>
      </Row>
      <Row className="my-3">
        <Col md="2" className="main-review__col2">
          <TeamLeader dispatch={dispatch} setLeaderCode={setLeaderCode} />
        </Col>

        <Col>
          <Recruitement weeksForReview={weeksForReview} />
          <Quotations dispatch={dispatch} weeksForReview={weeksForReview} />
          <ActiveAdvisors weeksForReview={weeksForReview} />
          <PendingClearence weeksForReview={weeksForReview} />
          <MeetingNotes
            weeksForReview={weeksForReview}
            dispatch={dispatch}
            leaderCode={leaderCode}
          />
          <Action
            weeksForReview={weeksForReview}
            dispatch={dispatch}
            leaderCode={leaderCode}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainReview;
