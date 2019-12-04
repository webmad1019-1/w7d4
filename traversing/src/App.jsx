import React, { Component } from "react";
import GenericComponent from "./GenericComponent";
import { randomInt } from "./Utils";
import "./reset.css";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }

  update() {
    this.setState({
      value: randomInt(100, 10000)
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={() => this.update()}>
          Broadcast random value to all boxes
        </button>
        <GenericComponent type="A" value={value}>
          <GenericComponent type="B" value={value}>
            <GenericComponent type="C" value={value} />
            <GenericComponent type="C" value={value} />
          </GenericComponent>
        </GenericComponent>
      </div>
    );
  }
}
