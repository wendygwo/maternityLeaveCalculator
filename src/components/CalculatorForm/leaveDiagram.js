import React, { Component, Fragment } from "react";
import { Row } from "react-bootstrap";

class LeaveDiagram extends Component {
  render() {
    const {
      dueDate,
      firstDayOfDisability,
      endOfStandardDisability,
      endOfWageReplacement,
      endOfJobProtection,
      babyDeliveryMethod,
      numWeeksJobProtectionAfterDisability
    } = this.props;

    console.log("<<<<babyDeliveryMethod", babyDeliveryMethod);

    // Pre-birth disability blocks
    let disabilityPreBirthDisplayBlocks,
      disabilityPostBirthDisplayBlocks,
      crfaBabyBondingDisplayBlocks;

    let numWeeksDisability = 0;
    if (dueDate !== null) {
      numWeeksDisability =
        Math.round(
          ((dueDate - firstDayOfDisability) * 2) / (1000 * 60 * 60 * 24 * 7)
        ) / 2; // TODO - figure out how to represent half a week

      console.log("numWeeksDisability", numWeeksDisability);

      const disabilityBlocks = Array.from(new Array(numWeeksDisability).keys());

      console.log("disabilityBlocks", disabilityBlocks);

      disabilityPreBirthDisplayBlocks = disabilityBlocks.map(weekNum => (
        <div className="disability-week">{weekNum + 1}</div>
      ));
    }

    // Post-birth disability blocks
    const numWeeksDisabilityAfter = babyDeliveryMethod === "vaginal" ? 6 : 8;
    const disabilityBlocksAfterBirth = Array.from(
      new Array(numWeeksDisabilityAfter).keys()
    );

    disabilityPostBirthDisplayBlocks = disabilityBlocksAfterBirth.map(
      weekNum => (
        <div className="disability-week-post-birth">
          {weekNum + 1 + numWeeksDisability}
        </div>
      )
    );

    // CRFA blocks
    const crfaBabyBondingBlocks = Array.from(
      new Array(numWeeksJobProtectionAfterDisability).keys()
    );
    crfaBabyBondingDisplayBlocks = crfaBabyBondingBlocks.map(weekNum => (
      <div className="crfa-baby-bonding-weeks">
        {weekNum + 1 + numWeeksDisability + numWeeksDisabilityAfter}
      </div>
    ));

    return (
      <Fragment>
        {dueDate !== null && (
          <Fragment>
            <h3 className="leave-diagram-header">
              Typical uncomplicated birth
            </h3>
            <div className="entire-diagram">
              <div
                className="disability-prebirth-display-blocks"
                data-due-date={`Due date: ${dueDate.toLocaleDateString()}`}
              >
                <div className="pdl-label">PDL</div>
                <div className="fmla-label">FMLA</div>
                {disabilityPreBirthDisplayBlocks}
              </div>
              <div
                className="disability-postbirth-display-blocks"
                data-end-of-disability-date={`End of disability: ${endOfStandardDisability.toLocaleDateString()}`}
              >
                <div className="pdl-label">PDL</div>
                <div className="fmla-label">FMLA</div>
                {disabilityPostBirthDisplayBlocks}
              </div>
              <div
                className="crfa-baby-bonding-display-blocks"
                data-end-of-job-protection-date={`End of CRFA: ${endOfJobProtection.toLocaleDateString()}`}
              >
                <div className="crfa-label">CRFA</div>
                <div
                  className="fmla-label-concurrent-with-crfa"
                  data-num-weeks-fmla-left={
                    ((12 - numWeeksDisabilityAfter - numWeeksDisability) *
                      100) /
                    12
                  }
                  style={{
                    "--fmla-custom-property": `${((12 -
                      numWeeksDisabilityAfter -
                      numWeeksDisability) *
                      100) /
                      12}%`
                  }}
                >
                  FMLA
                </div>
                {crfaBabyBondingDisplayBlocks}
              </div>
            </div>
            <div>
              <h3>Summary of important dates</h3>
              <div>
                First day of disability date:{" "}
                {firstDayOfDisability.toLocaleDateString()}
              </div>
              <div>Due date: {dueDate.toLocaleDateString()}</div>
              <div>
                End of disability date:{" "}
                {endOfStandardDisability.toLocaleDateString()}
              </div>
              <div>
                End of wage replacement date:{" "}
                {endOfWageReplacement.toLocaleDateString()}
              </div>
              <div>
                End of job protection date:{" "}
                {endOfJobProtection.toLocaleDateString()}
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default LeaveDiagram;
