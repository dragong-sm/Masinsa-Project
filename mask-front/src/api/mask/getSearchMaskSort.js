import axios from "axios";
import React from "react";

export const getSearchMaskSort = async ({
  keyword,
  sortCol,
  sortOrder,
  setMaskList,
}) => {
  // console.log(
  //   `http://localhost:8080/mask/search/sort?keyword=${keyword}&sortCol=${sortCol}&order=${sortOrder}`
  // );
  // 검색어가 존재할 경우만 요청
  // http://localhost:8080/mask/search/sort?keyword=test&sortCol=price&order=desc&page=2&size=2
  if (keyword != "") {
    if (sortCol != "") {
      // 정렬이 존재할경우
      const response = await axios.get(
        // `http://localhost:8080/mask/search/sort?keyword=${keyword}&sortCol=${sortCol}&order=${sortOrder}`
        `http://35.216.122.45:8080/mask/search/sort?keyword=${keyword}&sortCol=${sortCol}&order=${sortOrder}`
      );

      console.log("1 : ", response.data.result);
      setMaskList(response.data.result);
    } else {
      // 정렬이 없을 경우
      const response = await axios.get(
        // `http://localhost:8080/mask/search/sort?keyword=${keyword}`
        `http://35.216.122.45:8080/mask/search/sort?keyword=${keyword}`
      );

      console.log("2 : ", response.data.result);
      setMaskList(response.data.result);
    }
  }
};
