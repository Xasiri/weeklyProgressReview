import React from "react";
import { Row, Col } from "react-bootstrap";
import { RecruitmentInput } from "./RecruitmentInput";
import "../../../../Styles/MainReview/MainReview.scss";

const Recruitement = ({ weeksForReview }) => {
  return (
    <Row className="my-1">
      <Col md={4} lg={2} className="main-review__col1">
        Recruitement
      </Col>
      {weeksForReview.map((a) => (
        <Col key={a.weekID}>
          <RecruitmentInput
            recruitmentData={a.recruitement}
            weekID={a.weekID}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Recruitement;
