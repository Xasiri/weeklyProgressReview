import React from "react";
import { Row, Col } from "react-bootstrap";
import { RecruitmentInput } from "./RecruitmentInput";
import "../../../../Styles/MainCard/MainCard.scss";

const Recruitement = ({ weeksForReview }) => {
  return (
    <>
      <Row className="margin-component">
        {" "}
        <Col className="title-text">Recruitement</Col>
      </Row>
      <Row>
        <Col key={weeksForReview.weekID}>
          <RecruitmentInput
            recruitmentData={weeksForReview.recruitement}
            weekID={weeksForReview.weekID}
          />
        </Col>
      </Row>
    </>
  );
};

export default Recruitement;
