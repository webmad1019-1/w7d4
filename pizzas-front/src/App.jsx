import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import PizzaDisplayer from "./PizzaDisplayer";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <PizzaDisplayer></PizzaDisplayer>
      </div>
    );
  }
}
