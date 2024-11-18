import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src="/images/logo.png" alt="logo" className="logo" />
        </div>
        <ul className="nav-list-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Services
            </NavLink>
          </li>
        </ul>
        <div className="ham-container" onClick={handleClick}>
          {menu ? <X /> : <Menu />}
        </div>
      </div>

      <div>
        {menu && (
          <div className="mobile-list-container">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActiveMobile }) =>
                    isActiveMobile ? "active-link-mobile" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActiveMobile }) =>
                    isActiveMobile ? "active-link-mobile" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActiveMobile }) =>
                    isActiveMobile ? "active-link-mobile" : ""
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
