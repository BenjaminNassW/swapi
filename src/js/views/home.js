import React, { useContext } from "react";
import "../../styles/home.css";
import getState from "../store/flux";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <h2>Characters</h2>
      <div
        style={{ display: "flex", minWidth: "auto", textAlign: "start" }}
        className="overflow-scroll "
      >
        {store.peoples.map((obj, index) => {
          return (
            <Card
              key={index}
              name={obj.name}
              gender={obj.gender}
              birthyear={obj.birth_year}
              eye_color={obj.eye_color}
              hair_color={obj.hair_color}
              height={obj.height}
              homeworld={obj.homeworld}
              mass={obj.mass}
              skin_color={obj.skin_color}
              index={index}
            ></Card>
          );
        })}
      </div>
      <h2>Locations</h2>
      <div
        style={{ display: "flex", minWidth: "auto", textAlign: "start" }}
        className="overflow-scroll"
      >
        {store.locations.map((obj, index) => {
          return (
            <Card
              key={index}
              name={obj.name}
              population={obj.population}
              diameter={obj.diameter}
              gravity={obj.gravity}
              climate={obj.climate}
              terrain={obj.terrain}
              orbitalperiod={obj.orbital_period}
              rotationperiod={obj.rotation_period}
              index={index}
            />
          );
        })}
      </div>
      <h2>Spaceships</h2>
      <div
        style={{ display: "flex", minWidth: "auto", textAlign: "start" }}
        className="overflow-scroll"
      >
        {store.starships.map((obj, index) => {
          return (
            <Card
              key={index}
              name={obj.name}
              model={obj.model}
              crew={obj.crew}
              manufacturer={obj.manufacturer}
              mglt={obj.MGLT}
              cargo_capacity={obj.cargo_capacity}
              consumables={obj.consumables}
              cost_in_credits={obj.cost_in_credits}
              hyperdrive_rating={obj.hyperdrive_rating}
              max_atmosphering_speed={obj.max_atmosphering_speed}
              length={obj.length}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
