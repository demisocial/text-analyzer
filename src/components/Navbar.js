import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar({ title, aboutText, theme, toggleMode }) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${
      theme === "light" ? "navbar-light" : "navbar-dark"}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${theme === 'light' ? 'dark' : 'light'}`} to="/">
          {title}
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className={`nav-link text-${theme === 'light' ? 'dark' : 'light'}`} to="/">
                XYZ
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link text-${theme === 'light' ? 'dark' : 'light'}`} to="/about">
                {aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${theme === 'light' ? 'dark' : 'light'}`} to="/login">
                Login / Sign Up
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${theme === 'light' ? 'dark' : 'light'} mx-3`}>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              <strong>{theme === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}</strong>
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <form className="d-flex my-2" role="search">
        <input className={`form-control me-2 bg-${theme === "light" ? "light" : "dark"
                        } text-${theme === "light" ? "dark" : "light"}`} type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-${theme === 'light' ? 'dark' : 'light'}`} type="submit">Search</button>
      </form>
        </div>
      </div>
    </nav>
  </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
