import React, { Component } from "react";
import addSeparators from "./Formatters";

export default class GenericComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      toChildren: 0
    };
  }

  changeValue() {
    const { value } = this.state;

    this.setState({
      value: 100 + value
    });
  }

  sendToChildren(e) {
    this.props.onChange(e);
    this.setState({
      toChildren: e.target.value
    });
  }

  render() {
    const { type } = this.props;
    const { value: propsValue } = this.props;
    const { value: stateValue } = this.state;
    const { children } = this.props;

    return (
      <div className={`box component${type}`}>
        <h3>
          component {type} (original received value was {addSeparators(propsValue)})
        </h3>
        <h4>
          {addSeparators(propsValue)} (increased by {addSeparators(stateValue)}) ={" "}
          {addSeparators(propsValue + stateValue)}
        </h4>
        <h4>Value sent by the parent: {this.props.myValue}</h4>
        <input
          type="text"
          placeholder="Communicate to children"
          value={this.state.toChildren}
          onChange={e => this.sendToChildren(e)}
        />
        <button type="button" onClick={() => this.changeValue()}>
          Increase local value
        </button>
        {children}
      </div>
    );
  }
}
