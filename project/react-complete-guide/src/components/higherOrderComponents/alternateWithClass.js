import React from "react";

const alternateWithClass = (WrappedComponent, classes) => {
  return (props) => (
    <div className={classes}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default alternateWithClass;
