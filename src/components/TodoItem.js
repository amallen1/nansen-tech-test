import React, { useState } from "react";
import "../styles/todoItem.css";

const TodoItem = ({ taskNum, progress, setProgress, todoItems }) => {
  const [isDone, setIsDone] = useState(false);

  const toggleTask = () => {
    setIsDone(!isDone);

    if (isDone) {
      setProgress(Math.round(progress - 100 / todoItems.length));
    } else {
      setProgress(Math.round(progress + 100 / todoItems.length));
    }
  };

  return (
    <div className="todo-item-wrapper">
      <p>Todo Task {taskNum}</p>
      <button
        className={isDone ? "complete-btn" : "incomplete-btn"}
        onClick={() => toggleTask()}
      >
        {isDone ? "Done" : "Mark as Done"}
      </button>
    </div>
  );
};

export default TodoItem;
