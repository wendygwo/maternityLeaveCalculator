import React, { Component, Fragment } from "react";

class LeaveDiagram extends Component {
  render() {
    const { dueDate, numPostBirthDisabilityWeeks } = this.props;
    const STANDARD_NUM_DAYS_DISABILITY_AFTER_DUE_DATE =
      7 * numPostBirthDisabilityWeeks;
    const MAX_NUM_DAYS_DISABILITY_BEFORE_DUE_DATE = 7 * 4;
    const NUM_DAYS_WAGE_REPLACEMENT_AFTER_BIRTH = 7 * 6;
    const NUM_DAYS_JOB_PROTECTION_AFTER_BIRTH = 7 * 12;

    let firstDayOfDisability,
      endOfStandardDisability,
      endOfWageReplacement,
      endOfJobDescription;
    if (dueDate !== null) {
      firstDayOfDisability = new Date(dueDate);
      firstDayOfDisability.setDate(
        firstDayOfDisability.getDate() - MAX_NUM_DAYS_DISABILITY_BEFORE_DUE_DATE
      );

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

      endOfJobDescription = new Date(endOfStandardDisability);
      endOfJobDescription.setDate(
        endOfJobDescription.getDate() + NUM_DAYS_JOB_PROTECTION_AFTER_BIRTH
      );

      console.log("dueDate.toDateString()", dueDate.toDateString());
      console.log("firstDayOfDisability", firstDayOfDisability.toDateString());
      console.log(
        "endOfStandardDisability",
        endOfStandardDisability.toDateString()
      );
    }

    //   <div>
    //   First day of disability: {(dueDate.getDate() - 12).toDateString()}
    // </div>

    return (
      <Fragment>
        {dueDate !== null && (
          <Fragment>
            <div>
              First day of disability date:{" "}
              {firstDayOfDisability.toDateString()}
            </div>
            <div>Due date: {dueDate.toDateString()}</div>
            <div>
              End of disability date: {endOfStandardDisability.toDateString()}
            </div>
            <div>
              End of wage replacement date:{" "}
              {endOfWageReplacement.toDateString()}
            </div>
            <div>
              End of job protection date: {endOfJobDescription.toDateString()}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default LeaveDiagram;
