import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import "./Person.css";
import Aux from "../../higherOrderComponents/Auxiliary";
import withClass from "../../higherOrderComponents/alternateWithClass";

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
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // console.log("[Person.js] componentDidMount");
    this.inputElementRef.current.focus();
  }

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
            ref={this.inputElementRef}
          />
        </StyledDiv>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, "r");
