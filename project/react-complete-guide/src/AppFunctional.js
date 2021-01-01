import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const AppFunctional = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Rahul Vishnu Pol", age: 32 },
      { name: "Pranali Rahul Pol", age: 31 },
      { name: "Aadhya Rahul Pol", age: 1 },
    ],
  });

  // we are taking other state in separate hook as if we keep it in personsState setPersonsState will overwrite the
  // state rather than updating it
  const [otherState, setOtherState] = useState("other state value");

  console.log(personsState, otherState);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Rahul Vishnu Pol", age: 32 },
        { name: "Pranali Dagadu Kadam", age: 31 },
        { name: "Aadhya Rahul Pol", age: 1 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, this is react app</h1>
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default AppFunctional;
