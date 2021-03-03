import React from "react";
import { Row, Col } from "react-bootstrap";
import QuaoteInput from "./quotations/QuaoteInput";

const ActiveAdvisors = ({ weeksForReview }) => {
  return (
    <Row className="my-3">
      <Col md={4} lg={2} className="main-review__col1">
        Active Advisor
      </Col>

      {weeksForReview.map((a) => (
        <Col key={a.weekID}>
          <QuaoteInput />
        </Col>
      ))}
    </Row>
  );
};

export default ActiveAdvisors;
