import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PendingInput from "./PendingInput";

const PendingClearence = ({ weeksForReview }) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <Row className="my-3">
      <Col md={4} lg={2} className="main-review__col1">
        Pending Clearence
      </Col>

      {weeksForReview.map((a) => (
        <Col key={a.weekID}>
          <PendingInput pendingData={a.pendingClearence} />
        </Col>
      ))}
    </Row>
  );
};

export default PendingClearence;
