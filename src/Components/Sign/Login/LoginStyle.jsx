import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 13rem auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const GuestButton = styled(Button)`
  background-color: #6c757d;
  &:hover {
    background-color: #5a6268;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;

  a {
    color: #007bff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
