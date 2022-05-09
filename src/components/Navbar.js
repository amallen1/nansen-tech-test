import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div>
        <img src="/assets/Rocket-Icon.svg" alt="Apollo logo icon" />
        <h1 className="logo-text">Apollo</h1>
      </div>

      <nav>
        <ul className={isMobile && isOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="/#">Schedule</a>
          </li>
          <li>
            <a href="/#">About us</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>

        {isMobile &&
          (isOpen ? (
            <div className="menu-btn" onClick={() => toggleMenu()}>
              <img src="/assets/Close-Icon.svg" alt="Close menu icon" />
            </div>
          ) : (
            <div className="menu-btn" onClick={() => toggleMenu()}>
              <img src="/assets/Hamburger-Menu.svg" alt="Menu icon" />
            </div>
          ))}
      </nav>
    </header>
  );
};

export default Navbar;
