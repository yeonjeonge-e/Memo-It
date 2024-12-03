import styled from "styled-components";

export const PostItBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 3rem;
  padding-bottom: 1rem;

  h1 {
    font-size: 50px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const PostItGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const PostIt = styled.div`
  width: 200px;
  height: 200px;
  padding: 40px 20px 10px;
  background-color: #fff978;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const PostItInput = styled.textarea`
  width: 100%;
  height: 95%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  resize: none;
`;

export const PostItControls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: black;

  &:hover {
    color: red;
  }
`;

export const ColorMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  display: flex;
  gap: 5px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  z-index: 1;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
