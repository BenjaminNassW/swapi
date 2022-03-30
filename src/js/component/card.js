import React from "react";

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
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Card;
