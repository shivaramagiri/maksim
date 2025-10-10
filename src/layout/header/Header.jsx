import React, { useState } from "react";
import maksim_logo from "../../assets/maksim_logo.png";
import "./Header.scss";

export default function Header() {
  // State to track which nav item is active
  const [activeLink, setActiveLink] = useState("Home");

  // List of nav items
  const navItems = ["Home", "Services", "Industries", "Careers", "About", "Contact"];

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={maksim_logo} alt="Logo" />
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-md-5">
              {navItems.map((item) => (
                <li key={item} className="nav-item">
                  <a
                    className={`nav-link ${activeLink === item ? "active" : ""}`}
                    href="#"
                    onClick={() => setActiveLink(item)}
                  >
                    {item}
                  </a>
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
