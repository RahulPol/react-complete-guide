import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, this is react app</h1>
    //   </div>
    // );

    // the jsx written above gets converted into javascript code as shown below
    // but as you can see it is very difficult to write code like this, thus we use
    // jsx syntax which is easy to understand and comes naturally as we have worked on html
    // In order to convert the jsx to js we use babel tool
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Hi, this is react app")
    );
  }
}

export default App;
