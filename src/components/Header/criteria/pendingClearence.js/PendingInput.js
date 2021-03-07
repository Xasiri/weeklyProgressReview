import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../../Styles/MainCard/MainCard.scss";

const PendingInput = ({ pendingData }) => {
  const attribute = Object.entries(pendingData).map((e) => ({ [e[0]]: e[1] }));

  return (
    <>
      {attribute.map((ele, index) => (
        <Row key={index}>
          <Col md={6} lg={6} xs={6} className="pr-0  ">
            {Object.keys(ele)[0]}{" "}
          </Col>
          <Col md={4} lg={4} xs={5} className="pr-0 text-right">
            {Object.values(ele)[0]}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PendingInput;
