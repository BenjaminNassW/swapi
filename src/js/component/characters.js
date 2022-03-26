import React from "react";
import { useState } from "react";

const Char = () => {
  const [char, setChar] = useState({});
  fetch("https://www.swapi.tech/api/people")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setChar(data);
    })
    .catch((err) => console.error(err));
  return char;
};
export default Char;
