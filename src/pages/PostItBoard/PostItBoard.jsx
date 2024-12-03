import React, { useState, useEffect } from "react";
import {
  PostItBoardContainer,
  PostIt,
  PostItGrid,
  ActionButton,
  PostItControls,
  ColorMenu,
  PostItInput,
  Header,
  LogoutButton,
} from "./PostItBoardStyle";
import { useNavigate } from "react-router-dom";

// 로컬 스토리지 키 이름
const POST_IT_KEY = "postItData";

const PostItBoard = () => {
  // 로컬 스토리지에서 포스트잇 불러오기
  const savedPostIts = JSON.parse(localStorage.getItem(POST_IT_KEY));

  // 포스트잇이 없다면 기본 포스트잇을 추가
  const defaultPostIts = [{ id: 1, color: "#FFF978", text: "" }];

  const [postIts, setPostIts] = useState(
    savedPostIts?.length ? savedPostIts : defaultPostIts
  );
  const [selectedPostIt, setSelectedPostIt] = useState(null);
  const navigate = useNavigate();

  // 포스트잇 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(POST_IT_KEY, JSON.stringify(postIts));
  }, [postIts]);

  const handleAddPostIt = () => {
    const newPostIt = {
      id: postIts.length + 1,
      color: "#FFF978",
      text: "",
    };
    setPostIts([...postIts, newPostIt]);
  };

  const handleDeletePostIt = (id) => {
    setPostIts(postIts.filter((postIt) => postIt.id !== id));
  };

  const handleColorChange = (id, color) => {
    setPostIts(
      postIts.map((postIt) =>
        postIt.id === id ? { ...postIt, color: color } : postIt
      )
    );
    setSelectedPostIt(null);
  };

  const toggleColorMenu = (id) => {
    setSelectedPostIt(selectedPostIt === id ? null : id);
  };

  const handleTextChange = (id, text) => {
    setPostIts(
      postIts.map((postIt) =>
        postIt.id === id ? { ...postIt, text: text } : postIt
      )
    );
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <PostItBoardContainer>
      <Header>
        <h1>Memo-It</h1>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Header>
      <PostItGrid>
        {postIts.map((postIt) => (
          <PostIt key={postIt.id} style={{ backgroundColor: postIt.color }}>
            <PostItInput
              value={postIt.text}
              onChange={(e) => handleTextChange(postIt.id, e.target.value)}
              placeholder="내용을 입력하세요..."
            />
            <PostItControls>
              <ActionButton onClick={handleAddPostIt}>➕</ActionButton>
              <ActionButton onClick={() => toggleColorMenu(postIt.id)}>
                ☰
              </ActionButton>{" "}
              {/* Meatball Menu ⋮*/}
              <ActionButton onClick={() => handleDeletePostIt(postIt.id)}>
                ❌
              </ActionButton>
              {selectedPostIt === postIt.id && (
                <ColorMenu>
                  <div
                    onClick={() => handleColorChange(postIt.id, "#FFEB5A")}
                    style={{ backgroundColor: "yellow" }}
                  />
                  <div
                    onClick={() => handleColorChange(postIt.id, "#FFD700")}
                    style={{ backgroundColor: "orange" }}
                  />
                  <div
                    onClick={() => handleColorChange(postIt.id, "#6DD66D")}
                    style={{ backgroundColor: "green" }}
                  />
                  <div
                    onClick={() => handleColorChange(postIt.id, "#5AD2FF")}
                    style={{ backgroundColor: "blue" }}
                  />
                </ColorMenu>
              )}
            </PostItControls>
          </PostIt>
        ))}
      </PostItGrid>
    </PostItBoardContainer>
  );
};

export default PostItBoard;
