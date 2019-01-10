import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateQuestion extends Component {
  handleChange = date => {
    // this.setState({
    //   startDate: date
    // });
    console.log("date", date);
  };

  render() {
    const { key, question, date } = this.props;
    return (
      <div key={key}>
        {question}
        <DatePicker selected={date} onChange={this.handleChange} />
      </div>
    );
  }
}

export default DateQuestion;
