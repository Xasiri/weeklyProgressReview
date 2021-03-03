import React from "react";
import { Row, Col } from "react-bootstrap";
import MeetingNoteCheck from "./MeetingNoteCheck";

const MeetingNotes = ({ weeksForReview, dispatch, leaderCode }) => {
  return (
    <Row className="my-3">
      <Col md={4} lg={2} className="main-review__col1">
        Meeting Notes
      </Col>
      {weeksForReview.map((a) => (
        <Col key={a.weekID}>
          <MeetingNoteCheck
            notes={a.notes}
            dispatch={dispatch}
            weekID={a.weekID}
            leaderCode={leaderCode}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MeetingNotes;
