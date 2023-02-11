import React from "react";
import axios from "axios";

export const deleteMemberReview = async ({ memberId, maskId }) => {
  const response = axios.delete(`http://35.216.122.45:8080/member_review`, {
    memberId: { memberId },
    maskId: { maskId },
  });
};
