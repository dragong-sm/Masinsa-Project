import "./App.css";
import AboutPage from "./pages/AboutPage";
import DashBoardPage from "./pages/DashBoardPage";
import IntroducePage from "./pages/IntroducePage";
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import { Route, Routes } from "react-router-dom";
import RecentView from "./components/RecentView";
import UpBtn from "./components/UpBtn";
import Header from "./components/Header";
import { Wrapper } from "./styles/OtherStyles";
import { useEffect, useRef, useState } from "react";
import LoginPage from "./pages/LoginPage";

function App() {
  // user 정보
  const [user, setUser] = useState();

  // 로그인 status
  const [status, setStatus] = useState(false);

  // 페이지 이동시에도 유저정보를 받을 수 있도록 !
  if (user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }

  // console.log("유저정보", user);

  return (
    <div className="App">
      {/* mui 사용을 위한 코드 */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      {/* 헤더부분 */}
      <Wrapper>
        <Header
          user={user}
          setUser={setUser}
          setStatus={setStatus}
          status={status}
        />
        <Routes>
          {/* 메인페이지 :  "http://localhost:3000/" */}
          {/* http://35.216.95.168:3000/ */}
          <Route path="/" element={<MainPage />} />

          {/* 상품리스트페이지 : "http://localhost:3000/MaskList/Masinsa/:blockingindex" */}
          {/* http://35.216.95.168:3000/MaskList/Masinsa/:blockingindex */}
          <Route
            path="MaskList/Masinsa/:blockingindex"
            element={<ListPage />}
          />

          {/* 상품상세페이지 : "http://localhost:3000/aboutMask/:maskId/Masinsa" */}
          {/* http://35.216.95.168:3000/aboutMask/:maskId/Masinsa */}
          <Route path="/aboutMask/:maskId/Masinsa/*" element={<AboutPage />} />

          {/* 마이페이지 : "http://localhost:3000/:memberId/MyPage/Masinsa" */}
          {/* http://35.216.95.168:3000/:memberId/MyPage/Masinsa */}
          <Route path="/:memberId/MyPage/Masinsa" element={<MyPage />} />

          {/* 마신사소개페이지 : "http://localhost:3000/Introduce/Masinsa" */}
          {/* http://35.216.95.168:3000/Introduce/Masinsa */}
          <Route path="/Introduce/Masinsa" element={<IntroducePage />} />

          {/* 로그인페이지 : "http://localhost:3000/Login/Masinsa" */}
          {/* http://35.216.95.168:3000/Login/Masinsa */}
          <Route
            path="/Login/Masinsa"
            element={
              <LoginPage setUser={setUser} setStatus={setStatus} user={user} />
            }
          />

          {/* 대시보드페이지 : "http://localhost:3000/DashBoard/Masinsa" */}
          <Route path="/DashBoard/Masinsa" element={<DashBoardPage />} />
        </Routes>
        <RecentView />
        <UpBtn />
      </Wrapper>
    </div>
  );
}

export default App;
