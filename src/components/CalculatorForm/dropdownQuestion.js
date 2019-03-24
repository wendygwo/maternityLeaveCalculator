import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class DropdownQuestion extends Component {
  render() {
    const {
      question,
      title,
      selectedDropdownChoice,
      onClick,
      name,
      dropdownChoices
    } = this.props;

    console.log("this.props", this.props);

    return (
      <div>
        {question}{" "}
        <select bsStyle="default" title={title} id={title}>
          {dropdownChoices.map((dropdownChoice, index) => (
            <option
              eventKey={index}
              active={dropdownChoice.value === selectedDropdownChoice}
              onClick={() => onClick(dropdownChoice.value, name)}
            >
              {dropdownChoice.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropdownQuestion;
