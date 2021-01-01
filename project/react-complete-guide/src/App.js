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

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[1] = { name: "Pranali Dagadu Kadam", age: 31 },
    // Note: the set state does not overwrite the state instead it will update only persons array
    // in your state, keeping the otherState intact.
    // This is not the case with functional component's useState
    this.setState({
      persons: [
        { name: "Rahul Vishnu Pol", age: 32 },
        { name: "Pranali Dagadu Kadam", age: 31 },
        { name: "Aadhya Rahul Pol", age: 1 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p>This is really working!!</p>

        {/* In order to add click handler use onClick and remember not to use
        parenthesis or the function will be executed automatically
        Also, understand that changing state of app now updates props of Person component 
        which results in updating the Person component as well
         */}
        <button onClick={this.switchNameHandler}>Switch Name</button>

        {this.state.persons.map((person, index) => {
          return <Person key={index} name={person.name} age={person.age} />;
        })}
      </div>
    );
  }
}

export default App;
