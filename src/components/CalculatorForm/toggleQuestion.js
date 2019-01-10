import React, { Fragment } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ToggleQuestion = props => {
  console.log("props", props);
  return (
    <div key={props.key}>
      {props.question}
      <ButtonGroup>
        <Button value="yes" active={props.answer === "yes"}>
          Yes
        </Button>{" "}
        <Button value="no" active={props.answer === "no"}>
          No
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ToggleQuestion;
