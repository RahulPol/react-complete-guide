import React from "react";
import styled from "styled-components";

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

const Cockpit = (props) => {
  return (
    <div>
      <h1>Hi, this is react app</h1>
      <p className={props.classes}>This is really working!!</p>
      <StyledButton toggleStyle={props.showPersons} onClick={props.click}>
        Toggle Persons
      </StyledButton>
    </div>
  );
};

export default Cockpit;
