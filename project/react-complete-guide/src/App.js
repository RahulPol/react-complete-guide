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
        <button onClick={this.switchNameHandler}>Switch Name</button>

        {/* {this.state.persons.map((person, index) => {
          return <Person key={index} name={person.name} age={person.age} />;
        })} */}

        {/* It is possible to not only pass data but also methods to your child components
        These methods can then update the state in parent component. This is very important
        pattern which allows your child component to update parent components state */}

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // passing switchNameHandler to child component which upon click of child component will update
          // parent component's state
          click={this.switchNameHandler}
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
