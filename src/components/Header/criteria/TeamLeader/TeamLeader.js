import React, { useState } from "react";
import { Col, FormControl, Form } from "react-bootstrap";
import "../../../../Styles/MainReview/MainReview.scss";

const TeamLeader = ({ setLeaderCode }) => {
  const [teamLeader, setTeamLeader] = useState("01");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLeaderCode(teamLeader);
  };

  return (
    <>
      <Col className="main-review__team">Team Leader Code</Col>
      <Form onSubmit={handleSubmit}>
        <FormControl
          className="text-center"
          onChange={(e) => setTeamLeader(e.target.value)}
          value={teamLeader}
        />
      </Form>
    </>
  );
};

export default TeamLeader;
