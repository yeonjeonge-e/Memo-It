import React, { useState, useEffect } from "react";
import {
  PostItBoardContainer,
  PostIt,
  PostItGrid,
  ActionButton,
  PostItControls,
  ColorMenu,
  PostItInput,
} from "./PostItBoardStyle";
import Header from "../../Components/Commons/Header";

// 로컬 스토리지 키 이름
const POST_IT_KEY = "postItData";
const POSTS_PER_PAGE = 6;

const PostItBoard = () => {
  // 로컬 스토리지에서 포스트잇 불러오기
  const savedPostIts = JSON.parse(localStorage.getItem(POST_IT_KEY));

  // 항상 id 기준으로 정렬
  const sortedPostIts = savedPostIts?.length
    ? savedPostIts.sort((a, b) => a.id - b.id)
    : null;

  // 포스트잇이 없다면 기본 포스트잇을 추가
  const defaultPostIts = [{ id: 1, color: "#FFF978", text: "" }];

  const [postIts, setPostIts] = useState(
    sortedPostIts?.length ? sortedPostIts : defaultPostIts
  );
  const [selectedPostIt, setSelectedPostIt] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태

  // 포스트잇 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(POST_IT_KEY, JSON.stringify(postIts));
  }, [postIts]);

  const handleAddPostIt = () => {
    const newId = postIts.length
      ? Math.max(...postIts.map((p) => p.id)) + 1
      : 1;
    const now = new Date(); // 현재 시간 가져오기
    const newPostIt = {
      id: newId,
      color: "#FFF978",
      text: "",
      timestamp: now.getTime(), // 생성 시점의 타임스탬프 저장 (정렬용)
    };
    setPostIts([...postIts, newPostIt]);
  };

  const handleDeletePostIt = (id) => {
    if (postIts.length === 1) {
      alert("마지막 포스트잇은 삭제할 수 없습니다.");
      return;
    }

    const confirmed = window.confirm("포스트잇을 삭제하시겠습니까?");
    if (confirmed) {
      setPostIts(postIts.filter((postIt) => postIt.id !== id));
    }
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

  const handleNextPage = () => {
    if ((currentPage + 1) * POSTS_PER_PAGE < postIts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 현재 페이지의 포스트잇만 가져오기
  const currentPostIts = postIts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  const sortByTimeAsc = () => {
    const sorted = [...postIts].sort((a, b) => a.timestamp - b.timestamp);
    setPostIts(sorted);
  };

  const sortByTimeDesc = () => {
    const sorted = [...postIts].sort((a, b) => b.timestamp - a.timestamp);
    setPostIts(sorted);
  };

  return (
    <PostItBoardContainer>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <button onClick={sortByTimeAsc}>시간순 정렬 (오름차순)</button>
        <button onClick={sortByTimeDesc}>시간순 정렬 (내림차순)</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ActionButton onClick={handlePrevPage} disabled={currentPage === 0}>
          ◀
        </ActionButton>
        <PostItGrid>
          {currentPostIts.map((postIt) => (
            <PostIt key={postIt.id} style={{ backgroundColor: postIt.color }}>
              <PostItInput
                value={postIt.text}
                onChange={(e) => handleTextChange(postIt.id, e.target.value)}
                placeholder="내용을 입력하세요..."
              />
              <small style={{ fontSize: "10px", color: "#555" }}>
                {postIt.createdAt}
              </small>
              <PostItControls>
                <ActionButton onClick={handleAddPostIt}>➕</ActionButton>
                <ActionButton onClick={() => toggleColorMenu(postIt.id)}>
                  ☰
                </ActionButton>
                <ActionButton onClick={() => handleDeletePostIt(postIt.id)}>
                  ❌
                </ActionButton>
                {selectedPostIt === postIt.id && (
                  <ColorMenu>
                    <div
                      onClick={() => handleColorChange(postIt.id, "#FFF978")}
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
        <ActionButton
          onClick={handleNextPage}
          disabled={(currentPage + 1) * POSTS_PER_PAGE >= postIts.length}
        >
          ▶
        </ActionButton>
      </div>
    </PostItBoardContainer>
  );
};

export default PostItBoard;
