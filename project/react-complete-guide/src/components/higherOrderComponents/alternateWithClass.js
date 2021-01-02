import React from "react";

const alternateWithClass = (WrappedComponent, classes) => {
  return (props) => {
    <div className={classes}>
      <WrappedComponent />
    </div>;
  };
};

export default alternateWithClass;
