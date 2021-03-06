import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  Card,
  Button,
  Container,
  FormControl,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "../../../../Styles/MainReview/MainReview.scss";
import "../../../../Styles/Teamleader/TeamLeader.scss";
import WeekPicker from "./WeekPicker";

const TeamLeader = ({ setTeamLeaderData }) => {
  const [teamLeader, setTeamLeader] = useState("");
  const [weekStart, setWeekStart] = useState("");
  const [isInValid, setIsInValid] = useState(false);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitHandler = () => {
    console.log(teamLeader, weekStart);
    if (teamLeader && weekStart) {
      setTeamLeaderData({ teamLeaderCode: teamLeader, weekStart: weekStart });
      setIsInValid(false);
      history.push("/week");
    } else setIsInValid(true);
  };

  return (
    <Container className="TeamLeader-Container">
      <Card style={{ width: "24rem" }}>
        <Card.Header>Enter Team Leader Code and Date</Card.Header>
        <Card.Body>
          <Card.Title>Team Leader Code</Card.Title>
          <Form className="TeamLeader-Form" onSubmit={handleSubmit}>
            <FormControl
              onChange={(e) => setTeamLeader(e.target.value)}
              type="number"
              value={teamLeader}
            />
          </Form>
          <Card.Title>Select Start Week</Card.Title>

          <WeekPicker setWeekStart={setWeekStart} />
          {isInValid && (
            <Row className="TeamLeader-InValid">
              * Please Enter a Code and a Date
            </Row>
          )}

          <Button
            className="TeamLeader-Submit"
            variant="outline-primary"
            onClick={submitHandler}
          >
            Submit{" "}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TeamLeader;
