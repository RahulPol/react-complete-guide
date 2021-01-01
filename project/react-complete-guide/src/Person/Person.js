import React from "react";

import "./Person.css";

// you can collect properties inside props parameter
const Person = (props) => {
  return (
    <div className="Person" onClick={props.click}>
      <p>
        I am {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
