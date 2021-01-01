import React from "react";

// you can collect properties inside props parameter
const Person = (props) => {
  return (
    <p>
      I am a {props.name} and I am {props.age} years old
    </p>
  );
};

export default Person;
