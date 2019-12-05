import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import NiceComponent from "./NiceComponent";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <NiceComponent theme="jade" displayC={true}></NiceComponent>
        <NiceComponent theme="golden"></NiceComponent>
        <NiceComponent theme="emerald"></NiceComponent>
        <NiceComponent></NiceComponent>
        <NiceComponent></NiceComponent>
        <NiceComponent displayC={true}></NiceComponent>
      </div>
    );
  }
}
