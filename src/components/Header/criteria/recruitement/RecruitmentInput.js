import React from "react";
import { Row, Col } from "react-bootstrap";

export const RecruitmentInput = ({ recruitmentData }) => {
  const attribute = Object.entries(recruitmentData).map((e) => ({
    [e[0]]: e[1],
  }));

  return (
    <>
      {attribute.map((ele, index) => (
        <Row key={index}>
          <Col md={6} lg={6} xs={6} s={8}>
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
