import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { PageHeader } from "react-bootstrap";
import { allQuestions } from "../../data/questions";
import ToggleQuestion from "./toggleQuestion";
import DateQuestion from "./dateQuestion";
import DropdownQuestion from "./dropdownQuestion";

const DEFAULT_TOGGLE_ANSWER = "no";
const DEFAULT_DATE = new Date();

class CalculatorForm extends Component {
  questionDisplay = question => {
    if (question.type === "dropdown") {
      return (
        <DropdownQuestion
          question={question.question}
          title="Select" // TODO - make this dynamic
          key={question.name}
        />
      );
    } else if (question.type === "date") {
      return (
        <DateQuestion
          question={question.question}
          date={DEFAULT_DATE}
          key={question.name}
        />
      );
    }
    return (
      <ToggleQuestion
        question={question.question}
        answer={DEFAULT_TOGGLE_ANSWER}
        key={question.name}
      />
    );
  };
  render() {
    console.log("allQuestions", allQuestions);
    // const {question, toggle}
    const {
      firstQuestion,
      disabilityQuestions,
      noBabyYetQuestions,
      babyAlreadyBornQuestions,
      employerRelatedQuestions
    } = allQuestions;
    return (
      <form>
        <h3>Initial question</h3>
        {firstQuestion.map(question => this.questionDisplay(question))}
        <h3>Disability questions</h3>
        {disabilityQuestions.map(question => this.questionDisplay(question))}
        <h3>Delivery questions</h3>
        {noBabyYetQuestions.map(question => this.questionDisplay(question))}
        <h3>Birth questions</h3>
        {babyAlreadyBornQuestions.map(question =>
          this.questionDisplay(question)
        )}
        <h3>Employer questions</h3>
        {employerRelatedQuestions.map(question =>
          this.questionDisplay(question)
        )}
      </form>
    );
  }
}

export default CalculatorForm;

// <ToggleQuestion
//           question={question.question}
//           answer={DEFAULT_TOGGLE_ANSWER}
//         />
//         )
