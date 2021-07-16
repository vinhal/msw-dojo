import React, { useEffect, useState } from "react";
import "./App.css";

const mockedData = [
  {
    title: "Apresentar as tretas",
    description: "Descrever/Aprofundar os trem tudo",
  },
  {
    title: "Apresentar as tretas",
    description:
      "Descrever/Aprofundar os trem tudo Descrever/Aprofun trem tudo Descrever/Aprofundar os trem tudo",
  },
  {
    title: "Apresentar as tretas",
    description:
      "Descrever/Aprofundar os trem tudo Descrever/Aprofun trem tudo Descrever/Aprofundar os trem tudo",
  },
  {
    title: "Apresentar as tretas",
    description: "Descrever/Aprofundar os trem tudo",
  },
]

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch().then().catch()
    setTimeout(() => {
      setTodos(mockedData)
    }, [2000])
  }, []);

  return (
    <div className="frame">
      <section className="todo">
        <header className="todo__header">
          <h2>Dojo - Mockando Front</h2>
          <p>21 de julho, 2021</p>
        </header>

        <ul className="todo__list">
          {todos.map(({ title, description }, index) => (
            <li>
              <label for={`todo-${index}`}>
                <input id={`todo-${index}`} type="checkbox" />
                <p>
                  {title}
                  <br />
                  <span>{description}</span>
                </p>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
