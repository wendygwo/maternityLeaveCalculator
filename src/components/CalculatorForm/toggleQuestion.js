import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ToggleQuestion = props => {
  const { question, answer, name, onClick } = props;
  return (
    <div>
      {question}{" "}
      <ButtonGroup>
        <Button
          value="no"
          active={answer === "no"}
          onClick={() => onClick("no", name)}
        >
          No
        </Button>
        <Button
          value="yes"
          active={answer === "yes"}
          onClick={() => onClick("yes", name)}
        >
          Yes
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ToggleQuestion;
