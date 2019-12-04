import React, { Component } from "react";
import { addSeparators } from "./Formatters";

export default class GenericComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  changeValue() {
    this.setState({
      value: 100 + this.state.value
    });
  }

  render() {
    return (
      <div className={`box component${this.props.type}`}>
        <h3>
          component {this.props.type} (original received value was {addSeparators(this.props.value)}
          )
        </h3>
        <h4>
          {addSeparators(this.props.value)} (increased by {addSeparators(this.state.value)}) ={" "}
          {addSeparators(this.props.value + this.state.value)}
        </h4>
        <button onClick={() => this.changeValue()}>Increase local value</button>
        {this.props.children}
      </div>
    );
  }
}
