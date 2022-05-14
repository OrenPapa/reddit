import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/main.scss";
import { NavbarType } from "../../Types/NavbarType";

function Navbar({ pageTitle, adminName }: NavbarType) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")} className="navbar__title">
        reddit
      </div>
      <div className="navbar__page-title">{pageTitle}</div>
      <div className="navbar__admin-name">{adminName}</div>
    </div>
  );
}

export default Navbar;
