import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../API/loginAPI";
import {
  LoginContainer,
  Title,
  Form,
  Input,
  Button,
  LinkText,
} from "./LoginStyle";
import GuestLogin from "../GuestLogin/Guest";
import { signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 로그인 처리 함수
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Firebase 이메일/비밀번호 로그인 처리
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("로그인 성공:", userCredential.user);
      setTimeout(() => {
        navigate("/PostItBoard");
      }, 1000);
    } catch (err) {
      console.error("로그인 실패:", err);
      setError("로그인 실패: " + err.message);
    }
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">로그인</Button>
      </Form>

      <GuestLogin setEmail={setEmail} setPassword={setPassword} />

      <LinkText>
        아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </LinkText>
    </LoginContainer>
  );
};

export default Login;
