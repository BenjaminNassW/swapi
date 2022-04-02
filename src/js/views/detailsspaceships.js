import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsS = (props) => {
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
            {store.starships[params.theid]?.name}
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
              <h6>Model</h6>
              <p>{store.starships[params.theid]?.model}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Crew</h6>
              <p>{store.starships[params.theid]?.crew}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Manufacturer</h6>
              <p>{store.starships[params.theid]?.manufacturer}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>MGLT</h6>
              <p>{store.starships[params.theid]?.MGLT}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Cargo Capacity</h6>
              <p>{store.starships[params.theid]?.cargo_capacity}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Consumables</h6>
              <p>{store.starships[params.theid]?.consumables}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Cost in Credits</h6>
              <p>{store.starships[params.theid]?.cost_in_credits}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Hyperdrive Rating</h6>
              <p>{store.starships[params.theid]?.hyperdrive_rating}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Max Atmosphering Speed</h6>
              <p>{store.starships[params.theid]?.max_atmosphering_speed}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Length</h6>
              <p>{store.starships[params.theid]?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
