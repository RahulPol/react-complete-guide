import React, { useEffect } from "react";
import styled from "styled-components";

import "./Cockpit.css";

const StyledButton = styled.button`
  background-color: ${(props) => (props.toggleStyle ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.toggleStyle ? "salmon" : "lightgreen"};
    color: black;
  }
`;

// useEffect
// useEffect is the second most important hook you can use after useState.
// It combines the functionality of componentDidMount, componentDidUpdate
// and componentWillUnmount life cycle method

// useEffect as a default takes an anonymous function that will be executed for every render cycle
// The following code will run for every render cycle
// useEffect(() => {
//     console.log("[Cockpit.js] useEffect");
//   });
// so consider this as componentDidMound and componentDidUpdate life cycle method in its default usage

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
  });

  console.log("[Cockpit.js] rendering...");
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={props.classes}>This is really working!</p>
      <StyledButton toggleStyle={props.showPersons} onClick={props.click}>
        Toggle Persons
      </StyledButton>
    </div>
  );
};

export default Cockpit;
