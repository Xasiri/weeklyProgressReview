import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Card, Button, Container, FormControl, Form } from "react-bootstrap";
import "../../../../Styles/MainReview/MainReview.scss";
import WeekPicker from "./WeekPicker";

const TeamLeader = ({ setTeamLeaderData }) => {
  const [teamLeader, setTeamLeader] = useState("");
  const [weekStart, setWeekStart] = useState("");
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLeaderCode(teamLeader);
  };

  const submitHandler = () => {
    console.log(teamLeader, weekStart);
    if (teamLeader && weekStart) {
      setTeamLeaderData({ teamLeaderCode: teamLeader, weekStart: weekStart });
      history.push("/week");
    }
  };

  return (
    <Container>
      <Card>
        <Card.Header>Enter Team Leader Code and Date</Card.Header>
        <Card.Body>
          <Card.Title>Team Leader Code</Card.Title>
          <Form onSubmit={handleSubmit}>
            <FormControl
              onChange={(e) => setTeamLeader(e.target.value)}
              type="number"
              value={teamLeader}
            />
          </Form>
          <WeekPicker setWeekStart={setWeekStart} />

          <Button variant="primary" onClick={submitHandler}>
            Submit{" "}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TeamLeader;
