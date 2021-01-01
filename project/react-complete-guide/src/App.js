import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Rahul Vishnu Pol", age: 32 },
      { id: 2, name: "Pranali Rahul Pol", age: 31 },
      { id: 3, name: "Aadhya Rahul Pol", age: 1 },
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler}
                changed={(e) => this.nameChangedHandler(e, person.id)}
              />
            );
          })}
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
