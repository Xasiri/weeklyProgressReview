import React from "react";
import { Row, Col } from "react-bootstrap";
import QuaoteInput from "./QuaoteInput";
import "../../../../Styles/MainCard/MainCard.scss";

const Quotations = ({ weeksForReview }) => {
  return (
    <>
      <Row className="margin-quaotation">
        <Col className="title-text">Quotation</Col>
      </Row>
      <Row>
        <Col key={weeksForReview.weekID}>
          <QuaoteInput
            quotationsData={weeksForReview.quotations}
            weekID={weeksForReview.weekID}
          />
        </Col>
      </Row>
    </>
  );
};

export default Quotations;
