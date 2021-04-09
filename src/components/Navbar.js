import React from "react";
import "./styles.css";
import { useHistory, Redirect, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push("/Login");
    window.location.reload();
  }
  function epidemicClick(ev) {
    ev.preventDefault();
    history.push("/Covid");
    window.location.reload();
  }
  function CCClick(ev) {
    ev.preventDefault();
    history.push("/Crowdsourcing");
    window.location.reload();
  }
  return (
    <nav id="go-to-top" class="navbar navbar-expand-lg selectDisable">
      <a class="navbar-brand"> The New Civilisation </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item navlink-border">
            <a className="nav-link px-4" onClick={epidemicClick}>
              Epidemic
            </a>
          </li>
          <li className="nav-item navlink-border">
            <a className="nav-link px-4">Resources</a>
          </li>
          <li className="nav-item navlink-border">
            <Link className="nav-link px-4">CCExchange</Link>
          </li>
          <li className="nav-item navlink-border">
            <Link className="nav-link px-4" onClick={CCClick}>
              Crowdsourcing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to={"./Login"}>
              <button className="btn login-btn" onClick={handleClick}>
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
