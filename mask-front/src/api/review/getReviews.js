import React from "react";
import axios from "axios";

export const getReviews = async ({
  maskId,
  page,
  size,
  reviewType,
  setAllReviews,
}) => {
  const response = await axios.get(
    // `http://localhost:8080/review?maskId=${maskId}&page=${page}&size=${size}&reviewType=${reviewType}`
    // "http://localhost:8080/review?maskId=2&page=1&size=5&reviewType=naver"
    // `http://localhost:8080/review?maskId=${maskId}&page=${page}&size=${size}&reviewType=${reviewType}`
    `http://35.216.122.45:8080/review?maskId=${maskId}&page=${page}&size=${size}&reviewType=${reviewType}`
  );

  // console.log(maskId);
  // console.log(response.data.result);
  // return response.data;
  setAllReviews(response.data.result);
  // console.log("review", response.data.result);
};
