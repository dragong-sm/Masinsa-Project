import React from "react";
import axios from "axios";

export const getTop3 = async ({ setTopMask }) => {
  // const response = await axios.get("http://localhost:8080/mask/top3");
  const response = await axios.get("http://35.216.122.45:8080/mask/top3");

  // console.log(response.data);
  setTopMask(response.data.result);
};
