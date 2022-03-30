import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import getState from "../store/flux";
import Char from "../component/characters";
import Card from "../component/card";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <h2>Characters</h2>
      <div
        style={{ display: "flex", minWidth: "auto" }}
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
            />
          );
        })}
      </div>
      <h2>Locations</h2>
      <div
        style={{ display: "flex", minWidth: "auto" }}
        className="overflow-scroll"
      >
        {store.locations.map((obj, index) => {
          return <Card key={index} name={obj.name} />;
        })}
      </div>
      <h2>Spaceships</h2>
      <div
        style={{ display: "flex", minWidth: "auto" }}
        className="overflow-scroll"
      >
        {store.starships.map((obj, index) => {
          return <Card key={index} name={obj.name} />;
        })}
      </div>
    </div>
  );
};
