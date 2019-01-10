import React, { Component } from "react";
import { allQuestions } from "../../data/questions";
import ToggleQuestion from "./toggleQuestion";
import DateQuestion from "./dateQuestion";
import DropdownQuestion from "./dropdownQuestion";

const DEFAULT_TOGGLE_ANSWER = "no";
const DEFAULT_DATE = new Date();

class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hadBabyYetQ0: null,
      disabilityQ0: null,
      disabilityQ1: null,
      noBabyYetQ0: null,
      noBabyYetQ1: "vaginal",
      babyBornQ0: null,
      babyBornQ1: "vaginal",
      babyBornQ2: null,
      employerQ0: null,
      employerQ1: null,
      employerQ2: null,
      employerQ3: null,
      employerQ4: null
    };
    // this.state = {
    //   hadBabyYetQ0: DEFAULT_TOGGLE_ANSWER,
    //   disabilityQ0: DEFAULT_TOGGLE_ANSWER,
    //   disabilityQ1: DEFAULT_DATE,
    //   noBabyYetQ0: DEFAULT_DATE,
    //   noBabyYetQ1: "vaginal",
    //   babyBornQ0: DEFAULT_DATE,
    //   babyBornQ1: "vaginal",
    //   babyBornQ2: DEFAULT_TOGGLE_ANSWER,
    //   employerQ0: DEFAULT_TOGGLE_ANSWER,
    //   employerQ1: DEFAULT_TOGGLE_ANSWER,
    //   employerQ2: DEFAULT_TOGGLE_ANSWER,
    //   employerQ3: DEFAULT_TOGGLE_ANSWER,
    //   employerQ4: DEFAULT_TOGGLE_ANSWER
    // };
  }
  onToggleClick = (value, name) => {
    console.log("value", value);
    console.log("name", name);
    this.setState({
      [name]: value
    });
  };
  onDateClick = (value, name) => {
    console.log("value", value);
    console.log("name", name);
    this.setState({
      [name]: value
    });
  };
  onDeliveryMethodClick = (value, name) => {
    console.log("value", value);
    console.log("name", name);
    this.setState({
      [name]: value
    });
  };

  questionDisplay = question => {
    // console.warn("question", question);
    // console.log("this.state", this.state);
    if (question.type === "dropdown") {
      return (
        <DropdownQuestion
          question={question.question}
          name={question.name}
          deliveryMethod={this.state[question.name]}
          title={this.state[question.name]} // TODO - make this dynamic
          key={question.name}
          onClick={this.onDeliveryMethodClick}
        />
      );
    } else if (question.type === "date") {
      return (
        <DateQuestion
          question={question.question}
          name={question.name}
          date={this.state[question.name]}
          key={question.name}
          onClick={this.onDateClick}
        />
      );
    }
    return (
      <ToggleQuestion
        question={question.question}
        answer={this.state[question.name]}
        name={question.name}
        key={question.name}
        onClick={this.onToggleClick}
      />
    );
  };

  render() {
    console.warn("render state", this.state);
    // console.log("allQuestions", allQuestions);

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
