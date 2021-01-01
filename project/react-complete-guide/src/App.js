import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Rahul Vishnu Pol", age: 32 },
      { name: "Pranali Rahul Pol", age: 31 },
      { name: "Aadhya Rahul Pol", age: 1 },
    ],
    otherState: "other state value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Pranali Dagadu Kadam", age: 31 },
        { name: "Aadhya Rahul Pol", age: 1 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Rahul Vishnu Pol", age: 32 },
        { name: event.target.value, age: 31 },
        { name: "Aadhya Rahul Pol", age: 1 },
      ],
    });
  };

  style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      // Render content conditionally javascript way
      // Though it seems preferred I liked previous way cause in that way you are not filling the elements through functions
      // Instead they are available at single place in render function
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler("Rahul Pol")}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p>This is really working!!</p>
        <button style={this.style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {this.state.showPersons ? persons : null}
      </div>
    );
  }
}

export default App;
