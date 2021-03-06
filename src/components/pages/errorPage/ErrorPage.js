import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Card>
      <Card.Header>Team Leader Data Cannot be Found</Card.Header>
      <Card.Body>
        <Card.Title>404</Card.Title>
        <Card.Text>Please enter valid Team Leader code</Card.Text>
        <Link to="/">
          <Button variant="primary">Home Page</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ErrorPage;
