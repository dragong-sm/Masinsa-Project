import React from "react";
import axios from "axios";

/* 상품 클릭 수 증가 */
export const putClick = async ({ clickMaskId }) => {
  console.log("putClick", clickMaskId);
  const response = axios.put(
    // `http://localhost:8080/mask/click?maskId=${clickMaskId}`
    `http://35.216.122.45:8080/mask/click?maskId=${clickMaskId}`
  );
};
