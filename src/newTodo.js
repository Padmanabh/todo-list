import { useState, useEffect } from "react";
import "./styles.css";

export default function NewTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    e.target.focus();
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
