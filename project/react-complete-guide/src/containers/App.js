import React, { Component } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  // note: though we have written state outside here, it is actually placed in the constructor
  // by js and initialized with this.state in constructor
  state = {
    persons: [
      { id: 1, name: "Rahul Vishnu Pol", age: 32 },
      { id: 2, name: "Pranali Rahul Pol", age: 31 },
      { id: 3, name: "Aadhya Rahul Pol", age: 1 },
    ],
    otherState: "other state value",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Pranali Dagadu Kadam", age: 31 },
        { name: "Aadhya Rahul Pol", age: 1 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value,
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  getClassesForCockpit = () => {
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return classes.join(" ");
  };

  render() {
    console.log("[App.js] rendering...");
    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          classes={this.getClassesForCockpit()}
          showPersons={this.state.showPersons}
          click={this.togglePersonsHandler}
        />
        {this.state.showPersons ? (
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
