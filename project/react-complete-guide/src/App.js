import React, { Component } from "react";
import "./App.css";

// while importing your custom components be sure to use capital case
// as small case is reserved for html elements like div, p, etc
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p>This is really working!!</p>
        <Person />
      </div>
    );
  }
}

export default App;
