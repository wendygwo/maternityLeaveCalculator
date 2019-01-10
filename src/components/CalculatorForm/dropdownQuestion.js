import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class DropdownQuestion extends Component {
  render() {
    const { question, title, deliveryMethod, onClick, name } = this.props;

    return (
      <div>
        {question}
        <DropdownButton bsStyle="default" title={title}>
          <MenuItem
            eventKey="1"
            active={deliveryMethod === "vaginal"}
            onClick={() => onClick("vaginal", name)}
          >
            Vaginal
          </MenuItem>
          <MenuItem
            eventKey="2"
            active={deliveryMethod === "c-section"}
            onClick={() => onClick("c-section", name)}
          >
            C-section
          </MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default DropdownQuestion;
