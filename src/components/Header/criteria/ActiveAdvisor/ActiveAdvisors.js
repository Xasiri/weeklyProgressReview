import React from "react";
import { Row, Col } from "react-bootstrap";
import QuaoteInput from "../quotations/QuaoteInput";
import "../../../../Styles/MainCard/MainCard.scss";

const ActiveAdvisors = ({ weeksForReview }) => {
  return (
    <>
      <Row className="margin-quaotation">
        <Col className="title-text">Active Advisor</Col>
      </Row>
      <Row className="mb-3">
        <Col key={weeksForReview.weekID}>
          <QuaoteInput />
        </Col>
      </Row>
    </>
  );
};

export default ActiveAdvisors;
