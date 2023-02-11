import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  // 윈도우 객체에 있는 네이버에 로그인 함수를 이용하여 토큰 값을 바로 전달
  const { naver } = window;
  const naverLogin = new naver.LoginWithNaverId({
    clientId: "UNY76CePTThz2d9AIPl4", // CLIENT_ID
    callbackUrl: "http://localhost:3000", // CALLBACKURL
    isPopup: false /* 팝업을 통한 로그인 여부, true 면 팝업 */,
    loginButton: {
      /* 로그인 버튼의 타입을 지정 */ color: "green",
      type: 3,
      height: 50,
    },
  });

  // useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
  useEffect(() => {
    naverLogin.init();
  }, []);

  // user 정보
  const [user, setUser] = useState();
  // 토큰
  const [token, setToken] = useState();

  useEffect(() => {
    naverLogin.init();
    console.log("");
    const getUser = async () => {
      await naverLogin.getLoginStatus((status) => {
        console.log(`사용자 로그인 확인 ?: ${status}`);
        if (status) {
          // 로그인하면 사용자 정보 setuser
          setUser({ ...naverLogin.user });
          axios.get(`/oauth2.0/authorize?response_type=code
          &client_id=${naverLogin.clientId}&redirect_url=
          ${naverLogin.callbackUrl}&state=test`);

          const access_token = window.location.href.split("=")[1].split("&")[0];
          console.log(access_token);
          setToken(access_token);
        }
      });
    };

    getUser();
  }, []);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (token != undefined) {
      axios
        .post(`http://localhost:8080/member/new-member`, { token: token })
        .then((response) => setUserData(response.data));
    }
  }, [token]);

  console.log(userData);

  const naverLogout = () => {
    localStorage.removeItem("com.naver.nid.access_token");
    window.location.reload();
  };

  return (
    <div className="App">
      <div>
        {user ? (
          <div>
            <h2>네이버 로그인 성공!</h2>
            {/* 토큰 */}
            <div>{user.id}</div>
            {/* 이름 */}
            <div>{user.name}</div>
            {/* 생일 */}
            <div>{user.birthday}</div>
            {/* 출생년도 */}
            <div>{user.birthyear}</div>
            {/* 이메일 */}
            <div>{user.email}</div>
            {/* 성별 */}
            <div>{user.gender}</div>
            {/* 연령대 */}
            <div>{user.age}</div>
            <button onClick={naverLogout}>로그아웃</button>
          </div>
        ) : (
          // 네이버 로그인 버튼
          <div>
            {/* 아이콘이 표시 될 div태그에 id='naverIdLogin' 을 꼭 추가 */}
            <div id="naverIdLogin"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
