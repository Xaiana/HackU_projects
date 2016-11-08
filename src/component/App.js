import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animals: [
        {english: "rabbit = Tùzǐ"},
        {english: "turtle = Guī"},
        {english: "butterfly = Húdié"}
      ],
      greetings: [
        {english: "hello = Nǐ hǎo"},
        {english: "goodbye = Zàijiàn"}
      ],
      familyMembers: [
        {english: "sister = mèimei"},
        {english: "older sister = Jiù de mèimei"},
        {english: "little sister = Xiǎo mèi"},
        {english: "brother = Gēgē"},
        {english: "little brother = Xiǎo xiōngdì"},
        {english: "nanny = Bǎomǔ"},
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>{"Learn Mandarin!!!"}</h1>
        <Child animals={this.state.animals} />
        <Child2 greetings={this.state.greetings} />
        <Child3 familyMembers={this.state.familyMembers} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    const animals = this.props.animals.map((animal, i) => {
      return (
          <li key={i}> {animal.english}</li>
      );})
    return (
      <div>
        <h2>Animals</h2>
        <ul>{animals}</ul>
      </div>
    )
  }
}

class Child2 extends React.Component {
  render() {
    const greetings = this.props.greetings.map((greeting, i) => {
      return (
        <li key={i}> {greeting.english}</li>
      );})
    return (
      <div>
        <h2>Greetings</h2>
        <ul>{greetings}</ul>
      </div>
    )
  }
}

class Child3 extends React.Component {
  render() {
    const familyMembers = this.props.familyMembers.map((member, i) => {
      return (
        <li key={i}> {member.english}</li>
      );})
    return (
      <div>
        <h2>Family Members</h2>
        <ul>{familyMembers}</ul>
      </div>
    )
  }
}

export default App
