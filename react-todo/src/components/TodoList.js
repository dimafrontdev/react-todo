import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, currentTodos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {currentTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
