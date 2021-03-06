import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PendingInput from "./PendingInput";
import "../../../../Styles/MainCard/MainCard.scss";

const PendingClearence = ({ weeksForReview }) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Row className="margin-component">
        <Col className="title-text ">Pending Clearence</Col>
      </Row>
      <Row>
        <Col key={weeksForReview.weekID}>
          <PendingInput pendingData={weeksForReview.pendingClearence} />
        </Col>
      </Row>
    </>
  );
};

export default PendingClearence;
