import React, { Component } from "react";
import styled from "styled-components";

import "./Person.css";
import Aux from "../../higherOrderComponents/Auxiliary";

const StyledDiv = styled.div`
  width: 60%;
  padding: 16px;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin: auto;
  margin-top: 10px;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p>What!!! Rendering adjacent elements</p>
        <StyledDiv>
          <p onClick={this.props.click}>
            I am {this.props.name} and I am {this.props.age} years old
          </p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </StyledDiv>
      </Aux>
    );
  }
}

export default Person;
