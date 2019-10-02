import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.css";
import DreamSchool from "./Components/DreamSchool";
import Login from "./Components/Login";

ReactDOM.render(
  <div>
    <Login />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
