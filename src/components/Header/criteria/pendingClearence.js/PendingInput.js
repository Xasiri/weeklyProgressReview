import React from "react";
import { Row, Col } from "react-bootstrap";

const PendingInput = ({ pendingData }) => {
  const attribute = Object.entries(pendingData).map((e) => ({ [e[0]]: e[1] }));

  return (
    <>
      {attribute.map((ele, index) => (
        <Row key={index}>
          <Col md={6} lg={6} xs={6}>
            {Object.keys(ele)[0]}{" "}
          </Col>
          <Col md={4} lg={6} xs={5}>
            {Object.values(ele)[0]}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PendingInput;
