import React, { Component } from "react";
// import "./App.css";
import { PageHeader } from "react-bootstrap";
import CalculatorForm from "./components/CalculatorForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader className="App-header">
          California Maternity Leave Calculator
        </PageHeader>
        <CalculatorForm />
      </div>
    );
  }
}

export default App;
