import React from "react";
import { Row, Col } from "react-bootstrap";
import ActionSelect from "./ActionSelect";

const Action = ({ weeksForReview, dispatch, leaderCode }) => {
  return (
    <Row className="mb-5">
      <Col md={4} lg={2} className="main-review__col1">
        Action
      </Col>

      {weeksForReview.map((a) => (
        <Col key={a.weekID}>
          <ActionSelect
            dispatch={dispatch}
            action={a.action}
            weekID={a.weekID}
            leaderCode={leaderCode}
            approval={a.approval}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Action;
