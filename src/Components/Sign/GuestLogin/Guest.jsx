import React from 'react';
import { GuestLoginButtonStyled } from './GuestStyle';

const GuestLogin = ({ setEmail, setPassword }) => {
  const handleGuestLogin = () => {
    // 체험용 이메일과 비밀번호를 로그인 폼에 자동 입력
    setEmail('test@gmail.com');
    setPassword('test123');
  };

  return (
    <GuestLoginButtonStyled onClick={handleGuestLogin}>
      체험하기
    </GuestLoginButtonStyled>
  );
};

export default GuestLogin;
