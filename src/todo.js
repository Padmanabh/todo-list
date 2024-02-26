import { useState, useEffect } from "react";
import "./styles.css";

export default function Todo({ todo, markCompleted, deleteTodo }) {
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => markCompleted(todo.id)}
        />
        {todo.completed && <s>{todo.title}</s>}
        {!todo.completed && todo.title}
      </label>
      <button onClick={(e) => deleteTodo(e, todo.id)}>Delete</button>
    </li>
  );
}
