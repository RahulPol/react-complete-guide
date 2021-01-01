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
    "background-color": "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p>This is really working!!</p>
        <button
          style={this.style}
          onClick={this.switchNameHandler.bind(this, "Rahul V. Pol")}
        >
          Switch Name
        </button>

        {/* Ok! I have passed the method reference that will update the state of
        parent component but the method reference takes static name what if I
        want to update dynamically from my child component */}

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
}

export default App;
