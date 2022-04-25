import axios from "axios";
import React, { useState } from "react";

import useInterval from "../utils/useInterval";

const delay = 60000; // in milliseconds

const Random = () => {
  const [number, setNumber] = useState(0);

  useInterval(() => {
    axios.get("/api/randomNumber").then((res) => {
      setNumber(res.data.number);
    });
  }, delay);

  return <h1>Number: {number}</h1>;
};

export default Random;
