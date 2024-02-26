import Todo from "./todo.js";
import "./styles.css";

export default function TodoList({ todos, markCompleted, deleteTodo }) {
  return (
    <>
      {todos.length === 0 && <p>No Todos</p>}
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            markCompleted={markCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
