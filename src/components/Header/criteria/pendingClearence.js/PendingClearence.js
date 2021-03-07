import React from "react";
import { Row, Col } from "react-bootstrap";
import PendingInput from "./PendingInput";
import "../../../../Styles/MainCard/MainCard.scss";

const PendingClearence = ({ weeksForReview }) => {
  return (
    <>
      <Row className="margin-component">
        <Col className="title-text ">Pending Clearence</Col>
      </Row>
      <Row className="CardLayout-Bodytext">
        <Col key={weeksForReview.weekID}>
          <PendingInput pendingData={weeksForReview.pendingClearence} />
        </Col>
      </Row>
    </>
  );
};

export default PendingClearence;
