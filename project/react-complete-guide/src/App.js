import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // Restrictions of JSX
    // 1. There are few reserved keywords that you can't use in JSX, for eg. class, you can not use
    //   class keyword to specify css class as it has different meaning in js
    // 2. You can not return multiple elements from component there must be one return element per component
    //
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
      </div>
    );
  }
}

export default App;
