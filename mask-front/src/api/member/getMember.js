import axios from "axios";
import React from "react";

export const getMember = async ({ memberId, setMember }) => {
  const response = await axios.get(
    // `http://localhost:8080/member?memberId=${memberId}`
    `http://35.216.122.45:8080/member?memberId=${memberId}`
    // "http://localhost:8080/member?memberId=2"
  );
  setMember(response.data.result);
};
