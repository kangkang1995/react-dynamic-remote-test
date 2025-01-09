import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'

window.React = React;
window.ReactDOM = ReactDOM;

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
