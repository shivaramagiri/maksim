import React, { useState } from "react";
import maksim_logo from "../../assets/m_logo.png";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  // State to track which nav item is active
  const [activeLink, setActiveLink] = useState("Home");

  // List of nav items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand logo" to="/">
            <img class="logo" src={maksim_logo} alt="Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-gap">
              {navItems.map((item) => (
                <li key={item} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-primary" type="button">
                Login
              </button>
              <button className="btn btn-outline-primary" type="button">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
