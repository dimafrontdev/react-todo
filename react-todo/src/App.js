import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentTodos, setCurrentTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    filterHandler();
  }, [todos, filter]);

  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setCurrentTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setCurrentTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setCurrentTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        setFilter={setFilter}
        todos={todos}
      />
      <TodoList todos={todos} setTodos={setTodos} currentTodos={currentTodos} />
    </div>
  );
}

export default App;
