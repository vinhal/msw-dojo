import React, { useState } from "react";
import "./App.css";
import Auth from "./pages/auth";
import Todo from "./pages/todo";

function App() {
  const [loggedUser, setLoggedUser] = useState();

  return (
    <div className="frame">
      {loggedUser ? (
        <Todo userEmail={loggedUser} />
      ) : (
        <Auth onLogin={setLoggedUser} />
      )}
    </div>
  );
}

export default App;
