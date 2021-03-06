import React, { useState } from "react";
import { FormControl, InputGroup, Col } from "react-bootstrap";
import "../../../../Styles/Quotation/Quotation.scss";
const QuaoteInput = ({ quotationsData, weekID }) => {
  const [target, setTarget] = useState("25");
  const [actual, setActual] = useState("30");

  let calculatedPercentage = Math.round((actual / target) * 100);

  return (
    <Col
      md={11}
      xs={12}
      sm={12}
      className={` Quotation_box ${
        calculatedPercentage > "99"
          ? "Quotation_Green"
          : calculatedPercentage <= "99" && calculatedPercentage > "75"
          ? "Quotation_Amber"
          : "Quotation_Red"
      }`}
    >
      <p className="Quotation_Percentage">{calculatedPercentage}%</p>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup className="Quotation_Input">
            <InputGroup.Prepend>
              <InputGroup.Text className="Quotation_Append">T</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="Quotation_Center"
              size="sm"
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="Quotation_Input pl-1">
            <InputGroup.Prepend>
              <InputGroup.Text className="Quotation_Append">A</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="Quotation_Center"
              size="sm"
              type="number"
              value={actual}
              onChange={(e) => setActual(e.target.value)}
            />
          </InputGroup>
        </InputGroup.Prepend>
      </InputGroup>
    </Col>
  );
};

export default QuaoteInput;
