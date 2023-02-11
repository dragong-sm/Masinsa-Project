import React from "react";
import axios from "axios";

export const getMainMask = async ({
  sortCol,
  sortOrder,
  setMaskList,
  keyword,
}) => {
  // 처음 렌더링시만 사용!
  // keyword 값이 없을때
  if (keyword === "") {
    if (sortOrder != "") {
      // console.log("1");
      const response = await axios
        .get(
          // `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}`
          `http://35.216.122.45:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}`
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      setMaskList(response.data.result);
    } else {
      // console.log("2");
      const response = await axios
        // .get(`http://localhost:8080/mask/filter/sort?`)
        .get(`http://35.216.122.45:8080/mask/filter/sort?`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      setMaskList(response.data.result);
    }
  }
};
