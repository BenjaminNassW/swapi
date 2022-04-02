import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
<script
  src="https://kit.fontawesome.com/eefa9efda7.js"
  crossorigin="anonymous"
></script>;

const Card = (props) => {
  return (
    <div
      className="card container me-2"
      style={{ minWidth: "400px", width: "400px" }}
    >
      <img
        src="https://dummyimage.com/400x200"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {props.gender && (
          <>
            <p className="card-text">Gender: {props.gender}</p>
            <p>Eye color: {props.eye_color}</p>
            <p>Hair color: {props.hair_color}</p>
            <Link to={"/personaje/" + props.index}>
              <button>Learn More</button>
            </Link>
            <FontAwesomeIcon icon={faHeart} />
          </>
        )}
        {props.population && (
          <>
            <p>Population: {props.population}</p>
            <p>Diameter: {props.diameter}</p>
            <p>Terrain: {props.terrain}</p>
            <Link to={"/locations/" + props.index}>
              <button>Learn More</button>
            </Link>
            <FontAwesomeIcon icon={faHeart} />
          </>
        )}
        {props.model && (
          <>
            <p>Model: {props.model}</p>
            <p>Crew: {props.crew}</p>
            <p>Manufacturer: {props.manufacturer}</p>
            <Link to={"/spaceships/" + props.index}>
              <button>Learn More</button>
            </Link>
            <FontAwesomeIcon icon={faHeart} />
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
