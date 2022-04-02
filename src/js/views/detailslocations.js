import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsL = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      <div className="d-flex container ">
        <img
          className="col-4"
          id="photoD"
          src="https://thecurbsiders.com/wp-content/uploads/2020/05/placeholder-800x600-1.png"
        ></img>
        <div className="col-6" style={{ display: "block" }}>
          <h1 className="display-4 ms-5">
            {store.locations[params.theid]?.name}
          </h1>
          <p className="ms-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
            nulla ipsum. Ut interdum ac purus in commodo. Suspendisse malesuada
            tincidunt sem eget iaculis. Integer id nisl eros. Nullam pretium
            mattis semper. In commodo venenatis metus, ut ornare dui tempor.
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Population</h6>
              <p>{store.locations[params.theid]?.population}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Diameter</h6>
              <p>{store.locations[params.theid]?.diameter}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Gravity</h6>
              <p>{store.locations[params.theid]?.gravity}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Climate</h6>
              <p>{store.locations[params.theid]?.climate}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Terrain</h6>
              <p>{store.locations[params.theid]?.terrain}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Orbital Period</h6>
              <p>{store.locations[params.theid]?.orbital_period}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Rotation Period</h6>
              <p>{store.locations[params.theid]?.rotation_period}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
