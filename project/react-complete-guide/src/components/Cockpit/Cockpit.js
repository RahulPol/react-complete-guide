import React, { useEffect, useRef } from "react";
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

// It makes useEffect tricky to run as it runs all the times(ie both componentDidMound and componentDidUpdate)
// what if we are running an http req in useEffect, this will cause http req run every time
// to simulate it copy following code in useEffect
// useEffect(() => {
//     console.log("[Cockpit.js] useEffect");
//     setTimeout(() => {
//       alert("fetched data");
//     }, 1000);
//   });
// above code causes alert to show every second whenever render of Cockpit is called, which is called every time state/prop of App is modified

// To resolve it react provides second parameter to useEffect called deps, if present it will cause useEffect to run only when the dependency is
// changed. For eg. if you want above code to run only when persons has changed, use following snippet,
// useEffect(() => {
//     console.log("[Cockpit.js] useEffect");
//     setTimeout(() => {
//       alert("fetched data");
//     }, 1000);
//   }, [props.persons]);
// above code will cause useEffect to run only when persons property is modified. so toggling persons won't trigger useEffect but deletion /modification
// of persons will trigger it.

// if you want effect to run when another property is changed then you can add another useEffect which depends on another dependency

// NOTE: you can pass multiple dependencies for same useEffect separated by commas

// Ok, so above hack will let us implement useEffect to run effect on change of particular dep
// but what if we want useEffect to run only for creation life cycle ie like componentDidMount
// to do so, just pass blank array in place of dependency
// useEffect(() => {
//     console.log("[Cockpit.js] useEffect");
//     setTimeout(() => {
//       alert("fetched data");
//     }, 1000);
//   }, []);

// Till now, we have seen useEffect to run by default for every render of Cockpit, when componentUpdates, when particular dependency updates,
// when componentMounts but what if we want to do cleanup when componentUnmount, like when you want to clean the timer you have set
// For that purpose you can use return statement in useEffect which will run when Cockpit component un-mounts
// useEffect(() => {
//     console.log("[Cockpit.js] useEffect");
//     const timer = setTimeout(() => {
//       alert("fetched data");
//     }, 1000);
//     return () => {
//       clearTimeout(timer);
//       console.log("[Cockpit.js] clean up work in useEffect");
//     };
//   }, []);
// also, note in above code we have [] deps, means the useEffect will be called only once when component mounts and then directly when component
// un-mounts

// To run useEffect after every component mount and un-mount use following code
// useEffect(() => {
//     console.log("[Cockpit.js] 2nd useEffect");
//     return () => {
//       console.log("[Cockpit.js] clean up work in 2nd useEffect");
//     };
//   });
// this is useful for case where you want to perform some activity after every render and clean up that activity as well

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // const timer = setTimeout(() => {
    //   alert("fetched data");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] clean up work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] clean up work in 2nd useEffect");
    };
  });

  console.log("[Cockpit.js] rendering...");
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={props.classes}>This is really working!</p>
      <StyledButton
        ref={toggleBtnRef}
        toggleStyle={props.showPersons}
        onClick={props.click}
      >
        Toggle Persons
      </StyledButton>
    </div>
  );
};

export default React.memo(Cockpit);
