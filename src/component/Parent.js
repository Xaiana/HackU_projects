import React, { Component } from 'react';

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello World',
      pTag: 'Im the Child',
    }
    this.letsConsoleLog = this.letsConsoleLog.bind(this)
  }

  letsConsoleLog() {
    console.log(this.state.pTag, this)
  }

  render() {
    return (
      <div>
        <h1 onClick={this.letsConsoleLog}>{this.state.title}</h1>
        <Child thisIsAMethodProp={this.letsConsoleLog} thisIsAprop={this.state.pTag} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return(
      <div>
        <p>{this.props.thisIsAprop}</p>
        <button onClick={this.props.thisIsAMethodProp}>Click me</button>
      </div>
    );
  }
}

export default Parent;
