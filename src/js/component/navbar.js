import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

<script
  src="https://kit.fontawesome.com/eefa9efda7.js"
  crossorigin="anonymous"
></script>;

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
                return (
                  <div className="d-flex" key={i}>
                    <Link to={"/personaje/" + e.index}>
                      <p key={i} className="me-2" id="favorites">
                        {e.name}
                      </p>
                    </Link>
                    <button
                      onClick={() => {
                        actions.filterFavorite(e);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                );
              })}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
