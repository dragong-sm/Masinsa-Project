import axios from "axios";
import React from "react";
//
export const getReviewCount = async ({
  maskId,
  reviewType,
  setReviewCount,
}) => {
  const response = await axios.get(
    // `http://localhost:8080/review/count?maskId=${maskId}&reviewType=${reviewType}`
    `http://35.216.122.45:8080/review/count?maskId=${maskId}&reviewType=${reviewType}`
  );

  setReviewCount(response.data.result);
};
