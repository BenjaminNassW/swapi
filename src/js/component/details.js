import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Detalles = (props) => {
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
            {store.peoples[params.theid]?.name}
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
              <h6>Gender</h6>
              <p>{store.peoples[params.theid]?.gender}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Eye Color</h6>
              <p>{store.peoples[params.theid]?.eye_color}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Hair Color</h6>
              <p>{store.peoples[params.theid]?.hair_color}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Height</h6>
              <p>{store.peoples[params.theid]?.height}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Weight</h6>
              <p>{store.peoples[params.theid]?.mass}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Skin Color</h6>
              <p>{store.peoples[params.theid]?.skin_color}</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <h6>Birthyear</h6>
              <p>{store.peoples[params.theid]?.birth_year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
