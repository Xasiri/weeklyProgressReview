import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import MeetingNoteCheck from "./MeetingNoteCheck";
import "../../../../Styles/MainCard/MainCard.scss";

const MeetingNotes = ({ weeksForReview, leaderCode }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row className="margin-quaotation">
        <Col className="title-text">Meeting Notes</Col>
      </Row>
      <Row className="MeetingNote_End">
        <Col key={weeksForReview.weekID}>
          <MeetingNoteCheck
            notes={weeksForReview.notes}
            dispatch={dispatch}
            weekID={weeksForReview.weekID}
            leaderCode={leaderCode}
          />
        </Col>
      </Row>
    </>
  );
};

export default MeetingNotes;
