import React from "react";
import axios from "axios";

export const putWishlist = async (memberId, maskId) => {
  // console.log(memberId, maskId);
  const response = axios.put(
    // `http://localhost:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
    `http://35.216.122.45:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
  );

  // console.log(
  //   `http://localhost:8080/wishlist?memberId=${memberId}&maskId=${maskId}`
  // );
};
