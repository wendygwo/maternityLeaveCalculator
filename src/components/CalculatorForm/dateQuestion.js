import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateQuestion extends Component {
  render() {
    const { question, date, name, onClick } = this.props;
    // console.log("question", question);
    return (
      <div>
        {question}
        <DatePicker
          selected={date}
          onChange={date => onClick(date, name)}
          placeholderText="Choose a date"
        />
      </div>
    );
  }
}

export default DateQuestion;
