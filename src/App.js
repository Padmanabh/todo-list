import { useState, useEffect } from "react";
import NewTodo from "./newTodo.js";
import TodoList from "./todoList.js";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, todos);

  function deleteTodo(e, id) {
    e.preventDefault();
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id);
    });
    console.log("deleted");
  }

  function markCompleted(id) {
    setTodos((current) => {
      return current.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodos((current) => {
      return [...current, { id: Date.now(), title: title, completed: false }];
    });
    console.log("submitted");
  }

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        markCompleted={markCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
