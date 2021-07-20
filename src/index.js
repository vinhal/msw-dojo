import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

if (process.env.REACT_APP_MOCK) {
  const { worker } = require("./mocks/browser");
  worker.start({ onUnhandledRequest: 'bypass' });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
