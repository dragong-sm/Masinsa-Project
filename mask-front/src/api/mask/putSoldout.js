import React from "react";
import axios from "axios";

export const putSoldout = async ({ maskId, soldout }) => {
  const response = axios.put(`http://35.216.122.45:8080/mask/soldout`, {
    maskId: { maskId },
    soldout: { soldout },
  });
};
