import React from "react";

const Form = ({ inputText, setInputText, setTodos, setFilter, todos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={submitFormHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
