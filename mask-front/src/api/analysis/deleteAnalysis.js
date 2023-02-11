import React from "react";
import axios from "axios";

export const deleteAnalysis = async ({ maskId }) => {
  const response = await axios.delete(`http://35.216.122.45:8080/analysisinfo`, {
    maskId: { maskId },
  });
};
