import React, { Component, Fragment } from "react";
import { isNull } from "lodash";
import { allQuestions } from "../../data/questions";
import ToggleQuestion from "./toggleQuestion";
import DateQuestion from "./dateQuestion";
import DropdownQuestion from "./dropdownQuestion";
import LeaveDiagram from "./leaveDiagram";

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
      babyBornQ1: null,
      babyBornQ2: "vaginal",
      babyBornQ3: null,
      employerQ0: null,
      employerQ1: null,
      employerQ2: null,
      employerQ3: null,
      employerQ4: null
    };
  }
  onToggleClick = (value, name) => {
    // console.log("value", value);
    // console.log("name", name);
    this.setState({
      [name]: value
    });
  };
  onDateClick = (value, name) => {
    // console.log("value", value);
    // console.log("name", name);
    this.setState({
      [name]: value
    });
  };
  onDeliveryMethodClick = (value, name) => {
    // console.log("value", value);
    // console.log("name", name);
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

  restOfForm = () => {
    const {
      disabilityQuestions,
      noBabyYetQuestions,
      babyAlreadyBornQuestions,
      employerRelatedQuestions
    } = allQuestions;
    return (
      <Fragment>
        {this.state.hadBabyYetQ0 === "no" && (
          <Fragment>
            <h3>Delivery questions</h3>
            {noBabyYetQuestions.map(question => this.questionDisplay(question))}
          </Fragment>
        )}

        {this.state.hadBabyYetQ0 === "no" && (
          <Fragment>
            <h3>Disability questions</h3>
            {disabilityQuestions.map(question =>
              this.questionDisplay(question)
            )}
          </Fragment>
        )}

        {this.state.hadBabyYetQ0 === "yes" && (
          <Fragment>
            <h3>Birth questions</h3>
            {babyAlreadyBornQuestions.map(question =>
              this.questionDisplay(question)
            )}
          </Fragment>
        )}

        <h3>Employer questions</h3>
        {employerRelatedQuestions.map(question =>
          this.questionDisplay(question)
        )}
      </Fragment>
    );
  };

  getLeaveDiagram = () => {
    const dueDate = this.state.noBabyYetQ0;

    const MAX_NUM_WEEKS_DISABILITY_BEFORE_DUE_DATE = 4;
    const NUM_POST_BIRTH_DISABILITY_WEEKS =
      this.state.noBabyYetQ1 === "vaginal" ? 6 : 8;
    const NUM_WEEKS_JOB_PROTECTION_AFTER_DISABILITY = 12;
    const NUM_WEEKS_WAGE_REPLACEMENT_AFTER_BIRTH = 6;

    const STANDARD_NUM_DAYS_DISABILITY_AFTER_DUE_DATE =
      7 * NUM_POST_BIRTH_DISABILITY_WEEKS;
    const MAX_NUM_DAYS_DISABILITY_BEFORE_DUE_DATE =
      7 * MAX_NUM_WEEKS_DISABILITY_BEFORE_DUE_DATE;
    const NUM_DAYS_WAGE_REPLACEMENT_AFTER_BIRTH =
      7 * NUM_WEEKS_WAGE_REPLACEMENT_AFTER_BIRTH;
    const NUM_DAYS_JOB_PROTECTION_AFTER_DISABILITY =
      7 * NUM_WEEKS_JOB_PROTECTION_AFTER_DISABILITY;

    let firstDayOfDisability,
      endOfStandardDisability,
      endOfWageReplacement,
      endOfJobProtection;
    if (dueDate !== null) {
      firstDayOfDisability = new Date(dueDate);

      if (
        this.state.disabilityQ1 === null ||
        this.state.disabilityQ0 === "no"
      ) {
        console.log("disability start date - null", this.state.disabilityQ1);
        firstDayOfDisability.setDate(
          firstDayOfDisability.getDate() -
            MAX_NUM_DAYS_DISABILITY_BEFORE_DUE_DATE
        );
      } else {
        console.log("disability start date", this.state.disabilityQ1);
        firstDayOfDisability = this.state.disabilityQ1;
      }

      endOfStandardDisability = new Date(dueDate);
      endOfStandardDisability.setDate(
        endOfStandardDisability.getDate() +
          STANDARD_NUM_DAYS_DISABILITY_AFTER_DUE_DATE -
          1
      );

      endOfWageReplacement = new Date(endOfStandardDisability);
      endOfWageReplacement.setDate(
        endOfWageReplacement.getDate() + NUM_DAYS_WAGE_REPLACEMENT_AFTER_BIRTH
      );

      endOfJobProtection = new Date(endOfStandardDisability);
      endOfJobProtection.setDate(
        endOfJobProtection.getDate() + NUM_DAYS_JOB_PROTECTION_AFTER_DISABILITY
      );

      console.log("dueDate.toDateString()", dueDate.toDateString());
      console.log("firstDayOfDisability", firstDayOfDisability.toDateString());
      console.log(
        "endOfStandardDisability",
        endOfStandardDisability.toDateString()
      );
      console.log(
        "numWeeksBetweenDisabilityStartAndDueDate",
        Math.round(
          ((dueDate - firstDayOfDisability) * 2) / (1000 * 60 * 60 * 24 * 7)
        ) / 2
      );
    }

    return (
      <LeaveDiagram
        firstDayOfDisability={firstDayOfDisability}
        dueDate={dueDate}
        endOfStandardDisability={endOfStandardDisability}
        endOfWageReplacement={endOfWageReplacement}
        endOfJobProtection={endOfJobProtection}
        babyDeliveryMethod={this.state.noBabyYetQ1}
        numWeeksJobProtectionAfterDisability={
          NUM_WEEKS_JOB_PROTECTION_AFTER_DISABILITY
        }
      />
    );
  };

  render() {
    console.warn("render state", this.state);
    // console.log("allQuestions", allQuestions);

    const { firstQuestion } = allQuestions;
    return (
      <Fragment>
        {this.getLeaveDiagram()}
        <form>
          <h3>Initial question</h3>
          {firstQuestion.map(question => this.questionDisplay(question))}

          {this.state.hadBabyYetQ0 !== null && this.restOfForm()}
        </form>
      </Fragment>
    );
  }
}

export default CalculatorForm;
