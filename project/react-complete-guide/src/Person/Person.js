import React from "react";

const Person = () => {
  return (
    //This is really simple way of making your content dynamic, of course you
    // can call function, or use properties received from  component
    <p> I am a person and I am {Math.ceil(Math.random() * 30)} years old</p>
  );
};

export default Person;
