import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignUpContainer,
  Title,
  Form,
  Input,
  Button,
  LinkText,
} from "./SignUpStyle";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("회원가입 성공:", userCredential.user);

      setSuccess("회원가입이 성공적으로 완료되었습니다!");

      // 일정 시간 후 로그인 페이지로 이동
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("회원가입 에러:", err);
      setError(err.message || "회원가입 실패");
    }
  };

  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <Form onSubmit={handleSignUp}>
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
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">회원가입</Button>
      </Form>

      <LinkText>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </LinkText>
    </SignUpContainer>
  );
};

export default SignUp;
