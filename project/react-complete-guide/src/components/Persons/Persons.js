import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount");
  }

  // the shouldComponentUpdate is not implemented correctly
  // as it does not check all props like click an changed
  // so its better we implement that check
  // the code is correct after the implementation but react provides a better way using Pure Component
  // Pure component is nothing but component with implementation of shouldComponentUpdate with
  // all necessary checks, thus commenting out this code
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.click !== this.props.click ||
  //     nextProps.changed !== this.props.changed
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

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
