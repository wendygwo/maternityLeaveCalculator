import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class DropdownQuestion extends Component {
  render() {
    const { key, question, title, deliveryMethod } = this.props;

    return (
      <div>
        {question}
        <DropdownButton bsStyle="default" title={title} key={key}>
          <MenuItem eventKey="1" active={deliveryMethod === "vaginal"}>
            Vaginal
          </MenuItem>
          <MenuItem eventKey="2" active={deliveryMethod === "c-section"}>
            C-section
          </MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default DropdownQuestion;
