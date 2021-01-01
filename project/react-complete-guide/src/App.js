import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p>This is really working!!</p>

        {/* the attributes are passed as properties to your components */}
        <Person name="Rahul Vishnu Pol" age="32" />
        <Person name="Pranali Rahul Pol" age="31" />
        <Person name="Aadhya Rahul Pol" age="1" />
      </div>
    );
  }
}

export default App;
