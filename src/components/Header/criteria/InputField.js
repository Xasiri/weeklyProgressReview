import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const InputField = () => {
  return (
    <InputGroup>
      <FormControl type="text" />
      <InputGroup.Prepend>
        <InputGroup.Text></InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
  );
};

export default InputField;
