import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 container">
      <Link to="/">
        <img
          id="logo"
          src="https://assets.webiconspng.com/uploads/2017/09/Star-Wars-PNG-Image-55150.png"
        />
      </Link>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites:
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
