import React, { useState } from "react";
import { FormControl, InputGroup, Col } from "react-bootstrap";
import "./quotation.css";

const QuaoteInput = ({ quotationsData, weekID }) => {
  const [target, setTarget] = useState("25");
  const [actual, setActual] = useState("30");

  let calculatedPercentage = Math.round((actual / target) * 100);

  return (
    <Col
      className={
        calculatedPercentage > "99"
          ? "Quotation_Green"
          : calculatedPercentage <= "99" && calculatedPercentage > "75"
          ? "Quotation_Amber"
          : "Quotation_Red"
      }
    >
      <p className="Quotation_Percentage">{calculatedPercentage}%</p>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup className="Quotation_Input">
            <FormControl
              size="sm"
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            <InputGroup.Prepend>
              <InputGroup.Text className="Quotation_Append">T</InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          <InputGroup className="Quotation_Input">
            <FormControl
              size="sm"
              type="number"
              value={actual}
              onChange={(e) => setActual(e.target.value)}
            />
            <InputGroup.Prepend>
              <InputGroup.Text className="Quotation_Append">A</InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </InputGroup.Prepend>
      </InputGroup>
    </Col>
  );
};

export default QuaoteInput;
