import React from "react";
import { Row, Col } from "react-bootstrap";
import ActionSelect from "./ActionSelect";
import "../../../Styles/MainCard/MainCard.scss";

const Action = ({ weeksForReview, dispatch, leaderCode }) => {
  return (
    <>
      <Row className="margin-component">
        <Col className="title-text">Action</Col>
      </Row>
      <Row className="mb-3">
        <Col key={weeksForReview.weekID} className="mr-3">
          <ActionSelect
            dispatch={dispatch}
            action={weeksForReview.action}
            weekID={weeksForReview.weekID}
            leaderCode={leaderCode}
            approval={weeksForReview.approval}
          />
        </Col>
      </Row>
    </>
  );
};

export default Action;
