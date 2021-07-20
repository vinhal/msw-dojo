import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import todoApi from "../../services/todoApi";
import "./todo.css";

function Todo({ userEmail }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoApi.list(userEmail).then(setTodos);
  }, [userEmail]);

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

        {!todos.length && (
          <div className="todo_loading">
            <ReactLoading type="balls" color="#cccccc" />
          </div>
        )}
      </section>
    </div>
  );
}

export default Todo;
