import React from "react";

import Person from "./Person/Person";

const Persons = (props) => {
  console.log("[Persons.js] rendering...");

  return props.persons.map((person) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={props.click}
        changed={(e) => props.changed(e, person.id)}
      />
    );
  });
};

export default Persons;
