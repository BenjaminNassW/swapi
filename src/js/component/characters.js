import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./card";

const Char = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div></div>;
};
export default Char;
