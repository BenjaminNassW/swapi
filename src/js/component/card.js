import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card" style={{ minWidth: "400px", width: "400px" }}>
      <img src="" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {props.gender && (
          <>
            <p className="card-text">Gender: {props.gender}</p>
            <p>Eye color: {props.eye_color}</p>
            <p>Hair color: {props.hair_color}</p>
          </>
        )}
        {props.population && (
          <>
            <p>Population: {props.population}</p>
            <p>Diameter: {props.diameter}</p>
            <p>Terrain: {props.terrain}</p>
          </>
        )}
        {props.model && (
          <>
            <p>Model: {props.model}</p>
            <p>Crew: {props.crew}</p>
            <p>Manufacturer: {props.manufacturer}</p>
          </>
        )}

        <Link to={"/personaje/" + props.index}>
          <button>click</button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
