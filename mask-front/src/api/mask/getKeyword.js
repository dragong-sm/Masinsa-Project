import React from "react";
import axios from "axios";

export const getKeyword = async ({ keyword }) => {
  const response = await axios.get(`http://35.216.122.45:8080/mask/keyword`, {
    keyword: { keyword },
  });
};
