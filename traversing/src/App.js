import React, { Component } from "react";
import GenericComponent from "./GenericComponent";
import { randomInt } from "./Utils";
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
    return (
      <div>
        <button onClick={() => this.update()}>Broadcast random value to all boxes</button>
        <GenericComponent type="A" value={this.state.value}>
          <GenericComponent type="B" value={this.state.value}>
            <GenericComponent type="C" value={this.state.value}></GenericComponent>
            <GenericComponent type="C" value={this.state.value}></GenericComponent>
          </GenericComponent>
        </GenericComponent>
      </div>
    );
  }
}
