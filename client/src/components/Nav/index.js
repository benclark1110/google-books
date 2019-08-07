import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Search</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/saved">Saved</Link>
              </li>
            </ul>
          </div>
    </nav>
  );
}

export default Nav;
