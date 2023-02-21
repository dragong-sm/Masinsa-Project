import React from "react";
import axios from "axios";

export const getImage = async ({ maskId, setImages }) => {
  const response = await axios.get(
    // `http://localhost:8080/mask/image?maskId=${maskId}`
    `http://35.216.122.45:8080/mask/image?maskId=${maskId}`
  );

  // console.log(response.data);
  setImages(response.data.result);
};
