import React, { Component, Fragment } from "react";

class LeaveDiagram extends Component {
  render() {
    const {
      dueDate,
      firstDayOfDisability,
      endOfStandardDisability,
      endOfWageReplacement,
      endOfJobProtection
    } = this.props;

    let disabilityPreBirthDisplayBlocks;

    if (dueDate !== null) {
      const numWeeksDisability =
        Math.round(
          ((dueDate - firstDayOfDisability) * 2) / (1000 * 60 * 60 * 24 * 7)
        ) / 2; // TODO - figure out how to represent half a week

      console.log("numWeeksDisability", numWeeksDisability);

      const disabilityBlocks = Array.from(new Array(numWeeksDisability).keys());

      console.log("disabilityBlocks", disabilityBlocks);

      disabilityPreBirthDisplayBlocks = disabilityBlocks.map(weekNum => (
        <span className="disability-week">{weekNum + 1}</span>
      ));
    }

    return (
      <Fragment>
        {dueDate !== null && (
          <Fragment>
            <div className="disability-prebirth-display-blocks">
              {disabilityPreBirthDisplayBlocks}
            </div>
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
              End of job protection date: {endOfJobProtection.toDateString()}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default LeaveDiagram;
