import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
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
}

export default Persons;
