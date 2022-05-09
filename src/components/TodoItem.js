import React, { useState } from "react";

const TodoItem = ({ item }) => {
  const [isDone, setIsDone] = useState();

  return (
    <div className="todo-item-wrapper">
      <p>Todo Task {item}</p>
      <button
        className={isDone ? "complete" : "incomplete"}
        onClick={() => setIsDone(!isDone)}
      >
        {isDone ? "Done" : "Mark as Done"}
      </button>
    </div>
  );
};

export default TodoItem;
