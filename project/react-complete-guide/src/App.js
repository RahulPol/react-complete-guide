import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  // Previously, we have seen props property, which allows you to pass data to component from parent component.
  // Like props there is another special property of react which is state.State basically maintains internal
  // state of the component.
  // And changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser

  // state  simply is a property of the component class, you have to call it state  though - the name is not optional.
  // You can then access it via this.state in your class JSX code
  // Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state.
  // The difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from outside!
  state = {
    persons: [
      { name: "Rahul Vishnu Pol", age: 32 },
      { name: "Pranali Rahul Pol", age: 31 },
      { name: "Aadhya Rahul Pol", age: 1 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p>This is really working!!</p>

        {this.state.persons.map((person, index) => {
          return <Person key={index} name={person.name} age={person.age} />;
        })}

        {/* You can not use following syntax in jsx */}
        {/* {
          for(let i=0; i<this.state.persons.length; i++){
            <Person key={index} name={person.name} age={person.age} />
          }
        } */}
      </div>
    );
  }
}

export default App;
