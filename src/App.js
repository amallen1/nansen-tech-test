import "./styles.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [todoItems, setTodoItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <img src="/assets/Rocket-Icon.svg" alt="Apollo logo icon" />
        <h1 className="logo-text">Apollo</h1>
        {isOpen && (
          <div className="sidebar">
            <ul className="mobile-links">
              <li>
                <a href="/">Schedule</a>
              </li>
              <li>
                <a href="/">About us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        )}

        <ul className="desktop-links">
          <li>
            <a href="/">Schedule</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        {isOpen ? (
          <div className="sidebar-btn" onClick={toggleMenu}>
            <img src="/assets/Close-Icon.svg" alt="Close menu icon" />
          </div>
        ) : (
          <div className="sidebar-btn" onClick={toggleMenu}>
            <img src="/assets/Hamburger-Menu.svg" alt="Menu icon" />
          </div>
        )}
      </nav>

      <main>
        <section className="hero-section">
          <h2>Shoot For the Moon</h2>
          <button className="learn-btn"> Learn More </button>
        </section>

        <section className="todo-section">
          <h3>40% done</h3>
          <div className="tasks">
            {todoItems.map((item, index) => (
              <TodoItem key={index} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
};

export default App;
