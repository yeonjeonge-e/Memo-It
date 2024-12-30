import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Sign/Login/Login";
import SignUp from "./Components/Sign/SignUp/SignUp";
import PostItBoard from "./pages/PostItBoard/PostItBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/PostItBoard" element={<PostItBoard />} />
        <Route path="/" element={<Login />} />{" "}
        {/* 기본 페이지를 로그인으로 설정 */}
      </Routes>
    </Router>
  );
}

export default App;
