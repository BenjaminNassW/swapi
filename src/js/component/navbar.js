import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
import getState from "../store/flux";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
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
              {store.favorites.map((e, i) => {
                return <p key={i}>{e}</p>;
              })}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
