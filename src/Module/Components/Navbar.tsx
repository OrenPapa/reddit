import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Components/Navbar.scss";

function Navbar(props: { pageTitle?: string; adminName?: string }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")} className="navbar__title">
        Reddit
      </div>
      <div className="navbar__page-title">{props.pageTitle}</div>
      <div className="navbar__admin-name">{props.adminName}</div>
    </div>
  );
}

export default Navbar;
