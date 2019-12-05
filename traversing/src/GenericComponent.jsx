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

  increaseLocalValue() {
    const { value } = this.state;

    this.setState({
      value: 100 + value
    });
  }

  sendToChildren(e) {
    if (!this.props.onChange) throw new Error("onChange is missing");

    this.props.onChange(e.target.value);
    this.setState({
      toChildren: e.target.value
    });
  }

  render() {
    const { type } = this.props;
    // this value is injected by another actor to this component
    const { value: propsValue } = this.props;
    const { value: stateValue } = this.state;
    const { children } = this.props;

    return (
      <div className={`box component${type}`}>
        <h3>
          <span>component &quot;{type}&quot;</span>
        </h3>
        <h4>
          <strong>{addSeparators(propsValue)}</strong> (sent by top level then increased by local{" "}
          {addSeparators(stateValue)}) ={" "}
          <span className="result">{addSeparators(propsValue + stateValue)}</span>
        </h4>
        {this.props.myValue && (
          <h4>
            <strong>{+this.props.myValue}</strong> (sent by another box then increased by{" "}
            {stateValue}) ={" "}
            <span className="result">{addSeparators(+this.props.myValue + stateValue)}</span>
          </h4>
        )}
        <input
          type="text"
          placeholder="Communicate to children"
          value={this.state.toChildren}
          onChange={e => this.sendToChildren(e)}
        />
        <button type="button" onClick={() => this.increaseLocalValue()}>
          Increase value of this box
        </button>
        {this.props.onSentToParent && (
          <button type="button" onClick={() => this.props.onSentToParent(this.state.toChildren)}>
            Send current value to parent
          </button>
        )}
        {children}
      </div>
    );
  }
}
