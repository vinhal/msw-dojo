import React, { useEffect, useState } from "react";
import todoApi from "../../services/todoApi";
import "./todo.css";

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

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoApi.list().then(() => setTodos(mockedData))
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
            <li key={index}>
              <label htmlFor={`todo-${index}`}>
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

export default Todo;
