import React from "react";
import axios from "axios";

export const getFilterMaskSort = async ({
  sortCol,
  sortOrder,
  maskKF,
  maskSize,
  maskShape,
  setMaskList,
}) => {
  // console.log("getFilter", maskKF);
  // console.log("getFilter - size", maskSize);
  // console.log("getFilter - shape", maskShape);
  // console.log(sortCol);
  // http://localhost:8080/mask/filter/sort?sortCol=avg_score&order=desc&page=1&size=2&filterCol1=shape&filter1=입체형

  if (maskKF != "") {
    if (maskShape != "") {
      if (maskSize != "") {
        if (sortCol != "") {
          // 모든 파라미터가 존재할경우
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
            `http://35.216.122.45:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
          );
          // console.log("filter1");
          setMaskList(response.data.result);
        } else {
          // 정렬은 존재하지 x 다른 거 모두 존재 (size, shape, KF)
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
            `http://35.216.122.45:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}&filterCol3=size&filter3=${maskSize}`
          );
          // console.log("filter2");
          setMaskList(response.data.result);
        }
      } else {
        if (sortCol != "") {
          // size 존재 x 정렬 o ( kf, shape)
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
            `http://35.216.122.45:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
          );
          // console.log("filter3");
          setMaskList(response.data.result);
        } else {
          // size 존재 x 정렬 x ( kf, shape)
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
            `http://35.216.122.45:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=shape&filter2=${maskShape}`
          );
          // console.log("filter4");
          setMaskList(response.data.result);
        }
      }
    } else {
      if (maskSize != "") {
        if (sortCol != "") {
          // shape 존재 x size o 정렬 o
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=size&filter2=${maskSize}`
            `http://35.216.122.45:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}&filterCol2=size&filter2=${maskSize}`
          );
          // console.log("filter5");
          setMaskList(response.data.result);
        } else {
          //  shape 존재 x size o 정렬 x
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=size&filter2=${maskSize}`
            `http://35.216.122.45:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}&filterCol2=size&filter2=${maskSize}`
          );
          // console.log("filter6");
          setMaskList(response.data.result);
        }
      } else {
        if (sortCol != "") {
          // shape, size x 정렬 o
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}`
            `http://35.216.122.45:8080/mask/filter/sort?sortCol=${sortCol}&order=${sortOrder}&filterCol1=blocking_index&filter1=${maskKF}`
          );
          // console.log("filter7");
          setMaskList(response.data.result);
        } else {
          // shape, size x 정렬 x
          const response = await axios.get(
            // `http://localhost:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}`
            `http://35.216.122.45:8080/mask/filter/sort?filterCol1=blocking_index&filter1=${maskKF}`
          );
          // console.log("filter8");
          setMaskList(response.data.result);
        }
      }
    }
  }
};
