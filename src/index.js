import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

if (process.env.REACT_APP_API_URL === 'http://localhost:5000'){
  const { worker } =  require('./mocks/browser')
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
