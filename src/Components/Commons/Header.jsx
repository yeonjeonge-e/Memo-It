import React from "react";
import { LogoutButton } from "../../pages/PostItBoard/PostItBoardStyle";
import { Navigate } from "react-router-dom";

const handleLogout = () => {
  Navigate("/login", { replace: true });
};

function Header() {
  return (
    <div>
      <h1>Memo-It</h1>
      {/* <LogoutButton onClick={handleLogout}>Logout</LogoutButton> */}
    </div>
  );
}

export default Header;
