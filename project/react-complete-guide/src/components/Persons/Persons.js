import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return nextProps.persons !== this.props.persons;
  }

  render() {
    console.log("[Persons.js] rendering...");

    return this.props.persons.map((person) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={this.props.click}
          changed={(e) => this.props.changed(e, person.id)}
        />
      );
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }
}

export default Persons;
