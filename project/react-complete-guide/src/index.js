import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
// import App from "./AppFunctional";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App appTitle="Person Manager" />,
  document.getElementById("root")
);
registerServiceWorker();
