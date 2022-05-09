import "./styles.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [todoItems, setTodoItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  return (
    <div>
      <Navbar />

      <main>
        <section className="hero-section">
          <h2>Shoot For the Moon</h2>
          <button className="learn-btn"> Learn More </button>
        </section>

        <section className="todo-section">
          <ProgressBar progress={progress} />

          <div className="tasks">
            {todoItems.map((task, index) => (
              <TodoItem
                key={index}
                taskNum={task}
                progress={progress}
                setProgress={setProgress}
                todoItems={todoItems}
              />
            ))}
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
};

export default App;
