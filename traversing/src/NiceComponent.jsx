import React, { Component } from "react";
import GenericComponent from "./GenericComponent";
import { randomInt } from "./Utils";

export default class NiceComponent extends Component {
  constructor() {
    super();
    this.state = {
      genericValueForAll: 0,
      values: {
        a: null,
        b: null,
        c: null
      }
    };
  }

  updateGenericValueForAll() {
    this.setState({
      ...this.state,
      genericValueForAll: randomInt(100, 10000)
    });
  }

  updateValue(value, type) {
    // debugger;
    let obj = { ...this.state, values: { ...this.state.values, [type]: value } };
    // debugger;

    this.setState(obj);
  }

  render() {
    const { genericValueForAll, values } = this.state;

    return (
      <div className={this.props.theme}>
        <button type="button" onClick={() => this.updateGenericValueForAll()}>
          Broadcast random value to all boxes
        </button>
        <GenericComponent
          type="A"
          value={genericValueForAll}
          myValue={values.a}
          onChange={val => this.updateValue(val, "b")}
        >
          <GenericComponent
            type="B"
            value={genericValueForAll}
            myValue={values.b}
            onChange={val => this.updateValue(val, "c")}
            onSentToParent={val => this.updateValue(val, "a")}
          >
            {this.props.displayC && (
              <div>
                <GenericComponent
                  type="C"
                  value={genericValueForAll}
                  myValue={+values.c + Math.PI}
                  onChange={val => this.updateValue(val, "c")}
                  onSentToParent={val => this.updateValue(val, "b")}
                />
                <GenericComponent
                  type="C"
                  value={genericValueForAll}
                  myValue={values.c}
                  onChange={val => this.updateValue(val, "c")}
                  onSentToParent={val => this.updateValue(val, "b")}
                />
                <GenericComponent
                  type="C"
                  value={genericValueForAll}
                  myValue={values.c}
                  onChange={val => this.updateValue(val, "c")}
                  onSentToParent={val => this.updateValue(val, "b")}
                />
                <GenericComponent
                  type="C"
                  value={genericValueForAll}
                  myValue={values.c}
                  onChange={val => this.updateValue(val, "c")}
                  onSentToParent={val => this.updateValue(val, "b")}
                />
                <GenericComponent
                  type="C"
                  value={genericValueForAll}
                  myValue={values.c}
                  onChange={val => this.updateValue(val, "c")}
                  onSentToParent={val => this.updateValue(val, "b")}
                />
              </div>
            )}
          </GenericComponent>
        </GenericComponent>
      </div>
    );
  }
}
