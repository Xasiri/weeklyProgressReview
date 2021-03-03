import React from "react";
import { Row, Col } from "react-bootstrap";
import QuaoteInput from "./QuaoteInput";

const Quotations = ({ weeksForReview, dispatch }) => {
  return (
    <Row className="my-3">
      <Col md={4} lg={2} className="main-review__col1">
        Quaotation
      </Col>
      {weeksForReview.map((a) => (
        <Col key={a.weekID}>
          <QuaoteInput quotationsData={a.quotations} weekID={a.weekID} />
        </Col>
      ))}
    </Row>
  );
};

export default Quotations;
