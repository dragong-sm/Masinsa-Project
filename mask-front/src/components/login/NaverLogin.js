import styled from "styled-components";
import { LoginBtnStyle, NaverLoginBtn } from "../../styles/HeaderStyle";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function NaverLogin({ setUser, setStatus, user }) {
  // 윈도우 객체에 있는 네이버에 로그인 함수를 이용하여 토큰 값을 바로 전달
  const { naver } = window;
  const naverLogin = new naver.LoginWithNaverId({
    clientId: "UNY76CePTThz2d9AIPl4", // CLIENT_ID
    // callbackUrl: "http://localhost:3000/Login/MASINSA", // CALLBACKURL
    callbackUrl: "http://35.216.95.168:3000/Login/MASINSA",
    isPopup: false /* 팝업을 통한 로그인 여부, true 면 팝업 */,
    loginButton: {
      /* 로그인 버튼의 타입을 지정 */ color: "green",
      type: 3,
      height: 30,
    },
  });

  // useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
  useEffect(() => {
    naverLogin.init();
    // getUser();
  }, []);

  // 네이버가 만들어 준 로그인 버튼 ref설정
  const naverRef = useRef();

  // 새로 만든 버튼 클릭 시, naverRef 상태 변경 > 로그인
  const handleClick = () => {
    // console.log(naverRef.current);
    naverRef.current.children[0].click();
  };

  // user 정보
  // const [user, setUser] = useState();
  // 토큰
  const [token, setToken] = useState();
  // 로그인 status
  // const [status, setStatus] = useState(false);

  // 로그인 버튼 클릭시, 실행
  useEffect(() => {
    naverLogin.init();
    const getUser = async () => {
      await naverLogin.getLoginStatus((status) => {
        console.log(`사용자 로그인 확인 ?: ${status}`);
        if (status) {
          // 로그인 status
          setStatus(status);

          // clientId를 이용하여 네이버에 accessToken 요청
          axios.get(`/oauth2.0/authorize?response_type=code
            &client_id=${naverLogin.clientId}&redirect_url=
            ${naverLogin.callbackUrl}&state=test`);

          // accessToken 받아옴
          const accessToken = window.location.href.split("=")[1].split("&")[0];
          // window.localStorage.setItem("token", accessToken);

          // accessToken을 token으로 설정 > member/new-member 요청을 위함
          setToken(accessToken);
        }
      });
    };
    getUser();
  }, []);

  // console.log(token);

  const navigate = useNavigate();

  // accessToken(token)을 이용하여 서버에 사용자 정보 요청
  // setUser을 통해 로그인 한 유저 정보를 저장
  useEffect(() => {
    if (token != undefined) {
      axios
        .post(`http://35.216.122.45:8080/member/new-member`, { token: token })
        .then((response) => setUser(response.data.result));

      // 홈페이지 메인으로 이동을 위한 navigate
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      {user ? (
        <></>
      ) : (
        // 네이버 로그인 버튼
        <div>
          {/* 아이콘이 표시 될 div태그에 id='naverIdLogin' 을 꼭 추가 */}
          {/* 원래 제공해주는 버튼은 안보이게 하고 */}
          <div
            ref={naverRef}
            id="naverIdLogin"
            style={{ display: "none" }}
          ></div>
          {/* 새로 스타일해서 로그인 버튼 만들기 */}
          <NaverLoginBtn onClick={handleClick}>N 네이버 로그인</NaverLoginBtn>
        </div>
      )}
    </div>
  );
}

export default NaverLogin;
