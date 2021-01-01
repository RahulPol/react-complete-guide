import React from "react";

// you can collect properties inside props parameter
const Person = (props) => {
  return (
    <div onClick={props.click}>
      <p>
        I am a {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
