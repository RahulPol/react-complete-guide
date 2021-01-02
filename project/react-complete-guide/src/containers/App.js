import React, { Component } from "react";

import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

// Component creation life cycle
// 1. constructor(props)
//    - use: for setting up state
//    - DON'T cause side-effects
// 2. static getDerivedStateFromProps(props, state)
//    - use: for sync state to props
//    - DON'T cause side-effects
// 3. render()
//    - use: for preparing and structuring your jsx code
// 4. Render Child Component
// 5. componentDidMount()
//    - use: to cause side-effects
//    - DON'T update state. (triggers re-render)

// Component update life cycle
// 1. static getDerivedStateFromProps(props,state)
//    - use: for sync state to props
//    - DON'T cause side-effects
// 2. shouldComponentUpdate(nextProps, nextState)
//    - decide whether component should update
//    - use: for performance improvement by deciding whether to continue component update or not
//    - return false wil stop component update
//    - DON'T cause side-effects
// 3. render()
//    - use: for preparing and structuring your jsx code
// 4. Update child component props
// 5. static getSnapshotBeforeUpdate(prevProps, prevState)
//    - Runs before React applies the result of render to the document, and returns an object to be given to componentDidUpdate
//    - use: for saving things such as scroll position before render causes changes to it.
//    - returns snapshot to be consumed by componentDidUpdate
//    - DON'T cause side-effect
// 6. componentDidUpdate(prevProps, prevState, snapshot)
//    - use: to cause side-effects
//    - Called immediately after updating occurs. Not called for the initial render.
//    - DON'T update state.(triggers re-render)

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
    showPersons: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
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
